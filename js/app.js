const db = firebase.firestore();

// Handle file selection
document.getElementById('jsonFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const json = JSON.parse(e.target.result);
                document.getElementById('jsonPreview').textContent = 
                    JSON.stringify(json, null, 2);
            } catch (error) {
                document.getElementById('uploadStatus').textContent = 
                    'Invalid JSON file';
            }
        };
        reader.readAsText(file);
    }
});

// Upload data to Firebase
async function uploadData() {
    const statusElement = document.getElementById('uploadStatus');
    const jsonPreview = document.getElementById('jsonPreview').textContent;
    
    if (!jsonPreview) {
        statusElement.textContent = 'Please select a JSON file first';
        return;
    }

    try {
        statusElement.textContent = 'Uploading...';
        const data = JSON.parse(jsonPreview);

        // Validate data structure
        if (!data.version || !Array.isArray(data.lectures)) {
            throw new Error('Invalid data structure');
        }

        // Remove duplicates from the JSON data
        data.lectures = data.lectures.filter((lecture, index, self) =>
            index === self.findIndex((l) =>
                l.day === lecture.day &&
                l.startHour === lecture.startHour &&
                l.startMinute === lecture.startMinute &&
                l.subject === lecture.subject
            )
        );

        // Update version in metadata collection
        await db.collection('metadata').doc('version').set({
            version: data.version
        });

        // Delete existing lectures
        const batch = db.batch();
        const existingLectures = await db.collection('timetable').get();
        existingLectures.docs.forEach(doc => {
            batch.delete(doc.ref);
        });
        await batch.commit();

        // Upload new lectures
        const uploadBatch = db.batch();
        data.lectures.forEach((lecture) => {
            const docRef = db.collection('timetable').doc();
            uploadBatch.set(docRef, lecture);
        });
        await uploadBatch.commit();

        statusElement.textContent = 'Upload successful!';
    } catch (error) {
        statusElement.textContent = 'Error: ' + error.message;
    }
} 
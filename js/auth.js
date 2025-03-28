// Initialize Firebase Auth
const auth = firebase.auth();

// Listen for auth state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('uploadSection').classList.remove('hidden');
        document.getElementById('loginError').textContent = '';
    } else {
        // User is signed out
        document.getElementById('loginSection').classList.remove('hidden');
        document.getElementById('uploadSection').classList.add('hidden');
    }
});

function login() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('loginError');

    // Sign in with Firebase
    auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            errorElement.textContent = 'Invalid email or password';
        });
}

function logout() {
    auth.signOut().then(() => {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('jsonFile').value = '';
        document.getElementById('jsonPreview').textContent = '';
        document.getElementById('uploadStatus').textContent = '';
    }).catch((error) => {
        console.error('Error signing out:', error);
    });
} 
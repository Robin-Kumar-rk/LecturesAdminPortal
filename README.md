# Lectures Admin Portal

A web-based admin portal for managing lecture timetables using Firebase as the backend. This portal allows administrators to upload and manage timetable data that is accessible to the associated Android application.

## Features

- Secure admin login using Firebase Authentication
- JSON file upload for timetable data
- Real-time preview of timetable data
- Firebase integration for data storage
- Modern and responsive UI
- Secure data access control

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Firebase (Authentication & Firestore)
- Font Awesome Icons

## Setup

1. Clone the repository:
```bash
git clone https://github.com/Robin-Kumar-rk/LecturesAdminPortal.git
```

2. Set up Firebase:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing project
   - Enable Email/Password Authentication in Authentication section
   - Create an admin user in Authentication section
   - Enable Firestore Database
   - Update the Firebase configuration in `js/firebase-config.js`
   - Set up Firestore security rules (see Security Rules section)

3. Open `index.html` in your web browser

4. Login with your Firebase Authentication credentials

## Project Structure

```
LecturesAdminPortal/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── auth.js
│   └── firebase-config.js
└── README.md
```

## Firebase Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Email/Password Authentication
3. Create an admin user in Authentication section
4. Enable Firestore Database
5. Get your Firebase configuration from Project Settings
6. Update the configuration in `js/firebase-config.js`

## Security Rules

The project uses Firebase Security Rules to control data access:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to timetable data for all users (Android app)
    match /timetable/{document=**} {
      allow read: if true;
    }
    
    // Allow write access to timetable data only for authenticated users (admin portal)
    match /timetable/{document=**} {
      allow write: if request.auth != null;
    }
    
    // Metadata collection rules
    match /metadata/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Default deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

These rules ensure:
- Android app can read timetable data without authentication
- Only authenticated admin users can modify data
- Metadata collection is protected
- All other collections are denied by default

## Android App Integration

This portal is designed to work with an associated Android application that reads the timetable data. The Android app can access the data without authentication, while modifications are restricted to authenticated admin users through this portal.

## License

This project is licensed under the MIT License. 
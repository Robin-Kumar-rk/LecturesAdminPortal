# Lectures Admin Portal

A web-based admin portal for managing lecture timetables using Firebase as the backend.

## Features

- Simple admin login system
- JSON file upload for timetable data
- Real-time preview of timetable data
- Firebase integration for data storage
- Modern and responsive UI

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Firebase (Firestore)
- Font Awesome Icons

## Setup

1. Clone the repository:
```bash
git clone https://github.com/Robin-Kumar-rk/LecturesAdminPortal.git
```

2. Set up Firebase:
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Update the Firebase configuration in `js/firebase-config.js`

3. Open `index.html` in your web browser

4. Login with the following credentials:
   - Username: Robin
   - Password: 8585

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
2. Enable Firestore Database
3. Get your Firebase configuration from Project Settings
4. Update the configuration in `js/firebase-config.js`

## Security Note

This is a private repository with basic authentication. The portal is intended for internal use only.

## License

This project is licensed under the MIT License. 
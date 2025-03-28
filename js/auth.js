// Admin credentials
const ADMIN_USERNAME = "Robin";
const ADMIN_PASSWORD = "8585";

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('loginError');

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('uploadSection').classList.remove('hidden');
        errorElement.textContent = '';
    } else {
        errorElement.textContent = 'Invalid username or password';
    }
}

function logout() {
    document.getElementById('loginSection').classList.remove('hidden');
    document.getElementById('uploadSection').classList.add('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('jsonFile').value = '';
    document.getElementById('jsonPreview').textContent = '';
    document.getElementById('uploadStatus').textContent = '';
} 
const login = {
    'urganch': [
        { id: 1, name: 'Urganch shahar 1-son oilaviy poliklinika', login: 'urganch1', password: 'pass123' },
        { id: 2, name: 'Urganch shahar 2-son oilaviy poliklinika', login: 'urganch2', password: 'pass123' },
        { id: 3, name: 'Urganch shahar 3-son oilaviy poliklinika', login: 'urganch3', password: 'pass123' }
    ],
    'xiva': [
        { id: 4, name: 'Xiva tuman 1-son poliklinika', login: 'xiva1', password: 'pass123' },
        { id: 5, name: 'Xiva tuman 2-son poliklinika', login: 'xiva2', password: 'pass123' }
    ],
    'bagat': [
        { id: 6, name: 'Bogot tuman 1-son poliklinika', login: 'bagat1', password: 'pass123' }
    ],
    'gurlan': [
        { id: 7, name: 'Gurlan tuman 1-son poliklinika', login: 'gurlan1', password: 'pass123' }
    ],
    'qoshkopir': [
        { id: 8, name: 'Qoshkopir tuman 1-son poliklinika', login: 'qoshkopir1', password: 'pass123' }
    ],
    'shovot': [
        { id: 9, name: 'Shovot tuman 1-son poliklinika', login: 'shovot1', password: 'pass123' }
    ],
    'yangiariq': [
        { id: 10, name: 'Yangiariq tuman 1-son poliklinika', login: 'yangiariq1', password: 'pass123' }
    ],
    'yangibozor': [
        { id: 11, name: 'Yangibozor tuman 1-son poliklinika', login: 'yangibozor1', password: 'pass123' }
    ],
    'hazorasp': [
        { id: 12, name: 'Hazorasp tuman 1-son poliklinika', login: 'hazorasp1', password: 'pass123' }
    ],
    'xonqa': [
        { id: 13, name: 'Xonqa tuman 1-son poliklinika', login: 'xonqa1', password: 'pass123' }
    ]
};

const districtSelect = document.getElementById('district-select');
const polyclinicsList = document.getElementById('polyclinics-list');
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
const loginTitle = document.getElementById('login-title');
const usernameInput = document.getElementById('login-username');
const passwordInput = document.getElementById('login-password');
const systemContainer = document.getElementById('system-container');
const welcomeMessage = document.getElementById('welcome-message');
const currentPolyclinic = document.getElementById('current-polyclinic');
const patientData = document.getElementById('patient-data');
const logoutButton = document.getElementById('logout-button');

let selectedPolyclinic = null;

districtSelect.addEventListener('change', function() {
    loadPolyclinics(this.value);
});

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    handleLogin();
});

logoutButton.addEventListener('click', function() {
    logout();
});


function loadPolyclinics(district) {
    polyclinicsList.innerHTML = '';
    
    if (!district) return;
    
    const polyclinics = login[district] || [];
    
    polyclinics.forEach(polyclinic => {
        const polyclinicElement = document.createElement('div');
        polyclinicElement.className = 'polyclinic-item';
        polyclinicElement.textContent = polyclinic.name;
        polyclinicElement.addEventListener('click', function() {
            showLoginModal(polyclinic);
        });
        polyclinicsList.appendChild(polyclinicElement);
    });
}

function showLoginModal(polyclinic) {
    selectedPolyclinic = polyclinic;
    loginTitle.textContent = `${polyclinic.name} - Tizimga kirish`;
    loginModal.style.display = 'flex';
}

function handleLogin() {
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    if (username === selectedPolyclinic.login && password === selectedPolyclinic.password) {

        loginModal.style.display = 'none';
        welcomeMessage.style.display = 'none';
        systemContainer.style.display = 'block';
        currentPolyclinic.textContent = selectedPolyclinic.name;

        loginForm.reset();
        
        loadPatientData();
    } else {
        alert('Login yoki parol noto\'g\'ri. Iltimos, qayta urinib ko\'ring.');
    }
}

function loadPatientData() {
    patientData.innerHTML = '';
    
    patientsData.forEach(patient => {
        if (patient.hospital === selectedPolyclinic.name) {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${patient.name}</td>
                <td>${formatDate(patient.birthDate)}</td>
                <td>${patient.district}</td>
                <td>${patient.hospital}</td>
                <td>${patient.department}</td>
                <td>${formatDate(patient.date)}</td>
                <td>${patient.time}</td>
                <td>${patient.phone}</td>
            `;
            
            patientData.appendChild(row);
        }
    });
}

function logout() {
    systemContainer.style.display = 'none';
    welcomeMessage.style.display = 'block';
    selectedPolyclinic = null;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('uz-UZ');
}

window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

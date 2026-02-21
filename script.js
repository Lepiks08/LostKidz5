// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    // If not logged in, send them back to login page
    window.location.href = "login.html";
}

// Add a logout function to your "Logout" button if you make one
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = "login.html";
}

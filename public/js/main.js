window.addEventListener('DOMContentLoaded', (event) => {
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');
    var navShow = false;
    navToggle.addEventListener('click', (event) => {
        if (navShow === false) {
            navMenu.style.display = 'block';
            navShow = true;
        } else {
            navMenu.style.display = '';
            navShow = false;
        }
    });    
});
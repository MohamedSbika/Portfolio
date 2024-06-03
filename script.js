function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function toggleDarkMode() {
    const icon = document.querySelector('.dark-mode-toggle i');
    const iconHamburger = document.querySelector('.dark-mode-toggle-hamburger i');
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        iconHamburger.classList.remove('fa-moon');
        iconHamburger.classList.add('fa-sun');
    } else {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        iconHamburger.classList.remove('fa-sun');
        iconHamburger.classList.add('fa-moon');
    }
}



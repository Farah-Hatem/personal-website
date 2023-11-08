// header
let icon = document.getElementById('menu-icon');
let navbar = document.getElementById('navbar');
icon.onclick = function() {
    icon.classList.toggle('fa-xmark');
    navbar.classList.toggle('nav-2');
}
// end header
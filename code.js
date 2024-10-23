let prevScrollPos = window.pageYOffset;
const topBar = document.querySelector('.top-bar');

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        topBar.style.top = "0"; // La barre revient
    } else {
        topBar.style.top = "-100px"; // La barre disparaît (ajustez cette valeur selon la hauteur de la barre)
    }
    prevScrollPos = currentScrollPos;
};

let isMenuOpen = false;

// Fonction pour ouvrir et fermer la navigation
function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "250px") {
        sidenav.style.width = "0";
    } else {
        sidenav.style.width = "250px";
    }
}


// Rendre le bouton flottant en position fixe au fur et à mesure du défilement
window.onscroll = function() {
    var btn = document.querySelector(".floating-btn");
    btn.style.top = window.pageYOffset + "px";
};

function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
}
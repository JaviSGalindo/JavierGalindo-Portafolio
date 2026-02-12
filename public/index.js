document.addEventListener("DOMContentLoaded", function() {
    // Función para el menú hamburguesa
    const menuToggle = document.querySelector(".hamburger-menu");
    const navList = document.querySelector(".navigation-bar-list");
    
    menuToggle.addEventListener("click", function() {
        navList.classList.toggle("active");
    });
});

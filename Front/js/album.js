document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown) return; // Vérifie si le menu déroulant existe avant d'ajouter les événements
    
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    dropdown.addEventListener("mouseover", function () {
        dropdownContent.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
        dropdownContent.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown > a").forEach((dropdownLink) => {
        dropdownLink.addEventListener("click", function (event) {
            if (this.nextElementSibling) { 
                event.preventDefault(); // Empêche le menu de bloquer la navigation
                window.location.href = this.href; // Force la redirection
            }
        });
    });
});
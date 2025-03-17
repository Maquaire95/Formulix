// Fonction de défilement du carrousel
function scrollCarousel(direction) {
    const container = document.querySelector(".carousel-container");
    if (!container) return;
    
    const card = document.querySelector(".card");
    if (!card) return;
    
    const cardWidth = card.offsetWidth + 16; // Largeur + marge
    container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
}
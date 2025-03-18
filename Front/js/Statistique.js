document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".team");
    
    function reveal() {
        sections.forEach((section) => {
            let windowHeight = window.innerHeight;
            let sectionTop = section.getBoundingClientRect().top;
            let revealPoint = 150;
            
            if (sectionTop < windowHeight - revealPoint) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }
    
    window.addEventListener("scroll", reveal);
    reveal(); // Pour afficher la première section immédiatement
});
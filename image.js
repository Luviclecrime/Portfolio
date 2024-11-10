document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.image');
    
    function handleScroll() {
        const position = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Si l'image est dans la fenêtre, on lui ajoute la classe 'show'
        if (position < windowHeight - 50) {
            image.classList.add('show');
            window.removeEventListener('scroll', handleScroll); // On arrête d'écouter le scroll après l'animation
        }
    }

    // On ajoute l'écouteur d'événements pour le scroll
    window.addEventListener('scroll', handleScroll);
});

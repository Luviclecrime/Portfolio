// Lorsque la page est scrollée, afficher ou cacher la flèche
window.onscroll = function() {
    var backToTopBtn = document.getElementById("backToTop");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
};

// Lorsque la flèche est cliquée, revenir en haut
document.getElementById("backToTop").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

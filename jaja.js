const textElement = document.getElementById('text');
const texts = ["développeur d'application web pour mobile", "développeur de site internet","hebergeur de site web","formateur en programation WEB"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffet() {
    const texte_courrant = texts[textIndex];
    textElement.textContent = texte_courrant.slice(0, charIndex);

    if (!isDeleting && charIndex < texte_courrant.length) {
        charIndex++;
        setTimeout(typeEffet, 150);
    } else if (!isDeleting && charIndex === texte_courrant.length) {
        isDeleting = true;
        setTimeout(typeEffet, 1000); 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; 
        setTimeout(typeEffet, 500); 
    } else if (isDeleting) {
        charIndex--;
        setTimeout(typeEffet, 100);
    }
}

typeEffet();

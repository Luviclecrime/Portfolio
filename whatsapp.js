function sendToWhatsapp() {
    // Récupérer les valeurs des champs
    const name = document.getElementById("name").value;  // Ajouter un champ "name"
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;
    
    // Vérifier que les champs ne sont pas vides
    if (email && number && message) {
        const phoneNumber = "+237654568728";  // Numéro du destinataire
        // Créer le message formaté avec les informations
        const textMessage = `nom:${name}%0Aemail:${email}%0Anumber:${number}%0Amessage:${message}`;
        // Créer l'URL pour envoyer le message via WhatsApp
        const sendToWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;
        
        // Ouvrir le lien dans une nouvelle fenêtre
        window.open(sendToWhatsappUrl, "_blank");
    } else {
        alert("Veuillez renseigner tous les champs pour que votre requête soit transmise.");
    }
}

// Liste des catégories d'images aléatoires depuis Unsplash
const categories = ["nature", "city", "space", "ocean", "forest", "mountain", "desert", "night", "sunset"];

// Fonction pour changer l’image de fond
function changeBackground() {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const imageUrl = `https://source.unsplash.com/1920x1080/?${randomCategory}`;

    // Créer une nouvelle image pour s'assurer qu'elle est bien chargée avant de l'afficher
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
        document.body.style.backgroundImage = `url(${imageUrl})`;
    };
}

// Fonction pour mettre à jour l'heure
function updateClock() {
    const timezone = document.getElementById("timezone").value;
    const now = new Date();
    const options = {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        fractionalSecondDigits: 2
    };
    
    // Obtenir les centièmes de secondes
    const milliseconds = now.getMilliseconds();
    const centiemes = Math.floor(milliseconds / 10);

    // Formater l'heure avec les options
    const formatter = new Intl.DateTimeFormat('fr-FR', options);
    let timeString = formatter.format(now);

    // Ajouter les centièmes de seconde manuellement
    timeString = timeString.replace(/(:\d{2})$/, `$1.${centiemes.toString().padStart(2, '0')}`);

    document.getElementById("clock").textContent = timeString;
}

// Mettre à jour l'horloge toutes les 10ms
setInterval(updateClock, 10);
updateClock();

// Changer l'image de fond au chargement et toutes les 10 secondes
changeBackground();
setInterval(changeBackground, 10000);

// Mettre à jour l'heure si on change de fuseau horaire
document.getElementById("timezone").addEventListener("change", updateClock);


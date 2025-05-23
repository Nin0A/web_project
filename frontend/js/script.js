// Exemple pour ajuster la vitesse dynamiquement
const marquee = document.querySelector('.marquee-content');

// Exemple pour ajuster la vitesse dynamiquement
const marquee2 = document.querySelector('.marquee-content2');

// Change la durée de l'animation avec JavaScript
function setSpeed(speed) {
    marquee.style.animationDuration = `${speed}s`;
    marquee2.style.animationDuration = `${speed}s`;
}

// Exemple : ajuster la vitesse à 5 secondes
setSpeed(15);


document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.setProperty('--progress', value); // Met à jour la progression
        bar.style.setProperty('--progress-color', 'black'); // Couleur personnalisée (ex: vert)
    });
});


function scrollToSection() {
    document.querySelector('#first-section').scrollIntoView({
        behavior: 'smooth'
    });
}














//////////////////////////////
// AUtO Scroll 
///////////////////////////////


// Sélectionner toutes les sections
const sections = document.querySelectorAll('.page-section');

// Variables pour savoir si le scroll est en cours
let isScrolling = false;
let scrollTimeout;
let lastScrollY = 0; // Dernière position de scroll enregistrée
let smoothScrollTimeout = null; // pour gérer l'animation de scroll

// Fonction pour vérifier la visibilité des sections et appliquer la classe active
function checkVisibility() {
    let closestSection = null;
    let closestDistance = Infinity;

    // Vérifier toutes les sections
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        // Calculer la distance du centre de la fenêtre au centre de la section
        const sectionCenter = rect.top + rect.height / 2;
        const windowCenter = window.innerHeight / 2;

        // Calculer la distance entre le centre de la fenêtre et le centre de la section
        const distance = Math.abs(windowCenter - sectionCenter);

        // Trouver la section la plus proche du centre de la fenêtre
        if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
        }
    });

    // Appliquer la classe active à la section la plus proche du centre
    sections.forEach(section => {
        if (section === closestSection) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    // Si la section la plus proche n'est pas centrée et qu'on n'est pas en train de scroller
    if (closestSection && !isScrolling) {
        smoothScrollTo(closestSection);
    }
}

// Fonction pour effectuer un défilement fluide et rapide vers la section
function smoothScrollTo(element) {
    // Si un scroll est déjà en cours, on l'annule
    if (smoothScrollTimeout) {
        clearTimeout(smoothScrollTimeout);
    }

    // Calculer la position de la section à atteindre
    const targetScroll = element.offsetTop - (window.innerHeight / 2 - element.offsetHeight / 2);

    // Appliquer le défilement avec un comportement 'smooth' et une vitesse plus rapide
    window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
    });
}

// Fonction pour gérer le scroll
window.addEventListener('scroll', () => {
    // Marquer que le scroll est en cours
    isScrolling = true;

    // Sauvegarder la dernière position de scroll
    lastScrollY = window.scrollY;

    // Annuler le précédent `setTimeout` si l'utilisateur scrolle à nouveau
    clearTimeout(scrollTimeout);

    // Planifier l'exécution de la fonction `checkVisibility` après 50ms
    scrollTimeout = setTimeout(() => {
        isScrolling = false;
        checkVisibility(); // Vérifier et centrer la section
    }, 400); // Délai très court pour rendre le centrage plus réactif

    // Si un scroll est en cours et qu'une animation était lancée, réinitialiser après un petit délai
    if (smoothScrollTimeout) {
        clearTimeout(smoothScrollTimeout); // Annuler l'animation en cours
    }

    // Relancer l'animation après un délai si l'utilisateur arrête de scroller
    smoothScrollTimeout = setTimeout(() => {
        if (!smoothScrollTimeout) {
            checkVisibility(); // Relancer le centrage si l'animation est arrêtée
        }
    }, 50); // Relancer immédiatement après l'arrêt du scroll
});

// Appeler la fonction une fois au chargement pour prendre en compte les sections déjà visibles
checkVisibility();

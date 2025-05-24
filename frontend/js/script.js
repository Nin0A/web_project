
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


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderContainer = document.querySelector('.slider-container');
    let currentIndex = 0;

    // Tableau de couleurs de fond pour chaque diapositive
    const backgroundColors = [
        '#CA3C66',
        '#6A5ACD',
        '#20B2AA',
        '#FFD700',
        '#32CD32'
    ];

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        // Change la couleur de fond du conteneur
        sliderContainer.style.backgroundColor = backgroundColors[currentIndex];
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Change slide every 3 seconds (optional)
    // setInterval(nextSlide, 3000);
});


document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    function checkVisibility() {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on load
});
document.addEventListener('mousemove', function(e) {
    const light = document.getElementById('light');
    light.style.transform = `translate(${e.clientX - 100}px, ${e.clientY - 100}px)`;
  });
  

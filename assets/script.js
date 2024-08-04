// Tableau contenant les informations de chaque diapositive images et textes
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// ici Initialisation de la variable à 0, index de la diapositive affichée
let currentSlide = 0;

//Selection des éléments
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

// Crée les points de navigation 
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === currentSlide) {
        dot.classList.add('dot_selected');
    }
    dot.addEventListener('click', () => showSlide(index));
    dotsContainer.appendChild(dot);
});

//évènements d'écoute 
arrowLeft.addEventListener("click", () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
});

arrowRight.addEventListener("click", () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
});

//met à jour l'image et le texte de la diapositive en cours, et met à jour les points de navigation pour refléter la diapositive active.
function showSlide(index) {
    currentSlide = index;
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('dot_selected', dotIndex === index);
    });
}

// Affiche la première diapositive au chargement de la page
showSlide(currentSlide);

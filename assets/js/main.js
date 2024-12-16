//initalisation du tooltip de bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//redirection sur le HeroSection
if(window.location.href != 'https://diaby-mamadou.vercel.app/index.html#heroSection'){
    window.location.href = 'https://diaby-mamadou.vercel.app/index.html#heroSection';
}


// Navigation par flèche sur la page
const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;

function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSectionIndex = index;
    }
}

window.addEventListener('keydown', (event) => {
    // Empêche le comportement par défaut
    event.preventDefault();
    if (event.key === 'ArrowDown') {
        scrollToSection(currentSectionIndex + 1);
    } else if (event.key === 'ArrowUp') {
        scrollToSection(currentSectionIndex - 1);
    }
});


// Navigation par flèche sur la section about
const nav_pills = document.querySelectorAll('#aboutSection ul li a');
let currentAboutIndex = 0;
function scrollToPill(index) {
    if (index >= 0 && index < nav_pills.length) {
        nav_pills[index].click();
        currentAboutIndex = index;
    }
}

const navPillNavigation =  (event) => {
    // Empêche le comportement par défaut
    event.preventDefault();
    if (event.key === 'ArrowRight') {
        scrollToPill(currentAboutIndex + 1);
    } else if (event.key === 'ArrowLeft') {
        scrollToPill(currentAboutIndex - 1);
    }
}



//Observer
const observer = new IntersectionObserver((entries) => {
    const footer = document.getElementById('footer');
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            if(entry.target.id == "heroSection"){
                //footer apparition
                if(!footer.classList.contains('d-none')){ footer.classList.remove('d-flex'); footer.classList.add('d-none') ;}
                window.removeEventListener('keydown', navPillNavigation );
            }
            if(entry.target.id == "aboutSection"){
                //footer apparition
                if(!footer.classList.contains('d-flex')){ footer.classList.remove('d-none'); footer.classList.add('d-flex');}
                window.addEventListener('keydown', navPillNavigation );
            }
            if(entry.target.id == "projectSection"){
                //footer apparition
                if(!footer.classList.contains('d-flex')){ footer.classList.remove('d-none'); footer.classList.add('d-flex');}
                const projectCarousel = document.querySelector('.carousel-project');
                projectCarousel.focus();
                window.removeEventListener('keydown', navPillNavigation );
            }

        }
    });
});

const hiddenElements = document.querySelectorAll('section');
hiddenElements.forEach((el) => observer.observe(el));

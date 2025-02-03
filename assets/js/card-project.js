
class ProjectCard {
    constructor(image_src, img_alt, title, description, techs,extra, github, live, isNew, isComing) {
        this.image_src = image_src;
        this.img_alt = img_alt;
        this.title = title;
        this.description = description;
        this.techs = techs;
        this.extra = extra,
        this.github = github;
        this.live = live;
        this.isNew = isNew;
        this.isComing = isComing;
    }

    get extraTarget() {
        return `#${this.extra}CarouselModal`;
    }
}

const projectCardJSON = {
    0 : new ProjectCard(
        "images/project/leMauvaiscoins/1.png",
        "project",
        "LeMauvaisCoins",
        "Projet (groupe) durant ma Licence Professionnelle Métier de L'Informatique: Application Web",
        ["Php", "Mysql","Javascript", "AzureDevOps"],
        "leMauvaisCoins",
        "https://lemauvaiscoins.rf.gd",
        "https://github.com/404diaby/leMauvaisCoins",
        true,
        true
    ),
    1: new ProjectCard(
        "images/project/sushiShop/1.png",
        "project",
        "SushiShop",
        "Projet durant ma Licence Professionnelle Métier de L'Informatique: Application Web",
        ["wordpress"],
        "sushiShop",
        "",
        "https://sushishop.rf.gd/?i=1",
        true,
        true
    ),
    2 : new ProjectCard(
        "images/project/gsbVisite/1.png",
        "projet",
        "gsbVisite",
        "Projet PPE (Projet personnel encadré) durant ma deuxième année de BTS SIO option SLAM.",
        ["Php", "Html", "Css", "Vanilla Javascript", "MySql"],
        "gsbVisite",
        "https://github.com/404diaby/gsbVisite",
        "https://gsbvisite.rf.gd/",
        false,
        false
    ),
    3: new ProjectCard(
        "images/project/traducteur_markdown_html/heroPage.jpg",
        "project",
        "LaBonneAnnonce",
        "Projet (groupe) durant ma Licence Professionnelle Métier de L'Informatique: Application Web",
        ["Php", "Mysql", "AzureDevOps"],
        "traducteurMarkdownHtml",
        "",
        "",
        true,
        true
    ),
    4 : new ProjectCard(
        "images/project/gsbVisite/heroPage.jpg",
        "project",
        "Mosaïque Ottomane",
        "Projet (seul) durant ma Licence Professionnelle Métier de L'Informatique : Application Web",
        ["Angular12"],
        "mosaiqueOttomane",
        "",
        "",
        true,
        true
    ),
5: new ProjectCard(
        "images/project/traducteur_markdown_html/heroPage.jpg",
        "projet",
        "TraducteurMarkdownHtml",
        "Projet tutoret durant ma Licence Professionnelle Métier de l'Informatique : Application Web",
        ["Java", "Html", "Bootstrap", "Vanilla Javascript"],
        "traducteurMarkdownHtml",
        "",
        "",
        true,
        true
    ),
    6 : new ProjectCard(
        "images/project/github-user-search/preview-dark-mode.png",
        "project",
        "Github-user-search",
        "Projet personnel.",
        ["Html", "Css", "Vanilla Javascript", "API"],
        "githubUserSearch",
        "https://github.com/404diaby/github-user-search",
        "https://github-user-search-ten-green.vercel.app/",
        false,
        false
    ),
    7: new ProjectCard(
        "images/project/todoApp/heroPage.png",
        "project",
        "TodoApp",
        "Projet personnel",
        ["Html", "Css", "Vanilla Javascript"],
        "todoApp",
        "https://github.com/404diaby/ToDoList",
        "https://404diaby-to-do-list-app.vercel.app/",
        false,
        false
    ),
    8 :new ProjectCard(
        "images/project/portfolio/heroPage.png",
        "project",
        "Portfolio",
        "Mon premier portfolio fait à l'occasion de l'épreuve E4 de mon BTS SIO option SLAM",
        ["Html", "Css", "Vanilla Javascript", "Jquery", "Isotope", "Flickity", "Smooth-scroll"],
        "portfolio",
        "https://github.com/404diaby/oldportfolio",
        "https://diaby-mamadou-old-portfolio.vercel.app/index.html",
        false,
        false
    ),
    9 : new ProjectCard(
        "images/project/traducteur_markdown_html/heroPage.jpg",
        "project",
        "RapportModeleDonnees",
        "Projet réalise lors de mon stage à OKTEO durant ma deuxième année de BTS SIO option SLAM",
        ["Java", "Maven", "PostgreSQL"],
        "rapportModeleDonnees",
        "",
        "",
        false,
        false
    ),
    10 : new ProjectCard(
        "images/project/advice-generator-app/desktop-design.jpg",
        "project",
        "Advice Generator App",
        "Projet personnel",
        ["Html, Css", "Vanilla Javascript","API"],
        "adviceGeneratorApp",
        "https://github.com/404diaby/advice-generator-app",
        "https://advice-generator-app-tau-three.vercel.app/",
        false,
        false
    ),
    11 : new ProjectCard(
        "images/project/calculator/1.png",
        "project",
        "Calculator",
        "Projet personnel",
        ["Html, Css", "Vanilla Javascript"],
        "calculator",
        "https://github.com/404diaby/calculator",
        "https://calculator-five-smoky-95.vercel.app",
        false,
        false
    )

    // 11 : "APE | | sdis21 | gsbapplifrais |  | advisor generator | CALCULATOR "
}
//
const projectCardTemplate = document.querySelector('#projectCard');
const projectCarouselCells = document.querySelectorAll('.carousel-cell-project');
const toastLiveExample = document.getElementById('liveToast'); // Élément du toast

// Création ou récupération de l'instance du toast avec des options
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample, {
    animation: true, // Activer les animations
    autohide: true,  // Masquer automatiquement
    delay: 3000      // Délai avant le masquage automatique (en millisecondes)
});

for(let x = 0 ; x <  projectCarouselCells.length ; x++ ){
    const card = projectCardTemplate.content.cloneNode(true);
    const img = card.querySelector('.card-img-top');
    img.setAttribute('src',projectCardJSON[x].image_src);
    if(projectCardJSON[x].isNew) {
        const badgeContainer = card.querySelector('.card-text:first-child');
        const badge = document.createElement("span");
        badge.textContent = "Nouveaux";
        badge.classList.add("badge","text-bg-success","me-2","placeholder-wave");
        badgeContainer.appendChild(badge);
    }
    if(projectCardJSON[x].isComing) {
        const badgeContainer = card.querySelector('.card-text:first-child');
        const badge = document.createElement("span");
        badge.textContent = "Bientot";
        badge.classList.add("badge","text-bg-warning","placeholder-wave")
        badgeContainer.appendChild(badge);
    }
    const title = card.querySelector(".card-title");
    title.textContent = projectCardJSON[x].title;
    const description = card.querySelector(".card-text:nth-of-type(2)");
    description.textContent = projectCardJSON[x].description;
    const techs = card.querySelector(".card-text:last-child");
    techs.textContent = "Techs/Tools :";
    techs.appendChild(document.createElement("br"))

    projectCardJSON[x].techs.forEach(tech => {
        techs.appendChild(setPill(tech));
    })

    const extra = card.querySelector("button");
    extra.setAttribute("data-bs-target",projectCardJSON[x].extraTarget);

    const github = card.querySelector("a");
    if(projectCardJSON[x].github == ""){
        github.addEventListener('click', (e) => {
            toastBootstrap.show();
            e.preventDefault();
        });
    }else{
        github.setAttribute('href', projectCardJSON[x].github);
    }

    const live = card.querySelector("a:last-child");
    if(projectCardJSON[x].live == ""){
        live.addEventListener('click', (e) => {
            toastBootstrap.show();
            e.preventDefault();
        });
    }else{
        live.setAttribute('href', projectCardJSON[x].live);
    }
    console.log(card)
    projectCarouselCells[x].append(card);
}

function setPill(tech) {
    const pill = document.createElement("span");
    pill.textContent = tech;
    pill.classList.add("badge","rounded-pill","text-bg-primary","me-2","placeholder-wave");
    return pill;
}







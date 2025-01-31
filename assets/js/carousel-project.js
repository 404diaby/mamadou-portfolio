
const flickityButton = document.querySelectorAll('.flickity-button');
flickityButton.forEach(button => { button.classList.add('placeholder-wave'); });

 //inint flickity
 let elems = document.querySelectorAll('.carousel-project');
 elems.forEach(elem => {
     const flkty = new Flickity( elem, {
         // options
         /*freeScroll: true,*/
         groupCells: true,
         /*wrapAround: true,*/
         /* autoPlay: true,*/
         pageDots: false,
         fade: true,
         imagesLoaded: true
     });

 })


       // Réinitialiser Flickity à l'ouverture de la modal
  const modals = document.querySelectorAll('.carouselModal');
  modals.forEach( (modal) => {
    modal.addEventListener('shown.bs.modal', function () {
    // Rechercher l'instance Flickity et réinitialiser
    const flktyM = new Flickity(modal.querySelector('.carousel-modal'), {
      autoPlay: 3000,
      adaptiveHeight: true,
      pageDots: false,
      fade: true,
      imagesLoaded: true
    });

    // Ajuster Flickity
    flktyM.resize();
  });
  })
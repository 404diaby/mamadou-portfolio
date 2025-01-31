//******** Loading ******/


let count = 0;

const seconde = setInterval( () => {console.log(count); count++; } , 1000);

document.addEventListener("DOMContentLoaded", function() {
  const overlayLoader = document.getElementById("overlayLoader");

  if( (count < 2)  ) {
    setTimeout( () => {  overlayLoader.classList.add("opacity-0"); } , 1000 );


    setTimeout(() => {
      //overlayLoader.classList.remove("loaded");
      overlayLoader.classList.add("d-none");

    }, 1200)


    }else {
     // overlayLoader.classList.remove("loaded");
    overlayLoader.classList.add("d-none");

    }
    clearInterval(seconde);


  let btns = document.querySelectorAll('#myTab li a');
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let grids = document.querySelectorAll('.grow');
      grids.forEach( (grid) => {
        imagesLoaded(grid, function () { let msnry = new Masonry(grid, {itemSelector: '.grow-item', percentPosition: true});
          msnry.layout();
        });
      })
    });
  });

  const heroSection = document.querySelector('section#heroSection');
  heroSection.click();
  heroSection.focus();





});



  
 

   
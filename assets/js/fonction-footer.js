

//credit 
// ajouter volume au content quand le bottuon est cliqué
const creditButton = document.getElementById('creditButton');
const creditContainer = document.getElementById('creditContainer');
const creditContent = document.getElementById('collapseWidthExample');
creditButton.addEventListener('click', (e) => {
  if(creditButton.getAttribute('aria-expanded') == 'true' ){
    creditContainer.classList.add('p-1');
    creditButton.style.backgroundColor = '#DFDBE5';
  }else{
    creditContainer.classList.remove('p-1');
    creditButton.style.backgroundColor = '#9c92ac';
  }

//-- auto fermeture credit
if(!e.target.classList.contains('collapsed')){

    setTimeout( () => {
      if(creditButton.getAttribute('aria-expanded') == 'true' ){ creditButton.click(); }
       
    } ,5000);
}
});


 

//auto fermeture back to top 
/*
const backToTopButton = document.getElementById('backToTopButton');
const backToTopContent = document.getElementById('CollapsedBackToTop');
  
backToTopButton.addEventListener('click' , (e) => {
    if(!e.target.classList.contains('collapsed')){
        setTimeout( () => {
            backToTopButton.click();
        } ,5000);
    }
});*/




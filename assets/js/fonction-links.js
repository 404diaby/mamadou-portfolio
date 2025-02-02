
const linksContainer = document.getElementById('linksContainer');
const linksContent = document.getElementById('collapseLinks');
const linksButton = document.getElementById('linksButton');
const allLinksButton = document.querySelectorAll('.linksButton');

const isTabletOrDesktop = window.matchMedia("(min-width: 768px)").matches;

if (isTabletOrDesktop) {
const autoClickor_linksContainer = setInterval(() => {
    linksButton.click();
  }, 10000);
  // 
}

// ajouter volume au content quand le bottuon est cliqué
linksButton.addEventListener('click' , () => {

  if(linksButton.getAttribute('aria-expanded') == 'true' ){
    linksContainer.classList.add('p-1');
    allLinksButton.forEach( (element) => {
      element.style.backgroundColor = '#DFDBE5';
      element.addEventListener('click', () => {
        openLink(element.getAttribute('data-href'));
      });

    })
  }else{
    linksContainer.classList.remove('p-1');
    allLinksButton.forEach( (element) => {
      element.style.backgroundColor = '#9c92ac';
    })
  }
 
});

linksButton.click();

function openLink(href) {
    window.open(href, '_blank');
}
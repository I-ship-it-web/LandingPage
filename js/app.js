//  GLOBAL VARIABLES 
const navList = document.querySelector('#navbar__list'); 
const section = document.querySelectorAll('section');
const body = document.querySelector('body');


/*       EVENT LISTENER       */

window.addEventListener('scroll', scrollReveal);
window.addEventListener('scroll', smoothScroll);


// FUNCTIONS 

// CREATING the NAVBAR
function menuBar() {

  for (b = 0; b < section.length; b++) {
    const id = section[b].id;
    const dataNav = section[b].dataset.nav;

    const list = document.createElement('li');

    list.innerHTML = `<a class = 'menu__link' href = '#${id}'> ${dataNav}</a>`;
    navList.appendChild(list);
  }
    
}
menuBar();

// SCROLL ACTIVE SECTION
function scrollReveal() {

  for (let i = 0; i < section.length; i++) {
    const secPos = section[i].getBoundingClientRect().top;
    const windowHeight = window.innerHeight / 1.5;
    let sectionPoint = 150;
  
  
    if (secPos < windowHeight - sectionPoint) {
      section[i].classList.add('your-active-class');

    } else {
      section[i].classList.remove('your-active-class');
    }
  }
}

function smoothScroll() {
  body.style.scrollBehavior = 'smooth';
}
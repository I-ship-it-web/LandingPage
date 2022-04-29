//  GLOBAL VARIABLES 
const navList = document.querySelector('#navbar__list'); 
const section = document.querySelectorAll('section');
const body = document.querySelector('body');
const backUp = document.querySelector('#backUp');

/*       EVENT LISTENER       */
backUp.addEventListener('click', navigateUp, false);
// smooth - scroll behavior 
navList.addEventListener('click', (evt) => {
  evt.preventDefault();

  const section = document.querySelector(evt.target.getAttribute('href'));
  section.scrollIntoView({ behavior: 'smooth'});
});

// FUNCTIONS 
//Highlighting of position at navigation
$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass('navActive');
    $(this).addClass('navActive');
  });
});

// CREATING the NAVBAR
function menuBar() {

  for (b = 0; b < section.length; b++) {
    const id = section[b].id; 
    const dataNav = section[b].dataset.nav;

    const list = document.createElement('li');

    list.innerHTML = `<a class = 'menu__link' href = '#${id}' > ${dataNav}</a>`;
    navList.appendChild(list);
  } 
}
menuBar();

// SCROLL ACTIVE SECTION

// idea from this video https://www.youtube.com/watch?v=2IbRtjez6ag
/* 
  Here I use "IntersectionObserver", cuz it's calculate on their own. More info in the README.md
*/
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('your-active-class', entry.isIntersecting);
  })
},{
  threshold: 0.5,
  behavior: 'smooth'
});

section.forEach(section => {
  observer.observe(section)
});

// Function to get Up from bottom to top with scroll behavior
function navigateUp(e){
  document.body.scrollIntoView({behavior: 'smooth'});
};

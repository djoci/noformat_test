let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

function scroldown(){
  window.scroll({
    top: 25000, 
    left: 0, 
    behavior: 'smooth' 
  });

}
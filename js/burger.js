let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = document.querySelectorAll('.close-link');
let topHeader = document.querySelector('.header-top');

burger.addEventListener('click', function (){
  document.body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger--active');
  burger.setAttribute("aria-expanded", "true");
  menu.classList.toggle('nav--active');
  topHeader.classList.toggle('header-top--active');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    document.body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    burger.setAttribute("aria-expanded", "false");
    menu.classList.remove('nav--active');
    topHeader.classList.remove('header-top--active');
  })
})

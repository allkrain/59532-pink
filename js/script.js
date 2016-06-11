//меню

var navMain = document.querySelector(".main-menu");
var navBtn = document.querySelector(".main-menu__btn");

navMain.classList.remove('main-menu--nojs');
navMain.classList.add('main-menu--close');

navBtn.addEventListener('click', function() {
  if (navMain.classList.contains('main-menu--close')) {
    navMain.classList.remove('main-menu--close');
    navMain.classList.add('main-menu--open');
  } else {
    navMain.classList.add('main-menu--close');
    navMain.classList.remove('main-menu--open');
  }
});

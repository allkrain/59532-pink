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

//карта

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.9387, 30.3236],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.938600, 30.322629], {
            hintContent: 'Pink',
            balloonContent: 'Pink'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../../img/icon-map-marker.svg',
            iconImageSize: [36, 46],
        });

    myMap.geoObjects.add(myPlacemark);
});

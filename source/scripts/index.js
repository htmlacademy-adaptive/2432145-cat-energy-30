/* в этот файл добавляет скрипты*/
const headerWrapper = document.querySelector('.header__wrapper');
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const navWrapper = document.querySelector('.nav__wrapper');
const address = document.querySelector('.address');

//Если js не работает.
headerWrapper.classList.remove('header__wrapper--nojs');
nav.classList.remove('nav--nojs');
address.classList.remove('address--nojs');

//Открытие/закрытие бургер-меню.
navToggle.onclick = function () {
  navToggle.classList.toggle('nav__toggle--open-burger');
  navToggle.classList.toggle('nav__toggle--close-burger');
  navWrapper.classList.toggle('nav__wrapper--phone-menu-open');
};

/* в этот файл добавляет скрипты*/
const pageBody = document.querySelector('.page__body');
const navToggle = document.querySelector('.nav__toggle');
const navWrapper = document.querySelector('.nav__wrapper');

//Если js не работает.
pageBody.classList.remove('page__body--nojs');

//Открытие/зактрытие бургер-меню.
navToggle.classList.toggle('nav__toggle--close-burger');
navToggle.classList.toggle('nav__toggle--open-burger');
navToggle.onclick = function () {
  navToggle.classList.toggle('nav__toggle--open-burger');
  navToggle.classList.toggle('nav__toggle--close-burger');
  navWrapper.classList.toggle('nav__wrapper--phone-menu-open');
};

//Скрипты карты.
const addressImageWrapper = document.querySelector('.address__image-wrapper');
addressImageWrapper.classList.remove('address__image-wrapper--no-js');

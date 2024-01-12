/* в этот файл добавляет скрипты*/
const navToggle = document.querySelector('.nav__toggle');
const navWrapper = document.querySelector('.nav__wrapper');

navToggle.classList.remove('nav__toggle--close-burger');
navToggle.classList.add('nav__toggle--open-burger');
navToggle.onclick = function () {
  navToggle.classList.remove('nav__toggle--open-burger');
  navToggle.classList.add('nav__toggle--close-burger');
  navWrapper.classList.add('nav__wrapper--phone-menu-open');
};

navWrapper.classList.remove('nav__wrapper--phone-menu-nojs');

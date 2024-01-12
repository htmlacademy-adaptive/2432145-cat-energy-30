/* в этот файл добавляет скрипты*/
const navToggle = document.querySelector('.nav__toggle');
const navWrapper = document.querySelector('.nav__wrapper');

navWrapper.classList.remove('nav__wrapper--phone-menu-nojs');

navToggle.classList.toggle('nav__toggle--close-burger');
navToggle.classList.toggle('nav__toggle--open-burger');
navToggle.onclick = function () {
  navToggle.classList.toggle('nav__toggle--open-burger');
  navToggle.classList.toggle('nav__toggle--close-burger');
  navWrapper.classList.toggle('nav__wrapper--phone-menu-open');
};

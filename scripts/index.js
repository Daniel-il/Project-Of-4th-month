const burgerButton = document.querySelector(".header__burger-button");
const headerNavigation = document.querySelector(".header__navigation");
const closeButton = document.querySelector(".header__close-button");
const headerLogo = document.querySelector(".header__logo");
const enrollButton = document.querySelector('.enroll__button')

burgerButton.addEventListener("click", function () {
  if (window.innerWidth > 673) {
    headerLogo.classList.add("header__logo_disabled");
    headerNavigation.classList.add("header__navigation_active");
    closeButton.classList.add("header__close-button_active");
    burgerButton.classList.remove("header__burger-button_active");
  } else if (window.innerWidth < 672) {
    headerLogo.classList.remove("header__logo_disabled");
    headerNavigation.classList.add("header__navigation_active");
    closeButton.classList.add("header__close-button_active");
    burgerButton.classList.remove("header__burger-button_active");
  }
});
closeButton.addEventListener("click", function () {
  headerLogo.classList.remove("header__logo_disabled");
  headerNavigation.classList.remove("header__navigation_active");
  closeButton.classList.remove("header__close-button_active");
  burgerButton.classList.add("header__burger-button_active");
});
enrollButton.addEventListener('click',() => {
  enrollButton.textContent = "Спасибо!"
})
const elHamburgerBtn = document.querySelector('.hamburger-btn')
const elHeader = document.querySelector('.header')

elHamburgerBtn.addEventListener('click', function () {
    elHeader.classList.toogle('.header--adaptive')
})
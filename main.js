const elHamburger = document.querySelector('.hamburger-btn')
const elHeader = document.querySelector('.header')

elHamburger.addEventListener('click', function(){
    elHeader.classList.toggle('header--adaptive')
})


const headerNavBtn = document.querySelector('.header__nav-btn')
const headerNav = document.querySelector('.header__navigation')

headerNavBtn.addEventListener('click', () => {
    headerNav.classList.toggle('header__navigation_open')
})
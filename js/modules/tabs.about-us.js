const advBtns = document.querySelectorAll('.advantage__btn');
const advItems = document.querySelectorAll('.advantage__item-content');

advBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        advItems.forEach((item, j) => {
            if (i === j) {
                advBtns[j].classList.add('advantage__btn_active');
                advItems[j].classList.add('advantage__item-content_active')
            } else {
                advBtns[j].classList.remove('advantage__btn_active');
                advItems[j].classList.remove('advantage__item-content_active')
            }
        })
    })
})


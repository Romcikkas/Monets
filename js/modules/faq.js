const hide = (item, answer) => {
    if (!item.classList.contains('faq__item_show')) return;

    answer.style.height = `${answer.offsetHeight}px`;
    answer.offsetHeight;
    answer.style.display = 'block';
    answer.style.height = 0;
    answer.style.overflow = 'hidden';
    answer.style.transition = 'height 0.36s ease-in-out';
    
    item.classList.remove('faq__item_show');

        setTimeout(() => {
        answer.style.display = '';
        answer.style.height = '';
        answer.style.overflow = '';
        answer.style.transition = '';
    }, 360);
};

const show = (item, answer) => {
    if (item.classList.contains('faq__item_show')) return;

    answer.style.display = 'block';
    const height = answer.offsetHeight;
    answer.style.height = 0;
    answer.style.overflow = 'hidden';
    answer.style.transition = 'height 0.36s ease-in-out';
    answer.offsetHeight;
    answer.style.height = `${height + 44}px`;

    console.log(height, answer.style.height);

    setTimeout(() => {
        item.classList.add('faq__item_show');
        answer.style.display = '';
        answer.style.height = '';
        answer.style.overflow = '';
        answer.style.transition = '';
    }, 360);
};

export const accordion = () => {
    const list = document.querySelector('.faq__list');

    list.addEventListener('click', e => {
        const btn = e.target.closest('.faq__question');

        if (btn) {
            const item = btn.closest('.faq__item');
            const answer = item.querySelector('.faq__answer');

            item.classList.contains('faq__item_show') ? hide(item, answer) : show(item, answer);
        }
    })
}


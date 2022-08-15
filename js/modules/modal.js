const regBtn = document.querySelector('.hero__button');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

regBtn.addEventListener('click', () => {
    overlay.classList.add('overlay_open');
    modal.classList.add('modal_open');
})

overlay.addEventListener('click', (e) => {
    if(e.target === overlay || e.target.closest('.modal__close')) {
        overlay.classList.remove('overlay_open');
        modal.classList.remove('modal_open');
    }
});

const form = document.querySelector('form');
const modalTitle = document.querySelector('.modal__title');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        name: form.name.value,
        surname: form.surname.value,
        phone: form.phone.value
    };

    fetch('https://api-form-order.herokuapp.com/api/order', {
        method: 'post',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    
    .then(person => {
        modalTitle.textContent = person.name + ', your registration is Completed!';
        form.remove()

        setTimeout(() => {
            overlay.classList.remove('overlay_open');
            modal.classList.remove('modal_open');
        }, 3000);
    })
})
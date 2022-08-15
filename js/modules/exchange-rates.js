const exchangeRatesList = document.querySelector('.exchange_rates__list');

const socket = new WebSocket('ws://web-socket-current.herokuapp.com');

const renderExchange = (wrapper, data) => {
    const {from, to, rate, change} = JSON.parse(data);
    
    const li = document.createElement('li');

    li.classList.add('exchange_rates__item', change === 1 ? 'exchange_rates__item_up' : 'exchange_rates__item_down')

    const currency = document.createElement('span');
    currency.classList.add('exchange_rates__currency');
    currency.textContent = `${from}/${to}`;

    const value = document.createElement('span');
    value.classList.add('exchange_rates__value');
    value.textContent = `${rate}`;

    li.append(currency, value);
    wrapper.prepend(li);

    if(wrapper.children.length > 4) {
        wrapper.children[4].remove();
    }
}

socket.addEventListener('message', e => {
    renderExchange(exchangeRatesList, e.data);
})

socket.addEventListener('error', err => {
    console.log(err)
})
// SELEÇÕES

const conta = document.querySelector('#valor');
const qtyPessoas = document.querySelector('#qtyPessoas');
const resetar = document.querySelector('#bt-reset');
const gorjetaUser = document.querySelector('#gorjetaUser');
const gorjeta = document.querySelector('#gorjeta');
const total = document.querySelector('#total');

// CONTA

let valorConta = '';

conta.addEventListener('input', (e) => {

    if (e.data !== '0' && e.data !== '1' && e.data !== null && e.data !== '2' && e.data !== '3' && e.data !== '4' && e.data !== '5' && e.data !== '6' && e.data !== '7' && e.data !== '8' && e.data !== '9' && e.data !== '.' && e.data !== ',') {
        conta.value = '';
    }

    if (conta.value === '0') {
        conta.classList.add('erro');
    } else {
        conta.classList.remove('erro');
        valorConta = conta.value;
    }

})

// VALOR DA GORJETA

const btSelect = document.querySelectorAll('.bt-gorjeta');
let valorGorjeta = '';

for (let select of btSelect) {
    select.addEventListener('click', () => {

        for (let off of btSelect) {
            off.classList.remove('active');
        }

        select.classList.add('active');

        valorGorjeta = '';
        for (let i = 0; i < (select.innerText.length - 1); i++) {
            valorGorjeta += select.innerText[i];
        }

    })
}


//OUTRO  VALOR DE GORJETA

gorjetaUser.addEventListener('click', () => {

    for (let select of btSelect) {
        select.classList.remove('active');
    }

    valorGorjeta = '';

})

gorjetaUser.addEventListener('input', () => {

    if (gorjetaUser.value === '0') {
        gorjetaUser.classList.add('erro');
    } else {
        gorjetaUser.classList.remove('erro');
        valorGorjeta = gorjetaUser.value;
    }
})

// NUMERO DE PESSOAS

let numPessoas = '';

qtyPessoas.addEventListener('input', () => {

    if (qtyPessoas.value === '0') {
        qtyPessoas.classList.add('erro');
    } else {
        qtyPessoas.classList.remove('erro');
        numPessoas = qtyPessoas.value;
    }
})

// CALCULAR GORJETA

setInterval(() => {

    if (valorConta !== '' && valorGorjeta !== '' && qtyPessoas.value !== '' && qtyPessoas.value !== '0') {

        gorjeta.innerText = `$${((parseFloat(valorConta) * (parseFloat(valorGorjeta) / 100)) / parseFloat(qtyPessoas.value)).toFixed(2)}`;

        total.innerText = `$${(((parseFloat(valorConta) * (parseFloat(valorGorjeta) / 100)) + parseFloat(valorConta)) / parseFloat(qtyPessoas.value)).toFixed(2)}`;
    }else{
        gorjeta.innerText = '0.00'
        total.innerText = '0.00'
    }

}, 1000)


// RESETAR

resetar.addEventListener('click', () => {

    for (let select of btSelect) {
        select.classList.remove('active');
    }

    conta.value = '';
    qtyPessoas.value = '';
    valorGorjeta = '';
    valorConta = '';
    gorjeta.innerText = '0.00'
    total.innerText = '0.00'

})

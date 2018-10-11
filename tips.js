///// TIPS JS


const calcBtn = document.getElementById('calculate');
const billInput = document.getElementById('amount');
const tipPercent = document.getElementById('percent');
const tipTotal = document.getElementById('tip');
const total = document.getElementById('total');
const numPeople = document.getElementById('num-people');
const perPerson = document.getElementById('per-person');
calcBtn.addEventListener('click', () => {

    tipTotal.innerHTML = (tipPercent.value/100) * billInput.value;
    total.innerHTML = (tipPercent.value/100) * billInput.value + Number(billInput.value);
    const totalBill = (tipPercent.value/100) * billInput.value + Number(billInput.value);
    perPerson.innerHTML = totalBill/numPeople.value;



})

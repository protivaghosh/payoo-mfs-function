document.getElementById('add-button-money')
.addEventListener('click', function(event){
event.preventDefault();

const addMoney =getInputFieldValueById('input-add-money');
const pinNumber =getInputFieldValueById('input-pin-number');
console.log('add money with', addMoney, pinNumber);
})
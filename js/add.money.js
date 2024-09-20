document.getElementById('add-button-money')
.addEventListener('click', function(event){
event.preventDefault();

const addMoney =getInputFieldValueById('input-add-money');
const pinNumber =getInputFieldValueById('input-pin-number');
console.log('add money with', addMoney, pinNumber);
// wrong way to verify .do not try at serious website
if(pinNumber === 12345){
const balance = getTextFieldValueById('balance');
// console.log(balance); 
const newBalance = balance + addMoney;
document.getElementById('balance').innerText = newBalance;
}

else{
    alert('Failed to add the Money');
}
})
document.getElementById('add-button-cash')
.addEventListener('click', function(event){
event.preventDefault();

const cashOut = getInputFieldValueById('input-cashout-money');
const pinNumber = getInputFieldValueById('input-number');
console.log('cash out money with', cashOut , pinNumber);
// wrong way to verify .do not try at serious website
if(pinNumber === 12345){
const balance = getTextFieldValueById('balance');
// console.log(balance); 
const newBalance = balance - cashOut;
document.getElementById('balance').innerText = newBalance;
}

else{
    alert('Failed to  the Money');
}
})
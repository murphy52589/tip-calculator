"use strict";

function calculateTip() {
    const billAmount = document.getElementById('billAmount').value;
    const tipAmount = document.getElementById('tipAmount').value;
    const numberOfPeople = document.getElementById('numberOfPeople').value;
    console.log(billAmount, tipAmount, numberOfPeople);
}
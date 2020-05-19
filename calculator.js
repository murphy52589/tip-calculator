"use strict";

function calculateTip() {
    const billAmount = document.getElementById('billAmount').value;
    const tipAmount = document.getElementById('tipAmount').value;
    let numberOfPeople = document.getElementById('numberOfPeople').value;

    //validate input
    if (billAmount === "" || tipAmount === 0) {
        alert("Please enter values");
        return;
    }

    if (numberOfPeople === "" || numberOfPeople <= 1) numberOfPeople = 1;

    const tipPerPerson = (billAmount * tipAmount) / numberOfPeople;
    document.getElementById('tipPerPerson').innerHTML = "$ " + tipPerPerson.toString();
    document.getElementById('billPerPerson').innerHTML = "$ " + ((billAmount / numberOfPeople) + tipPerPerson).toString();
}
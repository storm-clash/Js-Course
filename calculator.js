let calculation = localStorage.getItem('calculation') || '';

//Display calculation when the page first load

displayCalculation();

function updateCalculation(value) {
    calculation += value;

    displayCalculation();

    localStorage.setItem('calculation', calculation);

}

function displayCalculation() {
    document.querySelector('.js-calculator').innerHTML = `${calculation}`;
}
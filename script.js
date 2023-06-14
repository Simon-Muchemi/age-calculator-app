const button = document.getElementById('calc-button');
const dayLabel = document.getElementById('day-label');
const monthLabel = document.getElementById('month-label');
const yearLabel = document.getElementById('year-label');

const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const dayError = document.getElementById('day-error');
const invalidDayError = document.getElementById('day-invalid-error')

const monthError = document.getElementById('month-error');
const invalidMonthError = document.getElementById('month-invalid-error');

const yearError = document.getElementById('year-error');
const invalidYearError = document.getElementById('year-invalid-error');
const pastYearError = document.getElementById('past-year-error');

const calcDay = document.getElementById('calc-day');
const calcMonth = document.getElementById('calc-month');
const calcYear = document.getElementById('calc-year');

const month_with_31_days = [1, 3, 5, 7, 8, 10, 12];

let has_31_days = function (month){
    if (month === 1){
        console.log(month);
        console.log('Month has 31 days');
        return true;
    }
    else {
        console.log('Oops!')
        return false;
    }
}
function computeAge() {
    let today = new Date();

    let Day = today.getDay();
    let Month = today.getMonth();
    let Year = today.getFullYear();
    
    let usrDay = day.value;
    let usrMonth = month.value;
    let usrYear = year.value;
    
    let sum = 0;
    let years, months, days;

    let checkYear = function (){
        if (usrYear < 1) {
            yearLabel.style.color = 'hsl(0, 100%, 67%)';
            invalidYearError.style.display = 'grid';
        }
        if (usrYear > Year) {
            yearLabel.style.color = 'hsl(0, 100%, 67%)';
            pastYearError.style.display = 'grid';
        }
        if (usrYear === undefined) {
            yearLabel.style.color = 'hsl(0, 100%, 67%)';
            yearError.style.display = 'grid';
        }
    }
    let checkMonth = function (){
        if (usrMonth < 1 || usrMonth > 12) {
            monthLabel.style.color = 'hsl(0, 100%, 67%)';
            invalidMonthError.style.display = 'grid';
            return false;
        }
        if (usrMonth === undefined) {
            monthLabel.style.color = 'hsl(0, 100%, 67%)';
            monthError.style.display = 'grid';
            return false;
        }
        return true;
    }
    let checkDay = function (){
        let index;
        if (checkMonth()){
        }
    }
    //checkDay();
    has_31_days(usrMonth);
}

button.addEventListener('click', computeAge);

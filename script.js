const day_input = document.getElementById('day');
const month_input = document.getElementById('month');
const year_input = document.getElementById('year');

const button = document.getElementById('calc-button');

const day_input_error = document.getElementById('day-error');
const month_input_error = document.getElementById('month-error');
const year_input_error = document.getElementById('year-error');

let calc_day = document.getElementById('calc-day');
let calc_month = document.getElementById('calc-month');
let calc_year = document.getElementById('calc-year');

let date_today = new Date();
let current_year = date_today.getFullYear();
let current_month = date_today.getMonth() + 1;
let current_date = date_today.getDate();

button.addEventListener('click', function (){
    findAge(day_input.value, month_input.value, year_input.value);
})
function findAge(birth_date, birth_month, birth_year)
{
    // days of every month 
    let month = [31, 28, 31, 30, 31, 30, 31,
        31, 30, 31, 30, 31 ]

    // if birth date is greater than current date 
    // then do not count this month and add 30 
    // to the date so as to subtract the date and 
    // get the remaining days 
    if (birth_date > current_date) {
        current_date = current_date + month[birth_month - 1];
        current_month = current_month - 1;
    }

    // if birth month exceeds current month, then do 
    // not count this year and add 12 to the month so 
    // that we can subtract and find out the difference 
    if (birth_month > current_month) {
        current_year = current_year - 1;
        current_month = current_month + 12;
    }

    // calculate date, month, year 
    let calculated_date = current_date - birth_date;
    let calculated_month = current_month - birth_month;
    let calculated_year = current_year - birth_year;
    if (calculated_month >= 12){
        calculated_year++;
        calculated_month -= 12;
    }
    if (calculated_date >= 31){
        calculated_month++;
        calculated_date -= 31;
    }

    // print the present age 
    calc_year.textContent = calculated_year.toString();
    calc_month.textContent = calculated_month.toString();
    calc_day.textContent = calculated_date.toString();
} 
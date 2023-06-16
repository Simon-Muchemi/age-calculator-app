const day_input = document.getElementById('day');
const month_input = document.getElementById('month');
const year_input = document.getElementById('year');

const button = document.getElementById('calc-button');

const day_input_error = document.getElementById('day-error');
const month_input_error = document.getElementById('month-error');
const year_input_error = document.getElementById('year-error');

let calc_day = document.getElementById('calc-day');

let date_today = new Date();
let current_year = date_today.getFullYear();
let current_month = date_today.getMonth() + 1;
let current_day = date_today.getDate();

button.addEventListener('click', function (){
    calc_day.textContent = '24';
})

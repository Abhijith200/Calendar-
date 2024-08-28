const getMonth = document.querySelector('.month')
const getDay = document.querySelector('.day')
const getWeekday = document.querySelector('.weekday')
const getYear = document.querySelector('.year')

const date = new Date()

const month = date.getMonth()
const day = date.getDate()
const weekday = date.getDay()
const year = date.getFullYear()

const getCurrentMonth = date.toLocaleString("en-US", {
    month: "long",
});
const getCurrentDay = date.toLocaleString("en-US", {
    day: "numeric",
});
const getCurrentWeekday = date.toLocaleString("en-US", {
    weekday: "long",
});
const getCurrentYear = date.toLocaleString("en-US", {
    year: "numeric",
});
getMonth.innerText = getCurrentMonth;
getDay.innerText = getCurrentDay;
getWeekday.innerText = getCurrentWeekday;
getYear.innerText = getCurrentYear;
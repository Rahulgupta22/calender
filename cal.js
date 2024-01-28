const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const tody = new Date();

const weeksDay =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const months = ["January","Febuary","March","April","May","June","July","August","Septempber","October","November","December"];

date.innerHTML = (tody.getDate()<10?"0":"")  +  tody.getDate();
day.innerHTML = weeksDay[tody.getDay()];
month.innerHTML = months[tody.getMonth()];
year.innerHTML = tody.getFullYear();


const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
 
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthsOfYear = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const presentDate = new Date();

date.textContent =presentDate.getDate()<10?'0'+presentDate.getDate(): presentDate.getDate();
day.textContent = daysOfWeek[presentDate.getDay()];
month.textContent = monthsOfYear[presentDate.getMonth()];
year.textContent = presentDate.getFullYear();
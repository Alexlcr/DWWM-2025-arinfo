//EX1
let date = new Date(2012, 1, 20);
console.log(date)

//EX2
function getWeekDay(date) {
    let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    return days[date.getDay()];
}
console.log(getWeekDay(date));

//EX3
function getLocalDay(date){
    let numeroJour = ["7","1", "2", "3", "4", "5", "6"];
    return numeroJour[date.getDay()];
}
console.log(getLocalDay(date));

//EX4
function getDateAgo(date, day){
    let newDate = date.setDate(date.getDate() - day);
    return date
}
console.log(getDateAgo(date, 1));

//EX5
function getLastDayOfMonth(year, month){
    let LastDayOfMonth 
}
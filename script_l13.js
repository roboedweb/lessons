let now = new Date();
console.log(now);
let newDate = new Date(1000 * 60 * 60 * -24 * 365);
console.log(newDate);
let date = new Date(2020, 4, 15, 18, 58, 66, 555);
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getUTCDate());
console.log(now.getMilliseconds());
console.log(`getTime = ${date.getTime()}`);
console.log(date.getTimezoneOffset());
now.setMonth(6);
console.log(now);
let compDate = new Date(0);
console.log(compDate);
compDate.setFullYear(compDate.getFullYear() + 1);
console.log(compDate);

let start = new Date();
for(let i = 0; i < 10000000; i++) {
    let something = i * i * i;
}
let end = new Date();
console.log(`done in ${end - start} milliseconds`);

function getWeekDay(date) {
    let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}
let birthday = new Date(2023, 3, 7);
console.log(getWeekDay(birthday));
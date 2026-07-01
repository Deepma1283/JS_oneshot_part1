// Dates :
// According to the ECMAScript specification, JavaScript stores dates as the number of milliseconds elapsed (the amount of time that has passed) since January 1, 1970, 00:00:00 UTC, known as the Unix Epoch. The Date object uses this internal timestamp and converts it to local time or UTC when formatting or displaying the date.

let myDate = new Date()
console.log(myDate.toString()); // Wed Jul 01 2026 17:42:27 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Wed Jul 01 2026
console.log(myDate.toLocaleString()); // 7/1/2026, 5:42:27 PM
console.log(myDate.toLocaleDateString()); // 7/1/2026
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23) // month is 0-indexed, so 0 = January
myCreatedDate = new Date(2023, 0, 23, 5, 3) // year, month, day, hour, minute
myCreatedDate = new Date("2023-01-14T05:03:00") //yyyy-mm-ddThh:mm:ss
myCreatedDate = new Date("2023-01-14") //yy-mm-dd
myCreatedDate = new Date("01-14-2023") //mm-dd-yyyy
console.log(myCreatedDate.toLocaleString()); //1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
// It returns the millisecond value from midnight of January 1, 1970, to the current date and time. 
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

// This converts milliseconds to seconds by dividing the millisecond value by 1000 and rounding down to the nearest whole number using Math.floor() for avoiding decimal places.
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
})

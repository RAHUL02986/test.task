let lodash = require("lodash");

let moment =require("moment");
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));

var a = moment([2014, 11, 11]);
var b = moment([2015, 09, 11]);
console.log(b.diff(a, 'days') );



console.log(moment().add(7, 'days').calendar());
console.log(moment().add(7, 'M').calendar());
console.log(moment().add(7, 'y').calendar());
console.log(moment().subtract(7, 'days').calendar());
console.log(moment().subtract(7, 'M').calendar());
console.log(moment().subtract(7, 'y').calendar());



console.log(moment([2019]). isLeapYear());
console.log(moment([2020]). isLeapYear());

var a = moment([2014, 11, 27]);
var b = moment([2015, 09, 16]);
console.log(b.diff(a, 'days') );

var a = moment([2020, 01, 01]);
var b = moment([2018, 01, 01]);
console.log(a.diff(b, 'days') );

var a = moment([2010, 01, 01]);
var b = moment([2018, 01, 01]);
console.log(b.diff(a, 'days') );





// matching a string
let str = 'ahb acb aeb aeeb adcb axeb';
let result = str.match(/[a-b]\w*/g);
console.log(result);

//'2 + 3'
str =  '2 + 3 223 2223';
result = str.match(/2\s\+\s3/g);
console.log(result);

//the day, month and year
const date = new Date();
console.log(date.getDate());
console.log(date.getMonth()+1);
console.log(date.getFullYear());

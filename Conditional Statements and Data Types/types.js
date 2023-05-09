//subtraction
function ext() {
    let x = 2;
    let y = 0;
    let a = '1';
    let b = '0';
    let z = true;
    let c = false;
    console.log(x-a);
    console.log(x-c);
    console.log(a-z);
}
ext();

//addition
function add() {
    let x = 2;
    let y = 0;
    let a = '1';
    let b = '0';
    let z = true;
    let c = false;
    console.log(x+a);
    console.log(x+c);
    console.log(a+z);
}
add();

//multiplication
function mult() {
    let x = 2;
    let y = 0;
    let a = '1';
    let b = '0';
    let z = true;
    let c = false;
    console.log(x*a);
    console.log(x*c);
    console.log(a*z);
}
mult();

//division
function div() {
    let x = 2;
    let y = 0;
    let a = '1';
    let b = '0';
    let z = true;
    let c = false;
    console.log(x/a);
    console.log(x/c);
    console.log(a/z);
}
div();

//remainder
function rem() {
    let x = 2;
    let y = 0;
    let a = '1';
    let b = '0';
    let z = true;
    let c = false;
    console.log(x%a);
    console.log(x%c);
    console.log(a%z);
}
rem();

//exponentiation
function exp() {
    let x = 2;
    let y = 0;
    let a = '1';
    let b = '0';
    let z = true;
    let c = false;
    console.log(x**a);
    console.log(x**c);
    console.log(a**z);
}
exp();

//explicit conversion
function con() {
    let x = 2;
    let y = 0;
    let a = '1';
    let b = '0';
    let z = true;
    let c = false;
    console.log (String(x), String(y));
    console.log(Boolean(x), Boolean(y));
    console.log(+a + +b);
    console.log(Boolean(a), Boolean(b));
    console.log(Number(z), Number(c));
    console.log(String(z), String(c));
}
con();

//more conversions
let s = '05.2023';
console.log(parseFloat(s));
console.log(parseInt(s));
console.log(Math.floor(s));

let f = false.toString();
console.log(f);

let num = 0..toString();
console.log(num);

//zero in action
console.log(0-1);
console.log(0*10);
console.log(0+0);
console.log(0/10);
console.log(10/0)
//but...
console.log(0/0);

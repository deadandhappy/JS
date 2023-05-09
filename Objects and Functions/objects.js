//object 'car'
let car = {
    brand: 'Mitsubishi',
    model: 'Pajero',
    year: '1998',
    power: function showPower() {
        console.log('power', 116 + 'hp');
    },
};
car.color = 'black';
car.color = 'green';

for (let key in car) {
    if (typeof(car[key]) == 'function') {
        car.power();
    } else {
        console.log(key, car[key]);
    }
}

//pears&apples
function sum(x, y) {
    return x + y;
}

let warehouse = {
    pears: 30,
    apples: 40,
}
let fruit = sum(warehouse.pears, warehouse.apples);
console.log(fruit);

//name check
function nameCheck(userName) {
    if (userName == 'John') {
        console.log('Hello ' + userName);
    } else {
        console.log('No such name');
    }
}

let userName = 'John';
nameCheck(userName);
userName = '';
nameCheck(userName);
/**<!DOCTYPE html>
<script>
let userName = prompt('Please, type your name', 'John');
	if (userName == 'John') {
        alert('Hello ' + userName);
	    } else {
        	alert('No such name');
	}
</script> */

//type of argument
let x = true;
function typeCheck(x) {
    console.log(typeof(x));
}
typeCheck(x);

//Prime numbers
//honestly stolen from https://javascript.info/function-basics
function isPrime(num) {
    for (let fact = 2; fact < num; fact++) {
        if(num%fact == 0)
        return false;
    }
    return true;
}

function showPrime(lim) {
    for (let num = 2; num <= lim; num++) {
        if (!isPrime(num)) continue;
        console.log(num);
    }
}
let lim = 13;
showPrime(lim);
/**function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      console.log(i); // a prime
    }
  }
  let n = 15;
  showPrimes(n);*/

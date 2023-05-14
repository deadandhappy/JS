//array of movie names
let movies = ['Terminator', 'Jaws', "1984"];
for (let film of movies) {
    console.log(film);
}

//array of car manufacturers
let carManufacturers = ["BMW", "GMC", "Honda"];
let str = carManufacturers.toString();
console.log(str);
let newCarManufacturers = str.split(",");
console.log(newCarManufacturers);

//array of names
let friends = ['Poul', 'Adam', 'John'];
let helloFriends = friends.map(nam => 'Hello ' + nam);
console.log(helloFriends);

//convert numeric array to boolean
let arr = [1,0,2,3];
arr.forEach((e, i) => {arr[i] = !!e});
console.log(arr);

//descending order
arr = [1,6,7,8,3,4,5,6];
arr.sort((x, y) => {
  return y-x;
});
console.log(arr);

//filter array
arr = [1,6,7,8,3,4,5,6];
let result = arr.filter(value => value > 3);
console.log(result);

//return the index of an array equal to the given number
arr = [10,1,33,56,100,222,3,11,4,5,6,9,0];
let number = 5;
console.log(arr.indexOf(number));
function findIndexOfNumber(x, y) {
  //console.log(x.indexOf(y));
  return x.indexOf(number);
}
let ind = findIndexOfNumber(arr, number);
console.log(ind);
//findIndexOfNumber(arr, number);

//print a until 10
let a = 0;
/**while (a < 10) {
  console.log(a++);
}*/

for (; a < 10; ++a) {
  console.log(a);
}

//print prime numbers
let p = 2;
while (p < 19) {
  ++p;
  if (p % 2 != 0) {
    console.log(p);
  } else {
    continue;
  }  
}

// print odd numbers
for (let x = 0; x <= 19; x++) {
  if (x % 2 == 0) continue;
  console.log(x);
}
// __proto__
let animal = {};
let cat = {};
animal.move = true;
cat.__proto__ = animal;
console.log( cat.move );

//classes
class Animal {
    move = true;
}
class Cat extends Animal {}
let kot = new Cat();
console.log(kot.move);

//prototype
function Felidae() {};
Felidae.prototype.move = true;
const myCat = new Felidae();
console.log(myCat.move);

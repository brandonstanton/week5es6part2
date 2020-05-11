//1. Replace vars with let and const

let name = "John"
const age = 101

function runForLoops(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        name;
        if (pets[i] === "cat"){
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}
runForLoops(["cat","dog"])

console.log("==========================")

// 2. Re-write this .map() using an arrow function

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
  var obj = {
      type: carrot,
      name: carrot
  };
  return () => (type, name);
}
console.log(carrots)

console.log("===========================")

//3. Re-write this .filter() using an arrow function

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const x = filterForFriendly => people;
console.log (x("friendly" + people));

console.log("===========================")

//4. Re-write the following functions to be arrow functions

function doMathSum(a, b) {
    return a + b
}
let sum2 = (a, b) => a + b

var produceProduct = function(a, b) {
    return a * b
}
let product2 = (a, b) => a * b

console.log(doMathSum(2,5));

console.log("==========================")

//5. Write a printString function that takes firstName, lastName, and age as parameters and returns a string link the following:

function person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
var myFriend = new person("Jane", "Doe", 40);

console.log("Hi Kat Stark, how does it fell to be " + myFriend.age + "?")

console.log("================================")

//6. Use the shorthand syntax to make the following filter take up one line.  Copy and past the arry to test it.

const animals = [{
    type: "dog",
    name: "theodore"
},
{
    type: "cat",
    name: "whiskers"

},{
    type: "pig",
    name: "piglette"
},{
    type: "dog",
    name: "sparky"
}
];

function filterForDogs(arr) {
    return arr.filter(animal => {
        if(animal.type === "dog") {
            return true
        }else{
            return false
        }
})

}
 console.log(true)   
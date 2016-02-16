/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE

}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
var letters =["k","m","a","z"];
letters.sort(function(a,b){
  return a-b;
  console.assert(letters("a","k","m","z"));
});

// .concat()
var coldcol = ["violet", "blue","green"];
var warmcol = ["red","orange","yellow"];
var colors = coldcol.concat(warmcol);
console.assert(colors("violet", "blue","green","red","orange","yellow"));

// .indexOf()
var str = "I am struggling with javascript!";
var m = str.indexOf("g");
console.assert(str());

// .split()
var longestWord = "Pneumonoultramicroscopicsilicovolcanoconiosis";
var res = longestWord.split("");

// .join()
var random = ["more","more", "more","more"];
var all = random.join(" and ");

// .pop()
var food = ["chocolate", "pizza", "bananas", "book"];
var onlyFood =food.pop();

// .push()
var health =["exercise","water","good food"];
var more = health.push("sleep");

// .slice()
var animals = ["tiger", "monkey","pinguin", "dove", "panda"];
var birds = animals.slice(2, 4);


// .splice()
var girls = ["Nina", "Sofia","Mike", "Teresa"];
girls.splice(2,1 "Zoe");

// .shift()
var continents = ["China","Australia","Aisa", "South America"];
continents.shift();

// .unshift()
var continentsAll =["South America","Europe",];
continentsAll.unshift("Antarctica","Africa");

// .filter()

// .map()
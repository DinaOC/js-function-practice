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
  

}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [1,2,3,5].slice.call(arguments);
    var sum=0;
    for (var i=0; i< args.length; i++){

      sum+= args[i];
    }
    console.log(sum);
return sum;
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
    var args = [2,4,6,8].slice.call(arguments);
    var large =0;
    var largest;
    for (var i=0; i<args.length; i++){

    }

}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = ["this", "is", "a", "awesome", "function"].slice.call(arguments);
    var lgth = 0;
    var longest;
    for (var i=0; i<args.length; i++){
      if (arr[i]).length>lgth){
        var lgth = args[i].length;
        longest =args[i];
      }
    }
}
console.log(longest);
return(longest);

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
  console.log(letters);
  console.assert(letters("a","k","m","z"));
});

// .concat()
var coldcol = ["violet", "blue","green"];
var warmcol = ["red","orange","yellow"];
var colors = coldcol.concat(warmcol);
console.log(colors);
console.assert(colors("violet", "blue","green","red","orange","yellow"));

// .indexOf()
var str = "I am struggling with javascript!";
var m = str.indexOf("g");
console.assert(str());

// .split()
var longestWord = "Pneumonoultramicroscopicsilicovolcanoconiosis";
var res = longestWord.split("");
console.log(longestWord);

// .join()
var random = ["more","more", "more","more"];
var all = random.join(" and ");
console.log(longestWord);

// .pop()
var food = ["chocolate", "pizza", "bananas", "book"];
var onlyFood =food.pop();
console.log(food);

// .push()
var health =["exercise","water","good food"];
var more = health.push("sleep");
console.log(health);

// .slice()
var animals = ["tiger", "monkey","pinguin", "dove", "panda"];
var birds = animals.slice(2, 4);
console.log(animals);


// .splice()
var girls = ["Nina", "Sofia","Mike", "Teresa"];
girls.splice(2,1 "Zoe");
console.log(girls);

// .shift()
var continents = ["China","Australia","Aisa", "South America"];
continents.shift();
console.log(continents);
// .unshift()
var continentsAll =["South America","Europe",];
continentsAll.unshift("Antarctica","Africa");
console.log(continentsAll);

// .filter()


// .map()

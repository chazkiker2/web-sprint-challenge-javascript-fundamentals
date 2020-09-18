// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*
  nestedFunction() can access the variable called internal b/c of JavaScript closures. Here, `internal` 
  is a variable that is local to the function `myFunction()`. Additionally, the function `nestedFunction()` is 
  within the local scope of the function `myFunction()`. As a result, the variable `internal` and the function `nestedFunction()`
  are packaged together. Consequently, `nestedFunction()` is able to reach OUTWARDS to the `myFunction()` level scope and access
  any variable within that wider range of scope (the same range of scope that internal is in).
  Thus, nestedFunction() refers to the variable `internal` without keeping the variable itself. Pretty cool.
*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter 
and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


const summation = num => {
  let count = 0;
  const counter = () => {
    for (let i=1; i<=num; i++) {
      count += i;
    }
    return count;
  };
  return  counter();
};
console.log(summation(4));

// const summationOG = (num) => {
//   let count = 0;
//   for (let i=1; i<=num; i++ ) {
//     count += i;
//   }
//   return count;
// };
// console.log(summationOG(4));



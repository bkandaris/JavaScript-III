/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window / Global Object Binding - 'this' will bind to the window/console object. In browsers the window object is the global object
* 2. Implicit Binding - When calling a function, the preceeding dot is 'this' (the object)
* 3. New Binding - When a constructor function is used 'this' refers to the instance of the object that is created and returned by the constructor function. The 'new' keyword constructs a new object.
* 4. Explicit Binding - Whenever the call or apply method is used, 'this' is explicitly defined. 'call' passes in arguments one by one, pass passes arguments as an array
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this); // this points to window and loads Javascript in the console

function windowObj () {
  console.log(this);
}
// windowObj(); // function is in the global scope, so we are logging the window / console object 


// Principle 2 

// code example for Implicit Binding

const sayName = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
// sayName.sayHello('Ben'); // The 'left of the dot' is the object and get's 'this'

// Principle 3

// code example for New Binding

function Ben (says) {
  this.greeting = says;
}

let myBen = new Ben('Hello!');

// console.log(myBen); // This is the new object we created


// Principle 4

// code example for Explicit Binding

let pizza = {
  topping: 'Pepperoni'
}                               // Original object

function favPizza () {          // function we want to call on the object
  console.log(this.topping);
}

favPizza.call(pizza); // invoking the function
// console logs the topping of the pizza



var helloWorld = "Hola Mundo"
console.log(helloWorld)

example1 = "sdfsdf"
console.log(example1)


let helloword2 = "Hola mundo 2"
console.log(helloword2)


const helloword3 = "Hola mundo 3"
console.log(helloword3)



// Scope

// var: Has function scope. This means that a variable declared with var is accessible throughout the entire function where it is declared, even if it is inside a block such as an if or for statement.
// let: Has block scope. Variables declared with let are only accessible within the block (delimited by {}) where they are declared, such as in loops, if blocks, etc.


// Example:
// javascript
// Copiar código
// function testVarLet() {
//   if (true) {
//     var x = 10; // var has function scope
//     let y = 20; // let has block scope
//   }
//   console.log(x); // 10
//   console.log(y); // Error: y is not defined
// }
// testVarLet();



// Hoisting

// var: Variables declared with var are "hoisted" to the top of their execution context (the function or script). This means they can be used before being declared, but their value will be undefined until the assignment is reached.
// let: Is also hoisted, but you cannot access the variable until the code reaches the declaration. This creates a "Temporal Dead Zone (TDZ)", where accessing the variable before its declaration throws an error.

// Example with var:
// javascript

// console.log(a); // undefined (the var declaration is hoisted)
// var a = 5;

// console.log(b); // Error: Cannot access 'b' before initialization
// let b = 5;



// Re-declaration

// var: Allows re-declaration of the same variable within the same scope without generating errors, which can lead to hard-to-detect issues.
// let: Does not allow re-declaration of a variable in the same scope, which helps prevent errors.
// Example:
// javascript
// Copiar código
// var x = 10;
// var x = 20; // No problem

// // let y = 10;
// // let y = 20; // Error: Identifier 'y' has already been declared




// Global Scope

// var: If you declare a variable with var outside of any function (in the global scope), it becomes a property of the global object (window in browsers).
// let: If you declare a variable with let in the global scope, it does not become a property of the global object.
// javascript
// Copiar código
// var a = 5;
// let b = 10;

// console.log(window.a); // 5
// console.log(window.b); // undefined




// Summary
// var has function scope, is hoisted to the top of its execution context, and allows re-declarations.
// let has block scope, is safer regarding use before declaration (thanks to the Temporal Dead Zone), and does not allow re-declarations in the same scope.
var helloWorld = "Hola Mundo"
console.log(helloWorld)

example1 = "sdfsdf"
console.log(example1)


let helloword2 = "Hola mundo 2"
console.log(helloword2)


const helloword3 = "Hola mundo 3"
console.log(helloword3)



// // 1. Ámbito (Scope)
// // var: Tiene ámbito de función. Esto significa que una variable declarada con var es accesible dentro de toda la función en la que se ha declarado, independientemente de si está dentro de un bloque como if o for.
// // let: Tiene ámbito de bloque. Las variables declaradas con let solo son accesibles dentro del bloque (delimitado por {}) donde fueron declaradas, como en bucles for, bloques if, etc.
// // Ejemplo:


// // function testVarLet() {
// //   if (true) {
// //     var x = 10; // var tiene alcance de función
// //     let y = 20; // let tiene alcance de bloque
// //   }
// //   console.log(x); // 10
// //   console.log(y); // Error: y is not defined
// // }
// // testVarLet();

// // 2. Hoisting
// // var: Las variables declaradas con var se "elevan" (hoisting) al inicio de su contexto de ejecución (la función o el script). Esto significa que pueden ser utilizadas antes de ser declaradas, pero su valor será undefined hasta que se alcance la asignación.
// // let: También es "hoisted", pero no se puede acceder a la variable hasta que el código llegue a su declaración. Esto crea un "Temporal Dead Zone (TDZ)", donde el acceso a la variable antes de su declaración genera un error.
// // Ejemplo con var:


// console.log(a); // undefined (la declaración de var se eleva)
// var a = 5;

// console.log(b); // Error: Cannot access 'b' before initialization
// let b = 5;

// // 3. Re-declaración
// // var: Permite re-declarar la misma variable dentro del mismo ámbito sin generar errores, lo que puede llevar a errores difíciles de detectar.
// // let: No permite re-declarar una variable en el mismo ámbito, lo que ayuda a evitar errores.
// // Ejemplo:


// var x = 10;
// var x = 20; // No hay problema

// // let y = 10;
// // let y = 20; // Error: Identifier 'y' has already been declared

// // 4. Ámbito global
// // var: Si declaras una variable con var fuera de cualquier función (en el ámbito global), esta se convierte en una propiedad del objeto global (window en navegadores).
// // let: Si declaras una variable con let en el ámbito global, no se convierte en una propiedad del objeto global.

// // var a = 5;
// // let b = 10;

// console.log(window.a); // 5
// console.log(window.b); // undefined
// Resumen

// // var tiene ámbito de función, se eleva al inicio del contexto de ejecución y permite re-declaraciones.
// // let tiene ámbito de bloque, es más seguro en cuanto a uso antes de la declaración (gracias a la Temporal Dead Zone) y no permite re-declaraciones en el mismo ámbito.
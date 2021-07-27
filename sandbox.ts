// explicit types
let character: string;
let age: number;
let isLogged: boolean;

// age = "mario";
age = 35;

// isLogged = 25;
isLogged = true;

// arrays
let ninjas: string[] = []; // initializing an empty array (of strings)

// ninjas = [10, 23];
ninjas.push("naruto");

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = "123";
uid = 123;

// objects
let ninjaOne: object;
ninjaOne = { name: "sasuke", age: 30 };

let ninjaTwo: {
  name: string;
  age: number;
  hasBlackBelt: boolean;
};

ninjaTwo = { name: "mario", age: 20, hasBlackBelt: true };

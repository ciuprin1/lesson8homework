// 1. Number
let numar = 42;
console.log(typeof numar); // va afișa "number"

// 2. String
let sir = "Acesta este un șir de caractere";
console.log(typeof sir); // va afișa "string"

// 3. Boolean
let adevarat = true;
console.log(typeof adevarat); // va afișa "boolean"

// 4. Object
let obiect = { nume: "John", varsta: 30 };
console.log(typeof obiect); // va afișa "object"

// 5. Undefined
let nedefinit;
console.log(typeof nedefinit); // va afișa "undefined"

// 6. Symbol (introdus în ES6)
const simbol = Symbol("descriere");
console.log(typeof simbol); // va afișa "symbol"

// 7. BigInt (introdus în ES11)
const bigInteg = 1234567890123456789012345678901234567890n;
console.log(typeof bigInteg); // va afișa "bigint"

// 8. Null
let nul = null;
console.log(typeof nul); // va afișa "object"

// Suma și comparație dintre numere:

let x = 10;
let y = 20;
let z = 30;

// Suma
console.log(x + y + z); // va afișa 60

// Comparatie
console.log(x == y); // egalitate; va afișa "false"
console.log(x > y); // mai mare; va afișa "false"
console.log(x >= y); // mai mare sau egal; va afișa "false"
console.log(x < y); // mai mic; va afișa "true"
console.log(x <= y); // mai mic sau egal; va afișa "true"

// Concatenarea cuvintelor:

let cuvant1 = "Hello";
let cuvant2 = "World";

console.log(cuvant1 + " " + cuvant2); // va afișa "Hello World"

// Obiect

let obbj = {
  nume: "nume",
  prenume: "prenume",
  hobby: "hobby",
  varsta: "varsta",
  profesie: "profesie",
};
console.log(obbj);

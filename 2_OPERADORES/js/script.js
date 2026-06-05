// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Operações
console.log(2 + 4);
console.log(2 + 6);
console.log(5 * 5);
console.log(5 / 5);

console.log(5 + 5 + 6 * 6);

// 3 - Special Numbers
console.log(typeof Infinity);
console.log(typeof infinity);

console.log(typeof -Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - Strings
console.log("Apenas um Texto");
console.log(`Apenas mais um Texto`);
console.log(`Número texto 13`);

console.log(typeof "Apenas um Texto");
console.log(typeof `Apenas mais um Texto`);

// 5 - Símbolos Especiais em String
console.log("Testando a \nquebra de linha");
console.log("Espaçamento \ttab");

// 6 - Concatenação
console.log("Oi, " + "tudo" + " bem");
console.log(`testando ` + `com` + `crase!`);

// 7 - Template String
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos excecutar qualquer coisa aqui ${console.log("teste")}`)

// 8 - Boolean
console.log(true);

console.log(5 > 20);

console.log(30 > 10);

console.log(typeof false);

// 9 - Comparações
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 !=  9);

// 10 - Idêntico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// 11 - Operadores Lógicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Rafael" === 1);

console.log(5 > 2 || "Rafael" === 1);

console.log(5 > 2 || 5 > 100);

console.log(!true);

console.log(!5 > 2);

// 12 - Empty Values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - Mudança de Tipo
console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);


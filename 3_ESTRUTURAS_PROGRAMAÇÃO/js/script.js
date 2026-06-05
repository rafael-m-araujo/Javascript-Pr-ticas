// 1 - Variáveis
let nome = "Rafael";

console.log(nome);

nome = "Rafael Mendes"

console.log(nome);

const idade = 20;

console.log(idade);

console.log(typeof nome);

console.log(typeof idade);

// 2 - Mais sobre variáveis
// let 2teste" = invalido
// let @teste = "inválido"

let a = 10,
b = 5, 
c = 0;

console.log(a, b, c);

const nomecompleto = "Rafael Mendes"

const nomeCompleto = "Maria Eleni"

console.log(nomecompleto)

console.log(nomeCompleto)

let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste);

// 3 - Prompt
// const age = prompt("Digite a sua idade:");

// console.log(`Você tem ${age} anos.`);

// 4 - Testando
// alert("Testando");

// const z = 10

// alert(`O número é ${z}`);

// 5 - Math
console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 6 - Console
console.log("Teste!");

console.error("erro!");

console.warn("Aviso!");

// 7 - If
const m = 10;

if(m > 5) {
console.log("M é maior que 5!");
} 

const user = "Rafael"

if (user === "Rafael") {
    console.log("Oi Rafael!");
}


if(user === "Maria") {
    console.log("Maria é meu falsa");
}

console.log(user === "Rafael", user === "Maria");

// 8 - Else
 const loggedIn = false
 
 if(loggedIn) {
    console.log("Está autenticado!");
 } else {
    console.log("Não está autenticado!");
 }

 const q = 10
 const w = 15

 if(q > 5 && w > 20) {
    console.log("Números mais altos")
   }  else {
        console.log("Os números não são mais altos")
    }

// 9 - Else if
if(1 > 2) {
    console.log("Teste");
}
 else if(2 > 3) {
    console.log("Teste 2");
} 
else if(3 > 2) {
    console.log("Teste 3");
}

const userName = "Rafael"
const userAge = 20

if (userName === "Matheus") {
    console.log("Bem vindo, Matheus")
} else if (userName === "Rafael" && userAge === 20) {
    console.log("Olá, Rafael! Você tem 20 anos!")
} else {
    console.log("Nenhuma das condições é verdadeira")
}

// 10 - While

let p = 0;

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// Looo Infinito

// let x = 10

// while(x > 5) {
//     console.log("Repetindo Infinitamente")
// }

// 11 - do while
let o = 10

do {
    console.log(`Valor de o: ${o}`);
    o--
} while(o > 1);

// // 12 - For
// for (let t = 0; t < 10; t++) {
//     console.log("Repetindo algo...")
// }
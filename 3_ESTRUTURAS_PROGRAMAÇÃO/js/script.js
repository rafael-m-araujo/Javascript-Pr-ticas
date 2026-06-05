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

let r = 10

for(r; r > 0; r = r - 1) {
    console.log("O r está diminuindo")
}

// 13 - Identação
for(let u = 0; u < 10; u++) {
    if(u * 2 > 10) {
        console.log(`Maior que 10! ${u}`)
    } else {
        if(u / 2 === 0) {
            console.log("deu 0")
        }
    }
}

// 14 - Break
for (let g = 20; g > 10; g--) {
    console.log(`o valor de g é: ${g}`);

    if(g === 12) (
       console.log("O g é 12!") 
    )
}

// 15 - Continue
for(let s = 0; s < 10; s = s + 1) {
    // Operador resto = %
    if(s % 2 === 0) {
     console.log("Número par!");   
     continue;
    }

    console.log(s);
}

// 16 - Switch
const job = "Zé Ninguém"

switch (job) {
    case "Programador":
        console.log("Você é um programador!");
        break;
        case "Advogado":
        console.log("Você é um Advogado");
        break;
        case "Engenheiro Civíl":
            console.log("Você é um engenheiro civíl");
            break;
            case "Médico":
                console.log("Você é um médico");
                break;
                default:
                    console.log("Profissão não encontrada");
}

// Switch "Errado"
const l = 100;

switch(l) {
    case 200:
        console.log("L é 200!");
        case 100:
            console.log ("L é 100!");
        case 10:
            console.log ("L é 10!");
            default:
                console.log("L não foi encontrado");
}
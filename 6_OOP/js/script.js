// 1 - Métodos
const animal = {
 nome: "Bob",
 latir: function() {
    console.log("Au au")
 }
};

console.log(animal.nome);

animal.latir();

// 2 - Aprofundando em métodos
const pessoa = {
 nome: "Rafael",

 getNome: function () {
    return this.nome;
 },

 setNome: function (novoNome) {
    this.nome = novoNome
 }
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Ribeiro");

console.log(pessoa.getNome());
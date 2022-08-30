//a
let nome

//b
let idade

//c
console.log(typeof nome);
console.log(typeof idade);

//d
/* Aqui conseguimos verificar que representa a falta de 
um valor para as variáveis nome e idade, então não há como 
definir qual tipo será*/

//e
nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")


//f 
/* Notei que houve a mudança de uma 
variável não definida para uma variável do tipo string */

console.log(typeof nome);
console.log(typeof idade);

//g
console.log("Olá", nome, "! Você tem", idade, "anos de idade");
const texto1 = "Olá mundo!";
const texto2 = 'Olá mundo, de novo!';
const texto3 = "12312312";
const texto4 = "João é o 'melhor jogador' desta classe";
const texto5 = 'João é o "melhor jogador" desta classe';

console.log(texto1);
console.log(texto2);
console.log(texto3);
console.log(texto4);
console.log(texto5);

// CONCATENAÇÃO

const texto6 = texto1+texto5;
console.log(texto6);


//TEMPLATE STRING OU TAMPLATE LITERAL

const numero = 10 ;

console.log(`O professor João é nota ${numero}`);


// FERRAMENTAS 



const input = "Belo Horizonte";

// DEIXANDO TUDO MINUSCULO
const inputMinusculo = input.toLowerCase();
console.log(inputMinusculo);

// DEIXANDO TUDO MINUSCULO
const inputMaiusculo = input.toUpperCase();
console.log(inputMaiusculo);

// CONTANDO A QUANTIDADE DE CARACTERES
const quantidade = input.length;
console.log(quantidade);


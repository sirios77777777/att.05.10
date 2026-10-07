
// 1.
const NOME = "Tomás";
let idade = 11;

// 2.
// NOME = "Pedrinho"; 

// 3.
let preco;
console.log(preco);
console.log(typeof preco);

// 4.
let texto = "Olá mundo";
let numero = 42;
let booleano = true;
let nulo = null;
let indefinido = undefined;
let numeroGigante = 9007199254740991n;

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof numeroGigante);

// 5.
{
  let itemA = "Primeiro";
  let itemB = "Segundo";
}



// 6.
let a = 15;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 7.
let largura = 8;
let altura = 5;
let area = largura * altura;
console.log(area);

// 8.
let primeiroNome = "Lucas";
let ultimoNome = "Silva";
let nomeCompleto = primeiroNome + " " + ultimoNome;
console.log(nomeCompleto);

// 9.
let mensagem = `Olá ${primeiroNome} ${ultimoNome}`;
console.log(mensagem);

// 10.
console.log(2 ** 8);

// 11.
console.log(10 == '10');
console.log(10 === '10');

// 12.
console.log(25 !== '25');

// 13.
let temCarteira = true;
let maiorDeIdade = false;
let podeConduzir = temCarteira && maiorDeIdade;
console.log(podeConduzir);

// 14.
let atendeCondicao = temCarteira || maiorDeIdade;
console.log(atendeCondicao);

// 15.
let ativo = true;
console.log(!ativo);

// 16.
console.log('5' + 3);

// 17.
console.log('10' - 2);

// 18.
let textoNumero = '123.45';
let numeroConvertido = Number(textoNumero);
console.log(numeroConvertido + 10);

// 19.
console.log(Boolean(0));

// 20.
let saldo = 100;

saldo += 50;
saldo -= 20;
saldo *= 2;
saldo /= 4;

console.log(saldo);
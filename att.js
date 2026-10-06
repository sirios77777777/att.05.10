//1
const NOME = "Bernardo";
let idade = 18;

console.log(NOME);
console.log(idade);
//2
const NOME = "Bernardo";

NOME = "João";

// Dá erro porque uma variável criada com const
// não pode ter seu valor alterado.
//3
let preco;

console.log(preco);
console.log(typeof preco);
//4
let texto = "Olá";
let numero = 10;
let verdadeiro = true;
let vazio = null;
let semValor = undefined;
let numeroGrande = 100n;

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof verdadeiro);
console.log(typeof vazio);
console.log(typeof semValor);
console.log(typeof numeroGrande);
//5
{
    let nome = "Bernardo";
    let idade = 18;

    console.log(nome);
    console.log(idade);
}

console.log(nome);
console.log(idade);

// Dá erro porque as variáveis foram criadas
// dentro do bloco e não podem ser acessadas fora dele.
//6
let a = 15;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
//7
let largura = 8;
let altura = 5;

let area = largura * altura;

console.log(area);
//8
let primeiroNome = "Bernardo";
let ultimoNome = "Souza";

let nomeCompleto = primeiroNome + " " + ultimoNome;

console.log(nomeCompleto);
//9
let primeiroNome = "Bernardo";
let ultimoNome = "Souza";

let nomeCompleto = `${primeiroNome} ${ultimoNome}`;

console.log(nomeCompleto);
//10
let resultado = 2 ** 8;

console.log(resultado);
//11
console.log(10 == "10");
console.log(10 === "10");
//12
console.log(25 !== "25");
//13
let temCarteira = true;
let maiorDeIdade = false;

let podeConduzir = temCarteira && maiorDeIdade;

console.log(podeConduzir);
//14
let temCarteira = true;
let maiorDeIdade = false;

let podeConduzir = temCarteira || maiorDeIdade;

console.log(podeConduzir);
//15
let ativo = true;

console.log(!ativo);
//16
console.log("5" + 3);
//17
console.log("10" - 2);
//18
let numero = Number("123.45");

console.log(numero + 10);
//19
let resultado = Boolean(0);

console.log(resultado);
//20
let saldo = 100;

saldo += 50;
saldo -= 20;
saldo *= 2;
saldo /= 4;

console.log(saldo);

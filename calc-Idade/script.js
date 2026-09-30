// pegar os elementos no html

const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const Nascimento = document.getElementById("nascimento");

const nomeResultado = document.getElementById("nomeResultado")
const dataResultado = document.getElementById("dataResultado")
const idadeResultado = document.getElementById("idadeResultado")
const boxResultado = document.getElementById("resultado")

formulario.addEventListener("submit", function(event){
    event.preventDefault();// impede que a tela recarregue

    //pegar o valor dos inputs
    const valorNome = nome.value;
    const valorNascimento = Nascimento.value;

    // console.log(valorNome);
    // console.log(valorNascimento);
    
//SEPARA A DATA EM 3 VALORES

const dataSeparada = valorNascimento.split("-")

// console.log(dataSeparada);

// Armazene as datas seperadas em formato numerico
const anoNascimento = Number(dataSeparada[0]);
const mesNascimento = Number(dataSeparada[1]);
const diaNascimento = Number(dataSeparada[2]);

//pega a data de hoje no sistema 
const hoje = new Date();

const anoAtual = hoje.getFullYear()// pega somente o ano 
const mesAtual = hoje.getMonth()+1// pega somente o mes
const diaAtual = hoje.getDay()// pega somente o dia
 
// console.log(hoje);
// console.log(anoAtual);
// console.log(mesAtual);
// console.log(diaAtual);

let idade = anoAtual - anoNascimento //calcular a idade utilizar o ano

if (mesNascimento > mesAtual) {// verificar se o mes de nascimento é maior que o mes atual
    idade = idade-1;// pega a idade e subtrai 1
}


if (diaNascimento > diaAtual && mesNascimento > mesAtual) {// verificar se o mes de nascimento e IGUAL ao mes atual // verifique o dia de nascimento é maior que o dia atual 
    idade = idade;//pega a idade e subtrai
}

// console.log(idade);


//montando a data no formato dd/mm/aaaa
 const dataFormatada = diaNascimento + "/" + mesNascimento + "/" + anoNascimento;

 //inserindo os valores nos elementos html
nomeResultado.textContent = valorNome
dataResultado.textContent = dataFormatada
idadeResultado.textContent = idade

//exibindo o elemento com as informações
boxResultado.style.display = "block"



})







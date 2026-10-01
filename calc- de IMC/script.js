const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

const nomeresultado = document.getElementById("nomeResultado")
const pesoresultado = document.getElementById("pesoResultado")
const alturaresultado = document.getElementById("alturaResultado")
const boxresultado = document.getElementById("resultado")
const classificacao1 =document.getElementById("classificacao")
const imc = document.getElementById("imcResultado")

formulario.addEventListener("submit", function (event){
event.preventDefault();// impede que a tela recarregue

// pegar o valor dos inputs
const valornome = nome.value;
const valorpeso = peso.value;
const valoraltura = altura.value;

const valorPeso = Number(valorpeso)
const valorAltura = Number(valoraltura)

// console.log(pesovalor);
// console.log(alturavalor);

let IMC = valoraltura * valoraltura
let IMC1 = valorpeso / (IMC)
let classificacao = ""
console.log(IMC1);

if (IMC1 < 18.5) {
    classificacao = "abaixo do peso";
}
else if (IMC1 >= 18.5 && IMC1 <= 24.9){
    classificacao = "peso normal";
}
else if (IMC1 >=25.0 && IMC1 <=29.9){
    classificacao = "sobrepeso";

}
else if (IMC1 >= 30.0 && IMC1 <= 34.9){
    classificacao = "obesidade grau2";
}
else{
    classificacao = "OBESIDADE GRAU3"
}

nomeresultado.textContent = valornome
pesoresultado.textContent = valorPeso
alturaresultado.textContent = valorAltura
imc.textContent = IMC1.toFixed(2);
classificacao1.textContent = classificacao
boxresultado.style.display = "block"

})


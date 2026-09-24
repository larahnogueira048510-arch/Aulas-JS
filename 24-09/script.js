// ----------ARRAY (LISTA)-----------
// let neme1 = "Levi";
// let nome2 = "Duda";
// let nome3 = "Gustavo";
// let nome4 = "Bernardo";

// //              0       1        2          3
// let nomes = ["Levi", "Duda"," Gustavo","Bernardo"];//Criação do Array/lista

// console.log(nomes); // mostra a lista completa na mesma linha

// console.log(nomes[1]);// mostra o item da posição mencionada entre colchetes

// nome4 = "Ana";
// nomes[3]= "Ana"; //altero o valo da posição especificada

// console.log(nomes.length);//mostra o tamanho do Array


// let frutas = ["Maça","Abacaxi","Laranja","Maracuja","Banana"];
// console.log(frutas[0]);
// console.log(frutas[2]);

// console.log(frutas.length)

// let cidades = ["guarulhos","pernanbuco","Recife","Belo horizonte","Goiana"]
// console.log(cidades)
// cidades[1]= "João pessoa";
// console.log(cidades[1])
// console.log(cidades.length)

//--------ARRAY--------- + ESTRUTURADE REPETIÇÃO----------
// let cidades = ["são paulo","santo andré","são caetano","mauá","pindamonhagaba","salvador"]
// //console.log(cidades[0]);
// //console.log(cidades[1]);
// //console.log(cidades[2]);
// //console.log(cidades[3]);
// //console.log(cidades[4]);
// //console.log(cidades[5]);

// for (let index = 0; index < 5; index++) {
//     console.log(cidades[index]);
    
// }

// for (let index = 0; index < cidades.length; index++) {
//     console.log(cidades[index]);
    
// }

// let nome = ["Larah","manuela","mavie","bianca","maia","Ananda",]
// console.log(nome)

// let precos = [5,10,30,50,200];

// for (let index = 0; index < precos.length; index++) {
//     console.log(precos[index]);
    
// }

// let produtos = [ "rimel","shampoo","capinha","pente","creme" ];
// let precos = [ 15,20,10,12,18 ]
//  for ( let index = 0; index < produtos.length; index++) {
//     console.log ( produtos [index] , precos [index] )
//  }
 

// -----------estrutura de repetição + estrutura de decisão--------

// for (let index = 0; index <=10; index++) {//contando de 0 a 10

//     if (index >= 5) {//verificando se é maior ou igual a 5
//         console.log(index)//mostro o numero
//     }
// }
// let numeros = [5,10,4,70,3,50,13,12,6,16];
// for (let index = 0; index < numeros.length; index++) {//contando de 0 a 10

//     if (numeros[index]>=10) {//verificando se é maior ou igual a 5
//         console.log(numeros[index]);//mostro o numero
//     }
// }

// let numeros = [5,10,4,70,3,50,13,12,6,16];
// for (let index = 0; index < numeros.length; index++) {//lendo o array
//      let sobra = numeros[index] % 2;


//     if (sobra == 0) {
//         console.log("O numero " + numeros[index] +" é par")

//     } else {
//         console.log("O numero " + numeros[index] +" é impar");

//     }
    
//     }

// let notas = [10,5,7,6,8,2,4,3];
// for (let index = 0; index < notas.length; index++) {
    
//     if (notas [index] >=7) {
//         console.log("aprovado " + notas[index])
        
//     } else {
//         console.log("reprovado " + notas[index])
//     }
    
// }

let temperaturas = [20,22,30,25,12,15,33];

for (let index = 0; index < temperaturas.length; index++) {

    if (temperaturas [index] >30) {
        console.log("quente " + temperaturas[index])
        
    } else if (temperaturas [index] >=20 && temperaturas [index] <= 30) {
        console.log("agradavel " + temperaturas[index])
        
    }else
        console.log("frio " + temperaturas[index])
    
}
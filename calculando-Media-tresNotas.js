/* 
* Calculando a média de três notas
*/
let p1ps = 8.5;
let p2ps = 9.0; 
let p3ps = 7.3; 

let somaProvasPS = (p1ps + p2ps + p3ps) /3;

let p1ss = 9.5;
let p2ss = 8.0; 
let p3ss = 8.0; 

let somaProvasSS = (p1ss + p2ss + p3ss) /3;

let mediaFinal = 16.0;

const somaDosSemetres = somaProvasPS + somaProvasSS;

const mediaSemestres = () => {

    if (somaDosSemetres >= mediaFinal) {

        console.log(`Parabéns você foi aprovado! A sua média final referente ao ano foi de ${parseInt(somaDosSemetres)}.`)
        
    } else {
        
        console.log(`Você foi reprovado, mas não desanime! A vida é um ciclo de alto e baixos, estude mais no próximo ano e conte conosco para o que for necessário.`);
        
    }

}
mediaSemestres();












/* 
* Raiz quadrada com base no valor digitado pelo usuário

var newValue = window.prompt("Digite um valor:", "");
alert("O valor é "+ newValue ** newValue);
*/



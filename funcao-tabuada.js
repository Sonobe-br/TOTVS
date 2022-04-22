/* 
* Função que executa a tabuada do número desejado informado
*/

const tabuada = (...args) => {

    console.log(`Argumento passado: ${args}`);
    
    for (let valor of args) {

        console.log (`${valor} * 2 = ${valor * 2}`)
    }
}

tabuada(0,1,2,3,4,5,6,7,8,9,10);
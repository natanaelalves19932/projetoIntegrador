let listaDeNumeros = [1,2,3,4,5,6,7,8];

let listaNumeroDobro =  listaDeNumeros.map(function(valor, index){
    return valor *2
})

// console.log(listaNumeroDobro)

let listadeNumerosFiltro = listaDeNumeros.filter(function(valor,index){
    return valor < 6
})

// console.log(listadeNumerosFiltro)

let listaNumerosSoma = listaDeNumeros.reduce(function(soma,valor){
    return soma + valor;

})

// console.log(listaNumerosSoma)

let carro = {
    nome: "fox",
    ano: "2011"
} 

// for (let prop in carro){
    // console.log(carro[prop])
// }

// let series = ['GAME OF TRONES', 'DARKE', 'BONES']

// for (let valor of series){
//     console.log(valor)
// }

// let diaDaMinhaData = minhaData.getDate();
// console.log(diaDaMinhaData);



let data = new Date();

data.setFullYear(2022);
data.setMonth(1);
data.setDate(10)
console.log(data)
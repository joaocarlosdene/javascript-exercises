function jurosSimples(inicio, taxa, tempo){
    juros = (inicio*(taxa/100))*tempo
    return inicio + juros
}

console.log(jurosSimples(200, 3, 12))


function jurosComposto(montante, taxa, tempo){
    juros = montante * Math.pow(1+(taxa/100), tempo)
    return juros.toFixed(2)
}

console.log(jurosComposto(20000, 5, 4))
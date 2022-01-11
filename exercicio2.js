function triangulo(a, b, c){
    if (a === c && a === b && b === c) {
        console.log("Triangulo Equilátero")
    } else if(a === c || a === b || b === c){
            console.log('Triangulo Isósceles')
           } else {
            console.log('Triangulo Escaleno')
                    }
}

triangulo(10, 14, 13)
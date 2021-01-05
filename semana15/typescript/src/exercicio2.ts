//letra a e b

function obterEstatisticas(
    numeros:number[],
    a:number,
    b:number
    ):{maior:number,menor:number,media:number} {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number,menor:number,media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//letra c

const amostraDeIdades:{numeros:number[],obterEstatisticas:(numeros:number)=>void} = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros) => {}
}
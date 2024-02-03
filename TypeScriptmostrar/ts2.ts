type Numero = number

//pagina responsavel por fazer os calculos (soma,subtração,multiplicação e divisão)
export function Somar(num1: Numero, num2: Numero, num3?: Numero): Numero {
    if (num3) {
        return num1 + num2 + num3
    }
    return num1 + num2
}

export function Subtrair(num1: Numero, num2: Numero): Numero {
    return num1 - num2
}

export function Multiplicar(num1: Numero, num2: Numero): Numero {
    return num1 * num2
}

export function Dividir(num1: Numero, num2: Numero): Numero {
    return num1 / num2
}
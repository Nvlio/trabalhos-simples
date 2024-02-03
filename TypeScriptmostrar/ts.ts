import { Dividir, Multiplicar, Somar, Subtrair } from "./ts2";

//função que pega as notas e chama a função exata dependendo o tipo de operador
export function Calcular<Type>(numero:[num1:number,num2:number,num3?:number],ope:Type){
    switch(ope){
        case "+":
            console.log('somando')
            return Somar(numero[0],numero[1])
        case "-":
            console.log('subtraindo')
            return Subtrair(numero[0],numero[1])
        case "x":
            console.log('multiplicando')
            return Multiplicar(numero[0],numero[1])
        case "/":
            console.log('dividindo')
            return Dividir(numero[0],numero[1])
    }
    if (numero.length===3){
        console.log("3 ja é muito")
        return Somar(numero[0],numero[1],numero[2])
    }
}
//função que vai pegar o conteudo e a materia e explicar resumidamente
export function Falar<Type>(materia:string,conteudo:Type){
    switch(materia){
        case 'Historia':
            console.log("historia")
            switch(conteudo){
                case "Hitler":
                    console.log('Era um cara muito malvado.')
                    return
                case "Comunismo":
                    console.log('É uma ideia muito má')
                    return
            }
        case "Geografia":
            console.log("geografia")
            return
        case "Portugues":
            console.log("portugues")
            return
        case 'Filosofia':
            console.log("filosofia")
            return
        case 'Sociologia':
            console.log("geografia")
            return
        }
}

//função que faz a media
export function funcao(notas:number[]){
    let media:number = (notas[0]+notas[1]+notas[2]+notas[3])/4
    return media
}
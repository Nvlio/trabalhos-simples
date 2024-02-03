import { Calcular, Falar } from "./ts";

//classe de professores que vai conter os metodos dele
export class Professor{
    materia:string;
    tipo:string;
    constructor(materia:string,tipo:"Humanas"|"Exatas"){
        this.materia = materia
        this.tipo = tipo
        
    }

    //metodo dar aula vai verificar o tipo de professor e vai chamar a função exata para ele
    DarAula<Type>(par1:Type[]|Type,par2:Type){
        if (typeof par1 == 'string'){
            console.log('sou humanas')
            Falar(par1,par2) 
        }else{
            console.log('sou de exatas')
            console.log(Calcular([par1[0],par1[1]],par2))
        }
    }

    //função que faz a media de um aluno
    FazerNota(par:number[],func:(par1:number[]|number)=>number){
        console.log(func(par))
    }
} 


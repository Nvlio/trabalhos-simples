/*Pagina principal*/

import { Professor} from "./materias";
import { Calcular, funcao } from "./ts";

//vai criar instancias de professores
const Leo:Professor =new Professor('Sociologia','Humanas')
const Maria:Professor = new Professor('Historia','Humanas')
const Fernando:Professor = new Professor('Fisica',"Exatas")
const Henrique:Professor = new Professor('Matematica','Exatas')

//vai fazer os metodos de professor
Henrique.DarAula<number|string>([1,2],'+')
Maria.DarAula<string>('Historia','Hitler')
Fernando.FazerNota([10,8,7,6],funcao)

//verificar pq da erro

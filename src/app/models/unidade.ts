import { Resource } from "./resource";
import { Leito } from './leito';

export class Unidade extends Resource{
       cnpj: string;
       nome: string;
       latitude:number;
       longitude: number;
       distancia: string

       leito: Leito

       constructor(){
          super()
          this.leito = new Leito()
       }
}
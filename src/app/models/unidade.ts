import { Resource } from "./resource";

export class Unidade extends Resource{
       cnpj: string;
       nome: string;
       latitude:number;
       longitude: number;
       leitos_totais: number;
       leitos_disponiveis: number;
       login: string;
       senha: string;
}
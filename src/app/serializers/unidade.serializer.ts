import { Unidade } from "../models/unidade";


export class UnidadeSerializer {
    fromJson(json: any): Unidade {
      let unidade = new Unidade();
      unidade = json;
      
      return unidade;
    }
  
    toJson(unidade: Unidade): any {
      return JSON.stringify(unidade)
    }
  }
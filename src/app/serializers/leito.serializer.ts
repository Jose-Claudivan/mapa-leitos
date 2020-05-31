import { Leito } from '../models/leito';


export class LeitoSerializer {
    fromJson(json: any): Leito {
      let leito = new Leito();
     

      leito.id = json.id;
      leito.total = json.total;
      leito.disponiveis = json.disponiveis;
      
      return leito;
    }
  
    toJson(leito: Leito): any {
      let json = {
            "total" : leito.total,
            "disponiveis" : leito.disponiveis,
      }

      return json
    }
  }
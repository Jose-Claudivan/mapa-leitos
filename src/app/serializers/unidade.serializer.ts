import { Unidade } from "../models/unidade";
import { Leito } from '../models/leito';


export class UnidadeSerializer {
    fromJson(json: any): Unidade {
      let unidade = new Unidade()
      unidade.leito = new Leito()

      unidade.id = json.id
      unidade.cnpj = json.cnpj
      unidade.nome = json.nome
      unidade.latitude = json.latitude
      unidade.longitude = json.longitude
      unidade.leito.total = json.leito.total
      unidade.leito.disponiveis = json.leito.disponiveis
      unidade.leito.id = json.leito.id


      return unidade;
    }

    toJson(unidade: Unidade): any {
      let json = {
            "id" : unidade.id,
            "cnpj" : unidade.cnpj,
            "nome" : unidade.nome,
            "latitude" : unidade.latitude,
            "longitude" : unidade.longitude,
            "leito":{
                  "total": unidade.leito.total,
                  "disponiveis": unidade.leito.disponiveis
            }
      }

      return json
    }


  }

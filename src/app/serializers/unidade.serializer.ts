import { Unidade } from "../models/unidade";


export class UnidadeSerializer {
    fromJson(json: any): Unidade {
      let unidade = new Unidade();

      unidade.id = json.id;
      unidade.nome = json.nome;
      unidade.latitude = json.latitude;
      unidade.longitude = json.longitude;
      unidade.leitos_totais = json.leitos_totais;
      unidade.leitos_disponiveis = json.leitos_disponiveis;
      unidade.login = json.login;
      unidade.senha = json.senha;

      
      return unidade;
    }
  
    toJson(unidade: Unidade): any {
      let json = {
            "id" : unidade.id,
            "nome" : unidade.nome,
            "latitude" : unidade.latitude,
            "longitude" : unidade.longitude,
            "leitos_totais" : unidade.leitos_totais,
            "leitos_disponiveis" : unidade.leitos_disponiveis,
            "login" : unidade.login,
            "senha" : unidade.senha
      }

      return json
    }
  }
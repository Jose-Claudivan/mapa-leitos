import { Component, OnInit, OnChanges } from '@angular/core';
import { UnidadeService} from '../../services/unidade.service';
import { Unidade } from '../../models/unidade';
import { QueryOptions } from '../../services/query-options';
import { LeitoService } from "../../services/leito.service";
import { LeitoSerializer } from '../../serializers/leito.serializer';


@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.component.html',
  styleUrls: ['./situacao.component.css']
})
export class SituacaoComponent implements OnInit{

  constructor(private unidadeService: UnidadeService, private leitoService: LeitoService) { }

  unidade: Unidade 
  
  ngOnInit(): void {
      this.unidadeService.read(1).
              subscribe( unidade => {
                    this.unidade = unidade
                });
  }

changeModel(){
    this.unidadeService.updateChild(this.unidade,'leito', new LeitoSerializer()).subscribe(
				result => {
					console.log(result);
                });
}

minus(){
    this.unidade.leito.disponiveis-=1
    this.changeModel()
}

plus(){
    this.unidade.leito.disponiveis+=1
    this.changeModel()
}




}

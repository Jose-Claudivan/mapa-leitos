import { Component, OnInit, OnChanges } from '@angular/core';
import { UnidadeService} from '../services/unidade.service';
import { Unidade } from '../models/unidade';
import { QueryOptions } from '../models/query-options';


@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.component.html',
  styleUrls: ['./situacao.component.css']
})
export class SituacaoComponent implements OnInit{

  constructor(private unidadeService: UnidadeService) { }

  unidade: Unidade 
  
  ngOnInit(): void {
      this.unidadeService.read(3).
              subscribe( unidade => {
                    this.unidade = unidade
                });
  }

changeModel(){
    this.unidadeService.update(this.unidade).subscribe(
				result => {
					console.log(result);
                });
}

minus(){
    this.unidade.leitos_disponiveis-=1
    this.changeModel()
}

plus(){
    this.unidade.leitos_disponiveis+=1
    this.changeModel()
}




}

import { Component, OnInit } from '@angular/core';
import { UnidadeService} from '../services/unidade.service';
import { Unidade } from '../models/unidade';
import { QueryOptions } from '../models/query-options';


@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.component.html',
  styleUrls: ['./situacao.component.css']
})
export class SituacaoComponent implements OnInit {

  constructor(private unidadeService: UnidadeService) { }

  unidades: Unidade[]  
  
  ngOnInit(): void {
      this.unidadeService.list(new QueryOptions).
                subscribe( unidades => {
                    this.unidades = unidades
                });
  }

}

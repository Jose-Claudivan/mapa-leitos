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

  unidade: Unidade 
  
  ngOnInit(): void {
      this.unidadeService.read(1).
              subscribe( unidade => {
                    this.unidade = unidade
                });
  }

}

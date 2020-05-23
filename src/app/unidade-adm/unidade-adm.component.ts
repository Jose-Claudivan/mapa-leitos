import { Component, OnInit } from '@angular/core';
import { QueryOptions } from '../models/query-options';
import { UnidadeService} from '../services/unidade.service';
import { Unidade } from '../models/unidade';

@Component({
  selector: 'app-unidade-adm',
  templateUrl: './unidade-adm.component.html',
  styleUrls: ['./unidade-adm.component.css']
})
export class UnidadeAdmComponent implements OnInit {

  unidades: Unidade[] 

  
  constructor(private unidadeService: UnidadeService) { }

   
  
  ngOnInit(): void {
      this.unidadeService.list(new QueryOptions).
                subscribe( unidades => {
                    this.unidades = unidades
                });
  }

}

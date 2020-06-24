import { Component, OnInit } from '@angular/core';
import { Unidade } from '../../models/unidade';
import { UnidadeService } from '../../services/unidade.service';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-unidade-create',
  templateUrl: './unidade-create.component.html',
  styleUrls: ['./unidade-create.component.css']
})
export class UnidadeCreateComponent implements OnInit {

  unidade: Unidade


  constructor(private uiService: UiService, private unidadeService: UnidadeService) { }

  ngOnInit(): void {
    this.unidade = new Unidade()
  }

  onSubmit(){
    console.log(this.unidade)

    this.unidadeService.create(this.unidade).
                subscribe( () =>{
                        this.uiService.showMsg("Unidade Cadastrada")
                        this.clearFields()
                })
  }

  

  clearFields(){
    this.unidade = new Unidade()
  }

}

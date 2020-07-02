import { Component, OnInit, Input } from '@angular/core';
import { Menu, CUSTOM } from './menu';

@Component({
  selector: 'app-role-menu',
  templateUrl: './role-menu.component.html',
  styleUrls: ['./role-menu.component.css'],
})
export class RoleMenuComponent implements OnInit {

  @Input()
  menus: Menu[];

  selectMenus: Menu[] =[];

  roles: String[];


  constructor() { }

  ngOnInit() {
    
    this.selectMenus=[];
    this.menus.forEach(element => {
      if(element.role == CUSTOM ){
          this.selectMenus.push(element);
      }
    });
  }

}

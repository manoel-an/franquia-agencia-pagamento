import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../core/menu/menu-items/menu-items';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: '[angly-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  searchactive: boolean = false;
  exibindoMenu: boolean = false;

  constructor(public menuItems: MenuItems, public router: Router | null) { }

  ngOnInit() { }

  searchActiveFunction() {
    this.searchactive = !this.searchactive;
  }

  onClickOutside(event: Object) {
    if (event && event === true) {
      this.searchactive = false;
    }
  }

  public removeCollapseInClass() {
    $("#navbarCollapse").removeClass('show');
  }

}

import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mobileMenu: Boolean = false;

  constructor() { }


  navBtnClick() {
    this.mobileMenu = !this.mobileMenu;
    console.log('hamburger clicked!');
  }
  menuBtnClick() {
    setTimeout(() => this.mobileMenu = !this.mobileMenu, 750);
    console.log('Mobile-nav item clicked');
  }
}

import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @ViewChild('formModal') public formModal;

  clickMessage = '';

  constructor() { }

  open(event) {
    this.formModal.show();
    console.log(this.clickMessage = 'Hello Word');
  }
}
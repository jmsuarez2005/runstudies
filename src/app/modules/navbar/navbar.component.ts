import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @ViewChild('formModal') public formModal;

  clickMessage = '';

  constructor() { }

  open() {
    this.formModal.show();
  }

  hide() {
    this.formModal.hide();
  }
}
import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent {
  public linkTheme = document.querySelector('#theme');

  changeTheme(theme: string) {
    console.log(theme);
    const url: string = '' + `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);

    localStorage.setItem('theme', url);
  }
}

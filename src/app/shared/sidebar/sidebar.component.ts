import { Component, inject } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  menuItems: any[];
  sidebarService = inject(SidebarService);

  constructor() {
    this.menuItems = this.sidebarService.menu();
    // console.log(this.menuItems);
  }
}

import { Component} from '@angular/core';
import { QuickMenuModel } from './shared-components/models/appmodel';

@Component({
  selector: 'mainapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'main';
    visibleSidebar = true;
    menuVisible: boolean = true;

    tonggleMenu() {
      this.menuVisible = !this.menuVisible;
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    }
  
    itemClick() {
      if (window.innerWidth <= 768) {
        this.menuVisible = true;
      }
    }
    menuConfig: QuickMenuModel[] = [
      {
        routerLink: '/home',
        iconName: 'dashboard.png',
        nameMenu: 'Trang chủ',
      },
      {
        routerLink: '/home/settings',
        iconName: 'settings.svg',
        nameMenu: 'Setting',
      },
    ];
    
}

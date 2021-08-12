import { Component} from '@angular/core';
export interface QuickMenuModel {
  routerLink: string;
  iconName: string;
  nameMenu: string;
}
@Component({
  selector: 'mainapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'main';
    theme=localStorage.getItem("theme");
    menuConfig: QuickMenuModel[] = [
      {
        routerLink: '/home',
        iconName: '/quickmenu/suitcase.svg',
        nameMenu: 'Công việc',
      },
      {
        routerLink: '/home/settings',
        iconName: '/quickmenu/google-docs.svg',
        nameMenu: 'Văn bản',
      },
      {
        routerLink: '/home/settings',
        iconName: '/quickmenu/calendar.svg',
        nameMenu: 'Lịch họp',
      },
      {
        routerLink: '/home/settings',
        iconName: '/quickmenu/customer.svg',
        nameMenu: 'Nhân sự',
      },
      {
        routerLink: '/home/settings',
        iconName: '/quickmenu/news.svg',
        nameMenu: 'Tin tức',
      },
      {
        routerLink: '/home/settings',
        iconName: '/quickmenu/note.svg',
        nameMenu: 'Ghi chú',
      },
      {
        routerLink: '/home/settings',
        iconName: '/quickmenu/add.svg',
        nameMenu: 'Thêm...',
      },
    ];
    
    
    
}

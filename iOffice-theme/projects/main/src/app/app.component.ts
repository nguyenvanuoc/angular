import { Component } from '@angular/core';

@Component({
  selector: 'mainapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
    title = 'main';
    visibleSidebar = true;
    menuVisible: boolean = true;
    closeSidebar(): void {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
      this.visibleSidebar = !this.visibleSidebar;
    }

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
}

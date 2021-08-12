import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {
    visibleSidebar = true;
    menuVisible: boolean = true;

    toggleMenu() {
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
    stopPropagation(event): void {
      event.stopPropagation();
    }
}

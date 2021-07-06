import { Component } from '@angular/core';

@Component({
  selector: 'mainapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'main';
    visibleSidebar = true;
    closeSidebar(): void {
        this.visibleSidebar = !this.visibleSidebar;
    }
}

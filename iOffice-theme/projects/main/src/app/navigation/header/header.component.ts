import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  visibleNoti = false;

  openNoti(): void {
    this.visibleNoti = true;
  }

  closeNoti(): void {
    this.visibleNoti = false;
  }
  counter(i: number) {
      return new Array(i);
  }
}

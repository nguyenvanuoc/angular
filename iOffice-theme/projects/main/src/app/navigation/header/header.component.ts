import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  visibleNoti = false;
  visibleMobileSearch = false;
  visibleMobileSetting = false;
  openNoti(): void {
    this.visibleNoti = true;
  }

  closeNoti(): void {
    this.visibleNoti = false;
  }
  openMobileSearch(): void {
    this.visibleMobileSearch = ! this.visibleMobileSearch;
    this.visibleMobileSetting = false;
  }

  closeMobileAllMenu(): void {
    this.visibleMobileSearch = false;
    this.visibleMobileSetting = false;
  }

  openMobileSetting(): void {
    this.visibleMobileSetting = ! this.visibleMobileSetting;
    this.visibleMobileSearch = false;
  }

  counter(i: number) {
      return new Array(i);
  }
}

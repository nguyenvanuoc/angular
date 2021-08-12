import { Component,HostListener } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'breadcrumb-app',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent {
  @HostListener('window:resize', ['$event'])

  
  onResize(event) {
    event.target.innerWidth;
  }
  ngAfterContentInit() {
  }
}

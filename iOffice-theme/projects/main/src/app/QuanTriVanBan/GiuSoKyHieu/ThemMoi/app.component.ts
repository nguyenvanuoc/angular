import { Component } from '@angular/core';


@Component({
  selector: 'app-ttvbden',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class GiuSoKyHieuThemMoiComponent {
	
	
	listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = [];

  ngOnInit(): void {
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-vanban',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class CongViecSettingsComponent implements OnInit {
	
	
	value: string[] = ['0-0-0'];
  onstopPropagation(event) {
    event.stopPropagation();
  }

  onChange($event: string[]): void {
    console.log($event);
  }
  ngOnInit(): void {
  };
	
}

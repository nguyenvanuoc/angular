import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ttvbden',
  templateUrl: './TTVanBanDen.component.html',
  styleUrls: ['./TTVanBanDen.component.less']
})

export class TTVBDenComponent implements OnInit {
	
	checkOptionsTypeVB = [
		{ label: 'Có văn bản giấy', value: 'cvb', checked: true },
		{ label: 'Văn bản nội tỉnh', value: 'notinh' },
		{ label: 'Văn bản ngoại tỉnh', value: 'ngoaitinh' }
	];
	ngOnInit(): void {
		
  	}
}

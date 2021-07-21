import { Component } from '@angular/core';
interface DSFile {
  nguoisua: string;
  thoigian: string;
  taifile: string;
}

@Component({
  selector: 'app-ttvbden',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class LichSuFileComponent {
	
	listOfData: DSFile[] = [
		{
			nguoisua: 'UBN huyện Văn Phú',
			thoigian: '15/04/2021 14:13:23',
			taifile: 'abc.docx',
		},
		{
			nguoisua: 'UBN huyện Văn Phú',
			thoigian: '15/04/2021 14:13:23',
			taifile: 'abc.docx',
		},
		{
			nguoisua: 'UBN huyện Văn Phú',
			thoigian: '15/04/2021 14:13:23',
			taifile: 'abc.docx',
		},
		{
			nguoisua: 'UBN huyện Văn Phú',
			thoigian: '15/04/2021 14:13:23',
			taifile: 'abc.docx',
		},
		{
			nguoisua: 'UBN huyện Văn Phú',
			thoigian: '15/04/2021 14:13:23',
			taifile: 'abc.docx',
		}
		
	];
	ngOnInit(): void {
		
  	}
}

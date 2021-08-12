import { Component, OnInit } from '@angular/core';

import { VFormatEmitEvent, VTreeNode } from '@vnpt/oneui-ui/tree';

@Component({
  selector: 'app-vanban',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class CongViecListComponent implements OnInit {
	
	
	
	ngOnInit(): void {
	};
	
	visibleShowThemNhanh = false;
	openThemNhanh():void{
		this.visibleShowThemNhanh = true;
	}
	closeThemNhanh():void{
		this.visibleShowThemNhanh = false;
	}
	visibleShowGiaHan = false;
	openGiaHan():void{
		this.visibleShowGiaHan = true;
	}
	closeGiaHan():void{
		this.visibleShowGiaHan = false;
	}

	searchValue = '';
	activatedNode?: VTreeNode;
	nodesGiaHan = [
    {
      title: 'Hồng Hạnh',
      key: '100',
	  avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvSTK_NBkd5pfKXkHNmHkq-cpJMmgRCCDZg&usqp=CAU',
      tags: [
        { name: 'Giao', key: '1000'},
        { name: 'XLC', key: '1001' },
        { name: 'PH', key: '1001'},
        { name: 'TD', key: '1001'},
      ]	
    },{
      title: 'Uoc Nguyen',
      key: '101',
	  avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvSTK_NBkd5pfKXkHNmHkq-cpJMmgRCCDZg&usqp=CAU',
      tags: [
        { name: 'Giao', key: '1000'},
        { name: 'XLC', key: '1001' },
        { name: 'PH', key: '1001'},
        { name: 'TD', key: '1001'},
      ]
    },{
      title: 'Ba Nguyen',
      key: '102',
	  avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvSTK_NBkd5pfKXkHNmHkq-cpJMmgRCCDZg&usqp=CAU',
      tags: [
        { name: 'Giao', key: '1000'},
        { name: 'XLC', key: '1001' },
        { name: 'PH', key: '1001'},
        { name: 'TD', key: '1001'},
      ]
    }];
	vEvent(event: VFormatEmitEvent): void {
		console.log(event);
		console.log(this.searchValue);
	}
}

import { Component } from '@angular/core';
import { VFormatEmitEvent, VTreeNode } from '@vnpt/oneui-ui/tree';
import { VMessageService } from '@vnpt/oneui-ui/message';
import { VUploadChangeParam } from '@vnpt/oneui-ui/upload';

@Component({
  selector: 'app-ttvbden',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class CongViecChiTietComponent {
	nodes = [
    {
      title: '1. Dựng môi trường hệ thống ',
      key: '100',
      expanded: true,
      children: [
        {
          title: '2. Dựng môi trường hệ thống',
          key: '1001',
          children: [
            { title: 'Hệ thống 1', key: '10010', isLeaf: true },
            { title: 'Hệ thống 2', key: '10010', isLeaf: true },
            { title: 'Hệ thống 3', key: '10011', isLeaf: true }
          ]
        },
        {
          title: '3. Dựng môi trường hệ thống',
          key: '1002',
          children: [{ title: 'Hệ thống 1', key: '10020', isLeaf: true }]
        }
      ]
    }];
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
    ngOnInit(): void {
    
    }
}

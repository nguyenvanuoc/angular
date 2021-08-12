import { Component, OnInit } from '@angular/core';

import { VFormatEmitEvent, VTreeNode } from '@vnpt/oneui-ui/tree';
import { VTableFilterFn, VTableFilterList, VTableSortFn, VTableSortOrder } from '@vnpt/oneui-ui/table';
interface ItemData {
  id: number;
  congviec: string;
  dangthuchien: string;
  xlchinh: string;
  phoihop:string;
  duan: string;
}
interface ColumnItem {
  name: string;
  sortOrder: VTableSortOrder | null;
  sortFn: VTableSortFn | null;
  listOfFilter: VTableFilterList;
  filterFn: VTableFilterFn | null;
  filterMultiple: boolean;
  sortDirections: VTableSortOrder[];
}
@Component({
  selector: 'app-vanban',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class CongViecComponent implements OnInit {
	
	checked = false;
	indeterminate = false;
	visibleDetail=false;
	listOfCurrentPageData: ReadonlyArray<ItemData> = [];
	listOfData: ReadonlyArray<ItemData> = [];
	setOfCheckedId = new Set<number>();
	listOfColumns: ColumnItem[] = [
    {
		name: 'Đang thực hiện',
		sortOrder: 'null',
		sortFn: (a: ItemData, b: ItemData) => a.dangthuchien.localeCompare(b.dangthuchien),
		sortDirections: ['ascend', 'descend'],
		filterMultiple: true,
		listOfFilter: [],
		filterFn: null
    },
    {
		name: 'Xử lý chính',
		sortOrder: 'null',
		sortFn: (a: ItemData, b: ItemData) => a.xlchinh.localeCompare(b.xlchinh),
		sortDirections: ['ascend', 'descend'],
		filterMultiple: true,
		listOfFilter: [],
		filterFn: null
    },
    {
		name: 'Phối hợp',
		sortOrder: 'null',
		sortFn: (a: ItemData, b: ItemData) => a.phoihop.localeCompare(b.phoihop),
		sortDirections: ['ascend', 'descend'],
		filterMultiple: true,
		listOfFilter: [],
		filterFn: null
    },
    {
		name: 'Dự án',
		sortOrder: 'null',
		sortFn: (a: ItemData, b: ItemData) => a.duan.localeCompare(b.duan),
		sortDirections: ['ascend', 'descend'],
		filterMultiple: true,
		listOfFilter: [],
		filterFn: null
    }
    
  ];
	updateCheckedSet(id: number, checked: boolean): void {
		if (checked) {
			this.setOfCheckedId.add(id);
		} else {
			this.setOfCheckedId.delete(id);
		}
	}

	onItemChecked(id: number, checked: boolean): void {
		this.updateCheckedSet(id, checked);
		this.refreshCheckedStatus();
	}

	onAllChecked(value: boolean): void {
		this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
		this.refreshCheckedStatus();
	}

	onCurrentPageDataChange($event: ReadonlyArray<ItemData>): void {
		this.listOfCurrentPageData = $event;
		this.refreshCheckedStatus();
	}

	refreshCheckedStatus(): void {
		this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
		this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
	}
	
	ngOnInit(): void {
		this.listOfData =[{
			id:1,
			congviec:'Công việc 1',
			dangthuchien:'27/11/2020 - 15:00',
			xlchinh:'Cục Tin học hóa',
			phoihop:'Trần Lâm',
			duan:"Dự án CSDL Quản lý Tàu cá Quốc gia",
		},
		{
			id:2,
			congviec:'Công việc 1',
			dangthuchien:'27/11/2020 - 15:00',
			xlchinh:'Cục Tin học hóa',
			phoihop:'Trần Lâm',
			duan:"Dự án CSDL Quản lý Tàu cá Quốc gia",
		},
		{
			id:3,
			congviec:'Công việc 1',
			dangthuchien:'27/11/2020 - 15:00',
			xlchinh:'Cục Tin học hóa',
			phoihop:'Trần Lâm',
			duan:"Dự án CSDL Quản lý Tàu cá Quốc gia",
		},
		{
			id:4,
			congviec:'Công việc 1',
			dangthuchien:'27/11/2020 - 15:00',
			xlchinh:'Cục Tin học hóa',
			phoihop:'Trần Lâm',
			duan:"Dự án CSDL Quản lý Tàu cá Quốc gia",
		},
		{
			id:5,
			congviec:'Công việc 1',
			dangthuchien:'27/11/2020 - 15:00',
			xlchinh:'Cục Tin học hóa',
			phoihop:'Trần Lâm',
			duan:"Dự án CSDL Quản lý Tàu cá Quốc gia",
		},
		{
			id:6,
			congviec:'Công việc 1',
			dangthuchien:'27/11/2020 - 15:00',
			xlchinh:'Cục Tin học hóa',
			phoihop:'Trần Lâm',
			duan:"Dự án CSDL Quản lý Tàu cá Quốc gia",
		},
    ]};
	closeVBDetail():void{
		this.visibleDetail=!this.visibleDetail;
	}
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

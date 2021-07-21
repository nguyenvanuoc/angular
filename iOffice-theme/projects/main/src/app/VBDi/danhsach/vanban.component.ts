import { Component, OnInit } from '@angular/core';
import { VTableFilterFn, VTableFilterList, VTableSortFn, VTableSortOrder } from '@vnpt/oneui-ui/table';
interface ItemData {
  id: number;
  name: string;
  kyhieu: string;
  hinhthuc: string;
  ngaybanhanh: string;
  ngaysoanthao: string;
  donvisoanthao: string;
  nguoiky: string;
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
  templateUrl: './vanban.component.html',
  styleUrls: ['./vanban.component.less']
})

export class VBDiComponent implements OnInit {
	
	checked = false;
	indeterminate = false;
	visibleDetail=false;
	listOfCurrentPageData: ReadonlyArray<ItemData> = [];
	listOfData: ReadonlyArray<ItemData> = [];
	setOfCheckedId = new Set<number>();
	listOfColumns: ColumnItem[] = [
    {
		name: 'SỐ KÝ HIỆU',
		sortOrder: 'null',
		sortFn: (a: ItemData, b: ItemData) => a.kyhieu.localeCompare(b.kyhieu),
		sortDirections: ['ascend', 'descend'],
		filterMultiple: true,
		listOfFilter: [],
		filterFn: null
    },
    {
		name: 'HÌNH THỨC',
		sortOrder: 'null',
		sortFn: (a: ItemData, b: ItemData) => a.kyhieu.localeCompare(b.kyhieu),
		sortDirections: ['ascend', 'descend'],
		filterMultiple: true,
		listOfFilter: [],
		filterFn: null
    },
    {
		name: 'NGÀY BAN HÀNH',
		sortOrder: 'null',
		sortFn: (a: ItemData, b: ItemData) => a.kyhieu.localeCompare(b.kyhieu),
		sortDirections: ['ascend', 'descend'],
		filterMultiple: true,
		listOfFilter: [],
		filterFn: null
    },
    {
		name: 'NGÀY SOẠN THẢO',
		sortOrder: 'null',
		sortFn: (a: ItemData, b: ItemData) => a.kyhieu.localeCompare(b.kyhieu),
		sortDirections: ['ascend', 'descend'],
		filterMultiple: true,
		listOfFilter: [],
		filterFn: null
    },
    {
		name: 'ĐƠN VỊ SOẠN THẢO',
		sortOrder: 'null',
		sortFn: (a: ItemData, b: ItemData) => a.kyhieu.localeCompare(b.kyhieu),
		sortDirections: ['ascend', 'descend'],
		filterMultiple: true,
		listOfFilter: [],
		filterFn: null
    },
    {
		name: 'NGƯỜI KÝ',
		sortOrder: 'null',
		sortFn: (a: ItemData, b: ItemData) => a.kyhieu.localeCompare(b.kyhieu),
		sortDirections: ['ascend', 'descend'],
		filterMultiple: true,
		listOfFilter: [],
		filterFn: null
    },
    
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
	panels = [
		{
			active: true,
			name: 'Công ty Công nghệ thông tin VNPT IT/ Điều hành Trung tâm VNPT-IT KV2',
			disabled: false
		},
		{
			active: false,
			disabled: false,
			name: 'Công ty Công nghệ thông tin VNPT IT/ Điều hành Trung tâm VNPT-IT KV2'
		},
		{
			active: false,
			disabled: false,
			name: 'Công ty Công nghệ thông tin VNPT IT/ Điều hành Trung tâm VNPT-IT KV2'
		}
	];
	ngOnInit(): void {
		this.listOfData = new Array(200).fill(0).map((_, index) => {
			return {
				id: index,
				name: `Văn bản đi thường chọn VB đã phúc đáp  ${index}`,
				kyhieu: `316/CV-NHNN${index}`,
				hinhthuc: `Công văn  ${index}`,
				ngaybanhanh: `30/03/2021`,
				ngaysoanthao: `30/03/2021`,
				donvisoanthao: `Văn thư YBND`,
				nguoiky: `Nguyễn Thị Dân`
			};
		});
  	}
	closeVBDetail():void{
		this.visibleDetail=!this.visibleDetail;
	}
}

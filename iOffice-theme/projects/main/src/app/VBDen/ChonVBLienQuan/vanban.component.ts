import { Component, OnInit } from '@angular/core';
import { VTableFilterFn, VTableFilterList, VTableSortFn, VTableSortOrder } from '@vnpt/oneui-ui/table';
interface ItemData {
  id: number;
  trichyeu: string;
  sokyhieu: string;
  soden: string;
  donvi: string;
}

@Component({
  selector: 'app-vanban',
  templateUrl: './vanban.component.html',
  styleUrls: ['./vanban.component.less']
})

export class ChonVBLienQuanComponent implements OnInit {
	
	checked = false;
	indeterminate = false;
	visibleDetail=false;
	listOfCurrentPageData: ReadonlyArray<ItemData> = [];
	listOfData: ReadonlyArray<ItemData> = [];
	setOfCheckedId = new Set<number>();
	
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
		this.listOfData = new Array(200).fill(0).map((_, index) => {
			return {
				id: index,
				trichyeu: `Văn bản đi thường chọn VB đã phúc đáp  ${index}`,
				sokyhieu: `316/CV-NHNN${index}`,
				hinhthuc: `Công văn  ${index}`,
				soden: `300`,
				donvi: `Sở TTTT Cà Mau - Test`
			};
		});
  	}
	
}

import { Component, OnInit } from '@angular/core';
import { VModalService } from '@vnpt/oneui-ui/modal';

interface ItemData {
  id: number;
  tenlinhvuc: string;
  donviapdung: string;
  lanhdaoduyet: string;
  xulychinh: string;
  phoihop: string;
  xemdebiet: string;
}

@Component({
  selector: 'app-vanban',
  templateUrl: './vanban.component.html',
  styleUrls: ['./vanban.component.less']
})

export class CauHinhVanBanComponent implements OnInit {
	
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
				tenlinhvuc: `Đầu tư`,
				donviapdung: `UBND tỉnh Bạc Liêu`,
				lanhdaoduyet: `lanhdaopc`,
				xulychinh: `Hằngnt, lanhdaoqh.it@vnpt.vn`,
				phoihop: `Hằngnt, lanhdaoqh.it@vnpt.vn`,
				xemdebiet: `uocnv`
			};
		});
  	}
	constructor(private modal: VModalService) {}
	showDeleteConfirm(): void {
    this.modal.confirm({
		vTitle: 'Xác nhận?',
		vContent: 'Bạn có chắc chắn muốn xóa bản đã chọn này?',
		vOkText: 'ĐỒNG Ý',
		vOkType: 'primary',
		vOkDanger: true,
		vOnOk: () => console.log('OK'),
		vCancelText: 'HỦY',
		vOnCancel: () => console.log('Cancel')
		});
	}
}

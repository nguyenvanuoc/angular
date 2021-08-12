import { Component, OnInit } from '@angular/core';
import { VModalService } from '@vnpt/oneui-ui/modal';

interface ItemData {
  id: number;
  tensovb: string;
  hinhthuc: string;
  mauso: string;
  sodagiu: string;
  nguoigiu: string;
  trangthai: string;
  nguoisudung: string;
}

@Component({
  selector: 'app-vanban',
  templateUrl: './vanban.component.html',
  styleUrls: ['./vanban.component.less']
})

export class GiuSoKyHieuComponent implements OnInit {
	
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
		this.listOfData = [
			{
				id: 1,
				tensovb: `VB01`,
				hinhthuc: `Hình thức 1`,
				mauso: `MS01 `,
				sodagiu: `SG01`,
				nguoigiu: `Uoc Nguyen`,
				trangthai: `sudung`,
				nguoisudung: `Uoc Nguyen`,
			},
			{
				id: 2,
				tensovb: `VB01`,
				hinhthuc: `Hình thức 1`,
				mauso: `MS01 `,
				sodagiu: `SG01`,
				nguoigiu: `Uoc Nguyen`,
				trangthai: `chuasudung`,
				nguoisudung: `Uoc Nguyen`,
			},
			{
				id: 3,
				tensovb: `VB01`,
				hinhthuc: `Hình thức 1`,
				mauso: `MS01 `,
				sodagiu: `SG01`,
				nguoigiu: `Uoc Nguyen`,
				trangthai: `chuasudung`,
				nguoisudung: `Uoc Nguyen`,
			},
			{
				id: 4,
				tensovb: `VB01`,
				hinhthuc: `Hình thức 1`,
				mauso: `MS01 `,
				sodagiu: `SG01`,
				nguoigiu: `Uoc Nguyen`,
				trangthai: `chuasudung`,
				nguoisudung: `Uoc Nguyen`,
			},
			{
				id: 5,
				tensovb: `VB01`,
				hinhthuc: `Hình thức 1`,
				mauso: `MS01 `,
				sodagiu: `SG01`,
				nguoigiu: `Uoc Nguyen`,
				trangthai: `chuasudung`,
				nguoisudung: `Uoc Nguyen`,
			},
			{
				id: 6,
				tensovb: `VB01`,
				hinhthuc: `Hình thức 1`,
				mauso: `MS01 `,
				sodagiu: `SG01`,
				nguoigiu: `Uoc Nguyen`,
				trangthai: `chuasudung`,
				nguoisudung: `Uoc Nguyen`,
			},
			{
				id: 7,
				tensovb: `VB01`,
				hinhthuc: `Hình thức 1`,
				mauso: `MS01 `,
				sodagiu: `SG01`,
				nguoigiu: `Uoc Nguyen`,
				trangthai: `chuasudung`,
				nguoisudung: `Uoc Nguyen`,
			},
			{
				id: 8,
				tensovb: `VB01`,
				hinhthuc: `Hình thức 1`,
				mauso: `MS01 `,
				sodagiu: `SG01`,
				nguoigiu: `Uoc Nguyen`,
				trangthai: `chuasudung`,
				nguoisudung: `Uoc Nguyen`,
			},
			{
				id: 9,
				tensovb: `VB01`,
				hinhthuc: `Hình thức 1`,
				mauso: `MS01 `,
				sodagiu: `SG01`,
				nguoigiu: `Uoc Nguyen`,
				trangthai: `chuasudung`,
				nguoisudung: `Uoc Nguyen`,
			},
			{
				id: 10,
				tensovb: `VB01`,
				hinhthuc: `Hình thức 1`,
				mauso: `MS01 `,
				sodagiu: `SG01`,
				nguoigiu: `Uoc Nguyen`,
				trangthai: `chuasudung`,
				nguoisudung: `Uoc Nguyen`,
			},

		]
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

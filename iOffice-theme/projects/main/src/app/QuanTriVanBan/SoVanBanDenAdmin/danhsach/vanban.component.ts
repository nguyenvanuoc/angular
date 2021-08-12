import { Component, OnInit } from '@angular/core';
import { VModalService } from '@vnpt/oneui-ui/modal';

interface ItemData {
  id: number;
  tensovb: string;
  donviapdung: string;
  sobatdau: string;
  ngayapdung: string;
  ngayketthuc: string;
  stthientai: string;
  nguoitheodoi: string;
  nguoiquantri: string;
}

@Component({
  selector: 'app-vanban',
  templateUrl: './vanban.component.html',
  styleUrls: ['./vanban.component.less']
})

export class SoVBDenAdminComponent implements OnInit {
	
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
				tensovb: `Sổ vb test chức năng giữ sổ`,
				donviapdung: `Công văn`,
				sobatdau: `1`,
				ngayapdung: `27/11/2019`,
				ngayketthuc: `02/11/2020`,
				stthientai: `1`,
				nguoitheodoi: `Hằngnt, lanhdaoqh.it@vnpt.vn`,
				nguoiquantri: `lanhdaopc, hangnt04, vanthu@vnpt.vn`,
			},
			{

				id: 2,
				tensovb: `Sổ vb test chức năng giữ sổ`,
				donviapdung: `Công văn`,
				sobatdau: `1`,
				ngayapdung: `27/11/2019`,
				ngayketthuc: `02/11/2020`,
				stthientai: `1`,
				nguoitheodoi: `Hằngnt, lanhdaoqh.it@vnpt.vn`,
				nguoiquantri: `lanhdaopc, hangnt04, vanthu@vnpt.vn`,
			},
			{

				id: 3,
				tensovb: `Sổ vb test chức năng giữ sổ`,
				donviapdung: `Công văn`,
				sobatdau: `1`,
				ngayapdung: `27/11/2019`,
				ngayketthuc: `02/11/2020`,
				stthientai: `1`,
				nguoitheodoi: `Hằngnt, lanhdaoqh.it@vnpt.vn`,
				nguoiquantri: `lanhdaopc, hangnt04, vanthu@vnpt.vn`,
			},
			{

				id: 4,
				tensovb: `Sổ vb test chức năng giữ sổ`,
				donviapdung: `Công văn`,
				sobatdau: `1`,
				ngayapdung: `27/11/2019`,
				ngayketthuc: `02/11/2020`,
				stthientai: `1`,
				nguoitheodoi: `Hằngnt, lanhdaoqh.it@vnpt.vn`,
				nguoiquantri: `lanhdaopc, hangnt04, vanthu@vnpt.vn`,
			},
			{

				id: 5,
				tensovb: `Sổ vb test chức năng giữ sổ`,
				donviapdung: `Công văn`,
				sobatdau: `1`,
				ngayapdung: `27/11/2019`,
				ngayketthuc: `02/11/2020`,
				stthientai: `1`,
				nguoitheodoi: `Hằngnt, lanhdaoqh.it@vnpt.vn`,
				nguoiquantri: `lanhdaopc, hangnt04, vanthu@vnpt.vn`,
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

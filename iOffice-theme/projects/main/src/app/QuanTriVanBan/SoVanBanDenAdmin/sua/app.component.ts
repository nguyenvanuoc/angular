import { Component } from '@angular/core';
import { VModalService } from '@vnpt/oneui-ui/modal';
interface ItemData {
  id: number;
  nhayso: string;
  hinhthuc: string;
  mausinh: string;
  sobatdau: number;
  sohientai: number;
}
@Component({
  selector: 'app-ttvbden',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


export class SoVBDenAdminSuaComponent {
	
	radioValue="A";
	value: string[] = ['0-0-0'];
  listOfData: ReadonlyArray<ItemData> = [];
  nodes = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
          isLeaf: true
        }
      ]
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
          isLeaf: true
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
          isLeaf: true
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
          isLeaf: true
        }
      ]
    }
  ];

  onChange($event: string[]): void {
    console.log($event);
  }

  ngOnInit(): void {
    this.listOfData = [
			{
        id:1,
				nhayso: `Số văn bản`,
        hinhthuc: `Công điiện`,
        mausinh: `[stt] [coquanbanhanh]`,
        sobatdau: 1,
        sohientai: 3,
			},
			{
        id:1,
				nhayso: `Số văn bản`,
        hinhthuc: `Công điiện`,
        mausinh: `[stt] [coquanbanhanh]`,
        sobatdau: 1,
        sohientai: 3,
			},
			{
        id:1,
				nhayso: `Số văn bản`,
        hinhthuc: `Công điiện`,
        mausinh: `[stt] [coquanbanhanh]`,
        sobatdau: 1,
        sohientai: 3,
			},
			{
        id:1,
				nhayso: `Số văn bản`,
        hinhthuc: `Công điiện`,
        mausinh: `[stt] [coquanbanhanh]`,
        sobatdau: 1,
        sohientai: 3,
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

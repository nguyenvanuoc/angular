import { Component } from '@angular/core';
import { VFormatEmitEvent, VTreeNode } from '@vnpt/oneui-ui/tree';
import { VMessageService } from '@vnpt/oneui-ui/message';
import { VUploadChangeParam,VUploadFile } from '@vnpt/oneui-ui/upload';

@Component({
  selector: 'app-ttvbden',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class CongViecThemMoiComponent {
	radioValue="ngay";
	radioValueTD="A";
	checkOptionsHT="A";
	searchValue = '';
	activatedNode?: VTreeNode;
	nodesGiaHan = [{
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

	nodesGiaHan1 = [
    {
        title: 'Cục Tin học hóa',
        key: '100',
        expanded: true,
        children: [
            {
                title: 'Văn phòng',
                key: '101',
                expanded: true,
                children:[{
                    title: 'Hồng Hạnh',
                    key: '100',
                    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvSTK_NBkd5pfKXkHNmHkq-cpJMmgRCCDZg&usqp=CAU',
                    isLeaf: true,
                    tags: [
                        { name: 'Giao', key: '1000'},
                        { name: 'XLC', key: '1001' },
                        { name: 'PH', key: '1001'},
                        { name: 'TD', key: '1001'},
                    ]},{
                    title: 'Uoc Nguyen',
                    key: '101',
                    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvSTK_NBkd5pfKXkHNmHkq-cpJMmgRCCDZg&usqp=CAU',
                    isLeaf: true,
                    tags: [
                        { name: 'Giao', key: '1000'},
                        { name: 'XLC', key: '1001' },
                        { name: 'PH', key: '1001'},
                        { name: 'TD', key: '1001'},
                    ]},{
                    title: 'Ba Nguyen',
                    key: '102',
                    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvSTK_NBkd5pfKXkHNmHkq-cpJMmgRCCDZg&usqp=CAU',
                    isLeaf: true,
                    tags: [
                        { name: 'Giao', key: '1000'},
                        { name: 'XLC', key: '1001' },
                        { name: 'PH', key: '1001'},
                        { name: 'TD', key: '1001'},
                    ]
                }]
            },
        ],
    }];
	vEvent(event: VFormatEmitEvent): void {
		console.log(event);
	}
    constructor(private msg: VMessageService) {}
    fileList1: VUploadFile[]=[];
    handleChange({ file, fileList }: VUploadChangeParam): void {
        const status = file.status;
        this.fileList1=fileList;
        if (status !== 'uploading') {
            console.log(file, fileList);
        }
        if (status === 'done') {
            this.msg.success(`${file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            this.msg.error(`${file.name} file upload failed.`);
        }
    }
    
    handleRemove(key): void {
        this.fileList1 = this.fileList1.filter(item => item.uid !== key);
        console.log(this.fileList1);
        console.log(key);
    }
    ngOnInit(): void {
        
    }
}

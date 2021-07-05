import { EventEmitter, OnInit } from '@angular/core';
import { SubMenuModel } from '../models/menu.model';
import * as i0 from "@angular/core";
export declare class ToolbarComponent implements OnInit {
    config: SubMenuModel[];
    fixAtTop: number;
    fixAtBottom: number;
    bgColor: string;
    isCollapse: boolean;
    screenSize: number;
    sliceNum: number;
    itemClick: EventEmitter<SubMenuModel>;
    onResize(event: any): void;
    ngOnInit(): void;
    calculateScreen(): void;
    tonggleCollapse(): void;
    onItemClick(item: SubMenuModel): void;
    static ɵfac: i0.ɵɵFactoryDef<ToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ToolbarComponent, "app-toolbar", never, { "config": "config"; "fixAtTop": "fixAtTop"; "fixAtBottom": "fixAtBottom"; "bgColor": "bgColor"; "isCollapse": "isCollapse"; }, { "itemClick": "itemClick"; }, never, ["*"]>;
}
//# sourceMappingURL=toolbar.component.d.ts.map
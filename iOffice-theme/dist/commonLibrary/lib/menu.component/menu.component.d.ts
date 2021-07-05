import { EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubMenuModel } from '../models/menu.model';
import * as i0 from "@angular/core";
export declare class SubMenuComponent implements OnInit {
    private router;
    menuConfig: SubMenuModel[];
    itemClick: EventEmitter<SubMenuModel>;
    activeRouter: string;
    constructor(router: Router);
    ngOnInit(): void;
    onClick(event: SubMenuModel): void;
    static ɵfac: i0.ɵɵFactoryDef<SubMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SubMenuComponent, "submenu-comp", never, { "menuConfig": "menuConfig"; }, { "itemClick": "itemClick"; }, never, never>;
}
//# sourceMappingURL=menu.component.d.ts.map
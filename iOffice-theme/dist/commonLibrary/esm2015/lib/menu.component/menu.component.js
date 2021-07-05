import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "@vnpt/oneui-ui/menu";
import * as i4 from "@vnpt/oneui-ui/core/transition-patch";
import * as i5 from "@vnpt/oneui-ui/icon";
import * as i6 from "../menu.pipes";
import * as i7 from "../assert.pipe";
function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_1_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 11);
    i0.ɵɵpipe(1, "assetUrl");
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("vSrc", item_r7.iconfont ? "" : i0.ɵɵpipeBind1(1, 3, item_r7.icon))("vType", item_r7.iconfont ? item_r7.icon : "")("vSize", "xs");
} }
function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 9);
    i0.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r16); const item_r7 = i0.ɵɵnextContext().$implicit; const ctx_r14 = i0.ɵɵnextContext(4); return ctx_r14.onClick(item_r7); });
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_1_i_2_Template, 2, 5, "i", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("routerLink", item_r7.routerLink);
    i0.ɵɵpropertyInterpolate("title", item_r7.title);
    i0.ɵɵproperty("vSelected", i0.ɵɵpipeBind2(1, 5, ctx_r9.activeRouter, item_r7.routerLink));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r7.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r7.title);
} }
function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 11);
    i0.ɵɵpipe(1, "assetUrl");
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("vSrc", item_r7.iconfont ? "" : i0.ɵɵpipeBind1(1, 3, item_r7.icon))("vType", item_r7.iconfont ? item_r7.icon : "")("vSize", "xs");
} }
function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_2_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r22); const item_r7 = i0.ɵɵnextContext().$implicit; const ctx_r20 = i0.ɵɵnextContext(4); return ctx_r20.onClick(item_r7); });
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_2_i_2_Template, 2, 5, "i", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r10 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("vRouterLink", item_r7.vRouterLink);
    i0.ɵɵpropertyInterpolate("title", item_r7.title);
    i0.ɵɵproperty("vSelected", i0.ɵɵpipeBind2(1, 5, ctx_r10.activeRouter, item_r7.routerLink));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r7.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r7.title);
} }
function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_3_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 11);
    i0.ɵɵpipe(1, "assetUrl");
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("vSrc", item_r7.iconfont ? "" : i0.ɵɵpipeBind1(1, 3, item_r7.icon))("vType", item_r7.iconfont ? item_r7.icon : "")("vSize", "xs");
} }
function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵelementStart(2, "a", 14);
    i0.ɵɵtemplate(3, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_3_i_3_Template, 2, 5, "i", 10);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r11 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("vSelected", i0.ɵɵpipeBind2(1, 5, ctx_r11.activeRouter, item_r7.routerLink));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("href", item_r7.href, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", item_r7.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r7.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r7.title);
} }
function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_1_Template, 4, 8, "li", 6);
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_2_Template, 4, 8, "li", 7);
    i0.ɵɵtemplate(3, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_3_Template, 5, 8, "li", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r7.routerLink);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r7.vRouterLink);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r7.href);
} }
function SubMenuComponent_ul_0_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵelementStart(1, "ul");
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("vTitle", menu_r2.title)("vIcon", menu_r2.iconfont ? menu_r2.icon : "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", menu_r2.childs);
} }
function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_1_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 11);
    i0.ɵɵpipe(1, "assetUrl");
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("vSrc", menu_r2.iconfont ? "" : i0.ɵɵpipeBind1(1, 3, menu_r2.icon))("vType", menu_r2.iconfont ? menu_r2.icon : "")("vSize", "xs");
} }
function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 9);
    i0.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r35); const menu_r2 = i0.ɵɵnextContext(2).$implicit; const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.onClick(menu_r2); });
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_1_i_2_Template, 2, 5, "i", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", menu_r2.routerLink);
    i0.ɵɵpropertyInterpolate("title", menu_r2.title);
    i0.ɵɵproperty("vSelected", i0.ɵɵpipeBind2(1, 5, ctx_r28.activeRouter, ctx_r28.item.routerLink));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", menu_r2.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(menu_r2.title);
} }
function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 11);
    i0.ɵɵpipe(1, "assetUrl");
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("vSrc", menu_r2.iconfont ? "" : i0.ɵɵpipeBind1(1, 3, menu_r2.icon))("vType", menu_r2.iconfont ? menu_r2.icon : "")("vSize", "xs");
} }
function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_2_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r41); const menu_r2 = i0.ɵɵnextContext(2).$implicit; const ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.onClick(menu_r2); });
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_2_i_2_Template, 2, 5, "i", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("vRouterLink", menu_r2.vRouterLink);
    i0.ɵɵpropertyInterpolate("title", menu_r2.title);
    i0.ɵɵproperty("vSelected", i0.ɵɵpipeBind2(1, 5, ctx_r29.activeRouter, ctx_r29.item.routerLink));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", menu_r2.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(menu_r2.title);
} }
function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_3_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 11);
    i0.ɵɵpipe(1, "assetUrl");
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("vSrc", menu_r2.iconfont ? "" : i0.ɵɵpipeBind1(1, 3, menu_r2.icon))("vType", menu_r2.iconfont ? menu_r2.icon : "")("vSize", "xs");
} }
function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵelementStart(2, "a", 14);
    i0.ɵɵtemplate(3, SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_3_i_3_Template, 2, 5, "i", 10);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("vSelected", i0.ɵɵpipeBind2(1, 5, ctx_r30.activeRouter, ctx_r30.item.routerLink));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("href", menu_r2.href, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", menu_r2.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r2.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(menu_r2.title);
} }
function SubMenuComponent_ul_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_1_Template, 4, 8, "li", 6);
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_2_Template, 4, 8, "li", 7);
    i0.ɵɵtemplate(3, SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_3_Template, 5, 8, "li", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r2.routerLink);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r2.vRouterLink);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r2.href);
} }
function SubMenuComponent_ul_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_li_1_Template, 3, 3, "li", 3);
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r2.childs && menu_r2.childs.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.menuConfig || ctx_r1.menuConfig.length <= 0);
} }
function SubMenuComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 1);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_Template, 3, 2, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.menuConfig);
} }
export class SubMenuComponent {
    constructor(router) {
        this.router = router;
        this.itemClick = new EventEmitter();
        this.router.events.subscribe((data) => {
            if (data instanceof NavigationEnd) {
                this.activeRouter = data.url.toLowerCase();
            }
        });
    }
    ngOnInit() { }
    onClick(event) {
        this.itemClick.emit(event);
    }
}
SubMenuComponent.ɵfac = function SubMenuComponent_Factory(t) { return new (t || SubMenuComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
SubMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubMenuComponent, selectors: [["submenu-comp"]], inputs: { menuConfig: "menuConfig" }, outputs: { itemClick: "itemClick" }, decls: 1, vars: 1, consts: [["vnpt-menu", "", "vMode", "inline", "style", "padding: 10px 2px 20px 20px;", 4, "ngIf"], ["vnpt-menu", "", "vMode", "inline", 2, "padding", "10px 2px 20px 20px"], [4, "ngFor", "ngForOf"], ["vnpt-submenu", "", "vOpen", "", 3, "vTitle", "vIcon", 4, "ngIf"], [4, "ngIf"], ["vnpt-submenu", "", "vOpen", "", 3, "vTitle", "vIcon"], ["vnpt-menu-item", "", 3, "routerLink", "title", "vSelected", "click", 4, "ngIf"], ["vnpt-menu-item", "", 3, "vRouterLink", "title", "vSelected", "click", 4, "ngIf"], ["vnpt-menu-item", "", 3, "vSelected", 4, "ngIf"], ["vnpt-menu-item", "", 3, "routerLink", "title", "vSelected", "click"], ["vnpt-icon", "", 3, "vSrc", "vType", "vSize", 4, "ngIf"], ["vnpt-icon", "", 3, "vSrc", "vType", "vSize"], ["vnpt-menu-item", "", 3, "vRouterLink", "title", "vSelected", "click"], ["vnpt-menu-item", "", 3, "vSelected"], ["target", "_blank", 3, "href", "title"]], template: function SubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SubMenuComponent_ul_0_Template, 2, 1, "ul", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.menuConfig && ctx.menuConfig.length > 0);
    } }, directives: [i2.NgIf, i3.VMenuDirective, i2.NgForOf, i4.ɵVTransitionPatchDirective, i3.VSubMenuComponent, i3.VMenuItemDirective, i1.RouterLink, i5.VIconDirective], pipes: [i6.ActiveUrlCheckPipe, i7.AssetUrlPipe], styles: ["[_nghost-%COMP%]     .oneui-menu-inline .oneui-menu-item{margin-bottom:15px;margin-top:6px;padding-right:35px;padding-left:20px!important}[_nghost-%COMP%]     .oneui-menu-inline .oneui-menu-item i{margin-right:12px}[_nghost-%COMP%]     .oneui-menu:not(.oneui-menu-horizontal) .oneui-menu-item-selected{background-color:#e7e8e9}[_nghost-%COMP%]     .oneui-menu-inline>.oneui-menu-submenu>.oneui-menu-submenu-title{font-weight:600;padding-left:10px!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubMenuComponent, [{
        type: Component,
        args: [{
                selector: 'submenu-comp',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css'],
            }]
    }], function () { return [{ type: i1.Router }]; }, { menuConfig: [{
            type: Input
        }], itemClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvbWVudS5jb21wb25lbnQvbWVudS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvbWVudS5jb21wb25lbnQvbWVudS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7OztJQ01zQyx3QkFFN0Q7Ozs7SUFEbkIsaUZBQWlELCtDQUFBLGVBQUE7Ozs7SUFGckQsNkJBQ29GO0lBQXhCLDZRQUF1Qjs7SUFBQywyR0FFN0Q7SUFBQSxZQUFjO0lBQUEsaUJBQUs7Ozs7SUFIQywwREFBZ0M7SUFBQyxnREFBc0I7SUFDaEcseUZBQXlEO0lBQTZCLGVBQWU7SUFBZixtQ0FBZTtJQUVoRixlQUFjO0lBQWQsbUNBQWM7OztJQUUrQyx3QkFFN0Q7Ozs7SUFEbkIsaUZBQWlELCtDQUFBLGVBQUE7Ozs7SUFGckQsOEJBQ29GO0lBQXhCLDZRQUF1Qjs7SUFBQywyR0FFN0Q7SUFBQSxZQUFjO0lBQUEsaUJBQUs7Ozs7SUFIRSw0REFBa0M7SUFBQyxnREFBc0I7SUFDbkcsMEZBQXlEO0lBQTZCLGVBQWU7SUFBZixtQ0FBZTtJQUVoRixlQUFjO0lBQWQsbUNBQWM7OztJQUUyQix3QkFFdkM7Ozs7SUFEbkIsaUZBQWlELCtDQUFBLGVBQUE7OztJQUZ2RCw4QkFBK0Y7O0lBQUEsNkJBQy9CO0lBQUEsMkdBRXZDO0lBQUEsWUFBYztJQUFBLGlCQUFJO0lBQUEsaUJBQUs7Ozs7SUFIWCwwRkFBeUQ7SUFDMUYsZUFBb0I7SUFBcEIs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LFNBQVM7a0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1Yk1lbnVNb2RlbCB9IGZyb20gJy4uL21vZGVscy9tZW51Lm1vZGVsJztcclxuaW1wb3J0IHsgVXRpbGl0aWVzIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VibWVudS1jb21wJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWVudS5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBtZW51Q29uZmlnOiBTdWJNZW51TW9kZWxbXTtcclxuXHJcbiAgQE91dHB1dCgpIGl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8U3ViTWVudU1vZGVsPigpO1xyXG5cclxuICBhY3RpdmVSb3V0ZXI6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVJvdXRlciA9IGRhdGEudXJsLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBvbkNsaWNrKGV2ZW50OiBTdWJNZW51TW9kZWwpIHtcclxuICAgIHRoaXMuaXRlbUNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iLCI8dWwgKm5nSWY9XCJtZW51Q29uZmlnICYmIG1lbnVDb25maWcubGVuZ3RoPjBcIiB2bnB0LW1lbnUgdk1vZGU9XCJpbmxpbmVcIiBzdHlsZT1cInBhZGRpbmc6IDEwcHggMnB4IDIwcHggMjBweDtcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVDb25maWc7IGxldCBpID0gaW5kZXhcIj5cclxuICAgIDxsaSAqbmdJZj1cIm1lbnUuY2hpbGRzICYmIG1lbnUuY2hpbGRzLmxlbmd0aCA+IDBcIiB2bnB0LXN1Ym1lbnUgW3ZUaXRsZV09XCJtZW51LnRpdGxlXCJcclxuICAgICAgW3ZJY29uXT1cIm1lbnUuaWNvbmZvbnQ/bWVudS5pY29uOicnXCIgdk9wZW4+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIG1lbnUuY2hpbGRzOyBsZXQgaiA9IGluZGV4XCI+XHJcbiAgICAgICAgICA8bGkgKm5nSWY9XCJpdGVtLnJvdXRlckxpbmtcIiB2bnB0LW1lbnUtaXRlbSByb3V0ZXJMaW5rPVwie3tpdGVtLnJvdXRlckxpbmt9fVwiIHRpdGxlPVwie3tpdGVtLnRpdGxlfX1cIlxyXG4gICAgICAgICAgICBbdlNlbGVjdGVkXT1cImFjdGl2ZVJvdXRlcnxhY3RpdmVVcmxDaGVjazppdGVtLnJvdXRlckxpbmtcIiAoY2xpY2spPVwib25DbGljayhpdGVtKVwiPjxpICpuZ0lmPVwiaXRlbS5pY29uXCIgdm5wdC1pY29uXHJcbiAgICAgICAgICAgICAgW3ZTcmNdPVwiaXRlbS5pY29uZm9udD8gJyc6KGl0ZW0uaWNvbiB8IGFzc2V0VXJsKVwiIFt2VHlwZV09XCJpdGVtLmljb25mb250PyBpdGVtLmljb246JydcIlxyXG4gICAgICAgICAgICAgIFt2U2l6ZV09XCIneHMnXCI+PC9pPnt7aXRlbS50aXRsZX19PC9saT5cclxuICAgICAgICAgIDxsaSAqbmdJZj1cIml0ZW0udlJvdXRlckxpbmtcIiB2bnB0LW1lbnUtaXRlbSB2Um91dGVyTGluaz1cInt7aXRlbS52Um91dGVyTGlua319XCIgdGl0bGU9XCJ7e2l0ZW0udGl0bGV9fVwiXHJcbiAgICAgICAgICAgIFt2U2VsZWN0ZWRdPVwiYWN0aXZlUm91dGVyfGFjdGl2ZVVybENoZWNrOml0ZW0ucm91dGVyTGlua1wiIChjbGljayk9XCJvbkNsaWNrKGl0ZW0pXCI+PGkgKm5nSWY9XCJpdGVtLmljb25cIiB2bnB0LWljb25cclxuICAgICAgICAgICAgICBbdlNyY109XCJpdGVtLmljb25mb250PyAnJzooaXRlbS5pY29uIHwgYXNzZXRVcmwpXCIgW3ZUeXBlXT1cIml0ZW0uaWNvbmZvbnQ/IGl0ZW0uaWNvbjonJ1wiXHJcbiAgICAgICAgICAgICAgW3ZTaXplXT1cIid4cydcIj48L2k+e3tpdGVtLnRpdGxlfX08L2xpPlxyXG4gICAgICAgICAgPGxpICpuZ0lmPVwiaXRlbS5ocmVmXCIgdm5wdC1tZW51LWl0ZW0gW3ZTZWxlY3RlZF09XCJhY3RpdmVSb3V0ZXJ8YWN0aXZlVXJsQ2hlY2s6aXRlbS5yb3V0ZXJMaW5rXCI+PGFcclxuICAgICAgICAgICAgICBocmVmPVwie3tpdGVtLmhyZWZ9fVwiIHRpdGxlPVwie3tpdGVtLnRpdGxlfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSAqbmdJZj1cIml0ZW0uaWNvblwiIHZucHQtaWNvblxyXG4gICAgICAgICAgICAgICAgW3ZTcmNdPVwiaXRlbS5pY29uZm9udD8gJyc6KGl0ZW0uaWNvbiB8IGFzc2V0VXJsKVwiIFt2VHlwZV09XCJpdGVtLmljb25mb250PyBpdGVtLmljb246JydcIlxyXG4gICAgICAgICAgICAgICAgW3ZTaXplXT1cIid4cydcIj48L2k+e3tpdGVtLnRpdGxlfX08L2E+PC9saT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC91bD5cclxuICAgIDwvbGk+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFtZW51Q29uZmlnIHx8IG1lbnVDb25maWcubGVuZ3RoPD0wXCI+XHJcbiAgICAgIDxsaSAqbmdJZj1cIm1lbnUucm91dGVyTGlua1wiIHZucHQtbWVudS1pdGVtIHJvdXRlckxpbms9XCJ7e21lbnUucm91dGVyTGlua319XCIgdGl0bGU9XCJ7e21lbnUudGl0bGV9fVwiXHJcbiAgICAgICAgW3ZTZWxlY3RlZF09XCJhY3RpdmVSb3V0ZXJ8YWN0aXZlVXJsQ2hlY2s6aXRlbS5yb3V0ZXJMaW5rXCIgKGNsaWNrKT1cIm9uQ2xpY2sobWVudSlcIj48aSAqbmdJZj1cIm1lbnUuaWNvblwiIHZucHQtaWNvblxyXG4gICAgICAgICAgW3ZTcmNdPVwibWVudS5pY29uZm9udD8gJyc6KG1lbnUuaWNvbiB8IGFzc2V0VXJsKVwiIFt2VHlwZV09XCJtZW51Lmljb25mb250PyBtZW51Lmljb246JydcIlxyXG4gICAgICAgICAgW3ZTaXplXT1cIid4cydcIj48L2k+e3ttZW51LnRpdGxlfX08L2xpPlxyXG4gICAgICA8bGkgKm5nSWY9XCJtZW51LnZSb3V0ZXJMaW5rXCIgdm5wdC1tZW51LWl0ZW0gdlJvdXRlckxpbms9XCJ7e21lbnUudlJvdXRlckxpbmt9fVwiIHRpdGxlPVwie3ttZW51LnRpdGxlfX1cIlxyXG4gICAgICAgIFt2U2VsZWN0ZWRdPVwiYWN0aXZlUm91dGVyfGFjdGl2ZVVybENoZWNrOml0ZW0ucm91dGVyTGlua1wiIChjbGljayk9XCJvbkNsaWNrKG1lbnUpXCI+PGkgKm5nSWY9XCJtZW51Lmljb25cIiB2bnB0LWljb25cclxuICAgICAgICAgIFt2U3JjXT1cIm1lbnUuaWNvbmZvbnQ/ICcnOihtZW51Lmljb24gfCBhc3NldFVybClcIiBbdlR5cGVdPVwibWVudS5pY29uZm9udD8gbWVudS5pY29uOicnXCJcclxuICAgICAgICAgIFt2U2l6ZV09XCIneHMnXCI+PC9pPnt7bWVudS50aXRsZX19PC9saT5cclxuICAgICAgPGxpICpuZ0lmPVwibWVudS5ocmVmXCIgdm5wdC1tZW51LWl0ZW0gW3ZTZWxlY3RlZF09XCJhY3RpdmVSb3V0ZXJ8YWN0aXZlVXJsQ2hlY2s6aXRlbS5yb3V0ZXJMaW5rXCI+PGFcclxuICAgICAgICAgIGhyZWY9XCJ7e21lbnUuaHJlZn19XCIgdGl0bGU9XCJ7e21lbnUudGl0bGV9fVwiIHRhcmdldD1cIl9ibGFua1wiPjxpICpuZ0lmPVwibWVudS5pY29uXCIgdm5wdC1pY29uXHJcbiAgICAgICAgICAgIFt2U3JjXT1cIm1lbnUuaWNvbmZvbnQ/ICcnOihtZW51Lmljb24gfCBhc3NldFVybClcIiBbdlR5cGVdPVwibWVudS5pY29uZm9udD8gbWVudS5pY29uOicnXCJcclxuICAgICAgICAgICAgW3ZTaXplXT1cIid4cydcIj48L2k+e3ttZW51LnRpdGxlfX08L2E+PC9saT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L3VsPlxyXG4iXX0=
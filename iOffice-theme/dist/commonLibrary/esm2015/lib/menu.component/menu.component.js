import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "@vnpt/oneui-ui/menu";
import * as i4 from "@vnpt/oneui-ui/core/transition-patch";
import * as i5 from "@vnpt/oneui-ui/icon";
import * as i6 from "@vnpt/oneui-core";
import * as i7 from "../menu.pipes";
import * as i8 from "../assert.pipe";
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
    } }, directives: [i2.NgIf, i3.VMenuDirective, i2.NgForOf, i4.ɵVTransitionPatchDirective, i3.VSubMenuComponent, i3.VMenuItemDirective, i1.RouterLink, i5.VIconDirective, i6.VNPTRouterLinkDirective], pipes: [i7.ActiveUrlCheckPipe, i8.AssetUrlPipe], styles: ["[_nghost-%COMP%]     .oneui-menu-inline .oneui-menu-item{margin-bottom:15px;margin-top:6px;padding-right:35px;padding-left:20px!important}[_nghost-%COMP%]     .oneui-menu-inline .oneui-menu-item i{margin-right:12px}[_nghost-%COMP%]     .oneui-menu:not(.oneui-menu-horizontal) .oneui-menu-item-selected{background-color:#e7e8e9}[_nghost-%COMP%]     .oneui-menu-inline>.oneui-menu-submenu>.oneui-menu-submenu-title{font-weight:600;padding-left:10px!important}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvbWVudS5jb21wb25lbnQvbWVudS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvbWVudS5jb21wb25lbnQvbWVudS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7SUNNc0Msd0JBRTdEOzs7O0lBRG5CLGlGQUFpRCwrQ0FBQSxlQUFBOzs7O0lBRnJELDZCQUNvRjtJQUF4Qiw2UUFBdUI7O0lBQUMsMkdBRTdEO0lBQUEsWUFBYztJQUFBLGlCQUFLOzs7O0lBSEMsMERBQWdDO0lBQUMsZ0RBQXNCO0lBQ2hHLHlGQUF5RDtJQUE2QixlQUFlO0lBQWYsbUNBQWU7SUFFaEYsZUFBYztJQUFkLG1DQUFjOzs7SUFFK0Msd0JBRTdEOzs7O0lBRG5CLGlGQUFpRCwrQ0FBQSxlQUFBOzs7O0lBRnJELDhCQUNvRjtJQUF4Qiw2UUFBdUI7O0lBQUMsMkdBRTdEO0lBQUEsWUFBYztJQUFBLGlCQUFLOzs7O0lBSEUsNERBQWtDO0lBQUMsZ0RBQXNCO0lBQ25HLDBGQUF5RDtJQUE2QixlQUFlO0lBQWYsbUNBQWU7SUFFaEYsZUFBYztJQUFkLG1DQUFjOzs7SUFFMkIsd0JBRXZDOzs7O0lBRG5CLGlGQUFpRCwrQ0FBQSxlQUFBOzs7SUFGdkQsOEJBQStGOztJQUFBLDZCQUMvQjtJQUFBLDJHQUV2QztJQUFBLFlBQWM7SUFBQSxpQkFBSTtJQUFBLGlCQUFLOzs7O0lBSFgsMEZBQXlEO0lBQzFGLGVBQW9CO0lBQXBC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SSxTQUFTO2tCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJNZW51TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvbWVudS5tb2RlbCc7XHJcbmltcG9ydCB7IFV0aWxpdGllcyB9IGZyb20gJy4uL3V0aWxpdGllcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1Ym1lbnUtY29tcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21lbnUuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ViTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbWVudUNvbmZpZzogU3ViTWVudU1vZGVsW107XHJcblxyXG4gIEBPdXRwdXQoKSBpdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPFN1Yk1lbnVNb2RlbD4oKTtcclxuXHJcbiAgYWN0aXZlUm91dGVyOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVSb3V0ZXIgPSBkYXRhLnVybC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgb25DbGljayhldmVudDogU3ViTWVudU1vZGVsKSB7XHJcbiAgICB0aGlzLml0ZW1DbGljay5lbWl0KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiPHVsICpuZ0lmPVwibWVudUNvbmZpZyAmJiBtZW51Q29uZmlnLmxlbmd0aD4wXCIgdm5wdC1tZW51IHZNb2RlPVwiaW5saW5lXCIgc3R5bGU9XCJwYWRkaW5nOiAxMHB4IDJweCAyMHB4IDIwcHg7XCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVudSBvZiBtZW51Q29uZmlnOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICA8bGkgKm5nSWY9XCJtZW51LmNoaWxkcyAmJiBtZW51LmNoaWxkcy5sZW5ndGggPiAwXCIgdm5wdC1zdWJtZW51IFt2VGl0bGVdPVwibWVudS50aXRsZVwiXHJcbiAgICAgIFt2SWNvbl09XCJtZW51Lmljb25mb250P21lbnUuaWNvbjonJ1wiIHZPcGVuPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBtZW51LmNoaWxkczsgbGV0IGogPSBpbmRleFwiPlxyXG4gICAgICAgICAgPGxpICpuZ0lmPVwiaXRlbS5yb3V0ZXJMaW5rXCIgdm5wdC1tZW51LWl0ZW0gcm91dGVyTGluaz1cInt7aXRlbS5yb3V0ZXJMaW5rfX1cIiB0aXRsZT1cInt7aXRlbS50aXRsZX19XCJcclxuICAgICAgICAgICAgW3ZTZWxlY3RlZF09XCJhY3RpdmVSb3V0ZXJ8YWN0aXZlVXJsQ2hlY2s6aXRlbS5yb3V0ZXJMaW5rXCIgKGNsaWNrKT1cIm9uQ2xpY2soaXRlbSlcIj48aSAqbmdJZj1cIml0ZW0uaWNvblwiIHZucHQtaWNvblxyXG4gICAgICAgICAgICAgIFt2U3JjXT1cIml0ZW0uaWNvbmZvbnQ/ICcnOihpdGVtLmljb24gfCBhc3NldFVybClcIiBbdlR5cGVdPVwiaXRlbS5pY29uZm9udD8gaXRlbS5pY29uOicnXCJcclxuICAgICAgICAgICAgICBbdlNpemVdPVwiJ3hzJ1wiPjwvaT57e2l0ZW0udGl0bGV9fTwvbGk+XHJcbiAgICAgICAgICA8bGkgKm5nSWY9XCJpdGVtLnZSb3V0ZXJMaW5rXCIgdm5wdC1tZW51LWl0ZW0gdlJvdXRlckxpbms9XCJ7e2l0ZW0udlJvdXRlckxpbmt9fVwiIHRpdGxlPVwie3tpdGVtLnRpdGxlfX1cIlxyXG4gICAgICAgICAgICBbdlNlbGVjdGVkXT1cImFjdGl2ZVJvdXRlcnxhY3RpdmVVcmxDaGVjazppdGVtLnJvdXRlckxpbmtcIiAoY2xpY2spPVwib25DbGljayhpdGVtKVwiPjxpICpuZ0lmPVwiaXRlbS5pY29uXCIgdm5wdC1pY29uXHJcbiAgICAgICAgICAgICAgW3ZTcmNdPVwiaXRlbS5pY29uZm9udD8gJyc6KGl0ZW0uaWNvbiB8IGFzc2V0VXJsKVwiIFt2VHlwZV09XCJpdGVtLmljb25mb250PyBpdGVtLmljb246JydcIlxyXG4gICAgICAgICAgICAgIFt2U2l6ZV09XCIneHMnXCI+PC9pPnt7aXRlbS50aXRsZX19PC9saT5cclxuICAgICAgICAgIDxsaSAqbmdJZj1cIml0ZW0uaHJlZlwiIHZucHQtbWVudS1pdGVtIFt2U2VsZWN0ZWRdPVwiYWN0aXZlUm91dGVyfGFjdGl2ZVVybENoZWNrOml0ZW0ucm91dGVyTGlua1wiPjxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cInt7aXRlbS5ocmVmfX1cIiB0aXRsZT1cInt7aXRlbS50aXRsZX19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgKm5nSWY9XCJpdGVtLmljb25cIiB2bnB0LWljb25cclxuICAgICAgICAgICAgICAgIFt2U3JjXT1cIml0ZW0uaWNvbmZvbnQ/ICcnOihpdGVtLmljb24gfCBhc3NldFVybClcIiBbdlR5cGVdPVwiaXRlbS5pY29uZm9udD8gaXRlbS5pY29uOicnXCJcclxuICAgICAgICAgICAgICAgIFt2U2l6ZV09XCIneHMnXCI+PC9pPnt7aXRlbS50aXRsZX19PC9hPjwvbGk+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2xpPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbWVudUNvbmZpZyB8fCBtZW51Q29uZmlnLmxlbmd0aDw9MFwiPlxyXG4gICAgICA8bGkgKm5nSWY9XCJtZW51LnJvdXRlckxpbmtcIiB2bnB0LW1lbnUtaXRlbSByb3V0ZXJMaW5rPVwie3ttZW51LnJvdXRlckxpbmt9fVwiIHRpdGxlPVwie3ttZW51LnRpdGxlfX1cIlxyXG4gICAgICAgIFt2U2VsZWN0ZWRdPVwiYWN0aXZlUm91dGVyfGFjdGl2ZVVybENoZWNrOml0ZW0ucm91dGVyTGlua1wiIChjbGljayk9XCJvbkNsaWNrKG1lbnUpXCI+PGkgKm5nSWY9XCJtZW51Lmljb25cIiB2bnB0LWljb25cclxuICAgICAgICAgIFt2U3JjXT1cIm1lbnUuaWNvbmZvbnQ/ICcnOihtZW51Lmljb24gfCBhc3NldFVybClcIiBbdlR5cGVdPVwibWVudS5pY29uZm9udD8gbWVudS5pY29uOicnXCJcclxuICAgICAgICAgIFt2U2l6ZV09XCIneHMnXCI+PC9pPnt7bWVudS50aXRsZX19PC9saT5cclxuICAgICAgPGxpICpuZ0lmPVwibWVudS52Um91dGVyTGlua1wiIHZucHQtbWVudS1pdGVtIHZSb3V0ZXJMaW5rPVwie3ttZW51LnZSb3V0ZXJMaW5rfX1cIiB0aXRsZT1cInt7bWVudS50aXRsZX19XCJcclxuICAgICAgICBbdlNlbGVjdGVkXT1cImFjdGl2ZVJvdXRlcnxhY3RpdmVVcmxDaGVjazppdGVtLnJvdXRlckxpbmtcIiAoY2xpY2spPVwib25DbGljayhtZW51KVwiPjxpICpuZ0lmPVwibWVudS5pY29uXCIgdm5wdC1pY29uXHJcbiAgICAgICAgICBbdlNyY109XCJtZW51Lmljb25mb250PyAnJzoobWVudS5pY29uIHwgYXNzZXRVcmwpXCIgW3ZUeXBlXT1cIm1lbnUuaWNvbmZvbnQ/IG1lbnUuaWNvbjonJ1wiXHJcbiAgICAgICAgICBbdlNpemVdPVwiJ3hzJ1wiPjwvaT57e21lbnUudGl0bGV9fTwvbGk+XHJcbiAgICAgIDxsaSAqbmdJZj1cIm1lbnUuaHJlZlwiIHZucHQtbWVudS1pdGVtIFt2U2VsZWN0ZWRdPVwiYWN0aXZlUm91dGVyfGFjdGl2ZVVybENoZWNrOml0ZW0ucm91dGVyTGlua1wiPjxhXHJcbiAgICAgICAgICBocmVmPVwie3ttZW51LmhyZWZ9fVwiIHRpdGxlPVwie3ttZW51LnRpdGxlfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSAqbmdJZj1cIm1lbnUuaWNvblwiIHZucHQtaWNvblxyXG4gICAgICAgICAgICBbdlNyY109XCJtZW51Lmljb25mb250PyAnJzoobWVudS5pY29uIHwgYXNzZXRVcmwpXCIgW3ZUeXBlXT1cIm1lbnUuaWNvbmZvbnQ/IG1lbnUuaWNvbjonJ1wiXHJcbiAgICAgICAgICAgIFt2U2l6ZV09XCIneHMnXCI+PC9pPnt7bWVudS50aXRsZX19PC9hPjwvbGk+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC91bD5cclxuIl19
import { Component, EventEmitter, HostListener, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@vnpt/oneui-ui/affix";
import * as i3 from "@vnpt/oneui-ui/grid";
import * as i4 from "@vnpt/oneui-ui/dropdown";
import * as i5 from "@vnpt/oneui-ui/menu";
import * as i6 from "./toolbar.item.component/toolbar.item.component";
import * as i7 from "@vnpt/oneui-ui/divider";
import * as i8 from "@vnpt/oneui-ui/button";
import * as i9 from "@vnpt/oneui-ui/core/transition-patch";
import * as i10 from "@vnpt/oneui-ui/icon";
function ToolbarComponent_vnpt_affix_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ToolbarComponent_vnpt_affix_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vnpt-affix", 4);
    i0.ɵɵtemplate(1, ToolbarComponent_vnpt_affix_0_ng_container_1_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵproperty("vOffsetTop", ctx_r0.fixAtTop);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function ToolbarComponent_ng_template_1_vnpt_affix_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ToolbarComponent_ng_template_1_vnpt_affix_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vnpt-affix", 7);
    i0.ɵɵtemplate(1, ToolbarComponent_ng_template_1_vnpt_affix_0_ng_container_1_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵproperty("vOffsetBottom", ctx_r8.fixAtBottom);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function ToolbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ToolbarComponent_ng_template_1_vnpt_affix_0_Template, 2, 2, "vnpt-affix", 6);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngIf", ctx_r2.fixAtBottom)("ngIfElse", _r3);
} }
function ToolbarComponent_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ToolbarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vnpt-affix", 4);
    i0.ɵɵtemplate(1, ToolbarComponent_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵproperty("vOffsetTop", 85);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function ToolbarComponent_ng_template_5_ng_container_2_toolbar_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "toolbar-item", 19);
    i0.ɵɵlistener("click", function ToolbarComponent_ng_template_5_ng_container_2_toolbar_item_1_Template_toolbar_item_click_0_listener() { i0.ɵɵrestoreView(_r23); const item_r17 = i0.ɵɵnextContext().$implicit; const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onItemClick(item_r17); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = i0.ɵɵnextContext().$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", item_r17.title)("icon", item_r17.icon)("iconfont", item_r17.iconfont)("type", ctx_r19.isCollapse ? "sm" : "md");
} }
function ToolbarComponent_ng_template_5_ng_container_2_vnpt_divider_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "vnpt-divider", 20);
} }
function ToolbarComponent_ng_template_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ToolbarComponent_ng_template_5_ng_container_2_toolbar_item_1_Template, 1, 4, "toolbar-item", 17);
    i0.ɵɵtemplate(2, ToolbarComponent_ng_template_5_ng_container_2_vnpt_divider_2_Template, 1, 0, "vnpt-divider", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r17.title || item_r17.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r17.title && !item_r17.icon && ctx_r11.screenSize > 992);
} }
function ToolbarComponent_ng_template_5_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵelement(1, "i", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r13 = i0.ɵɵreference(6);
    i0.ɵɵproperty("vDropdownMenu", _r13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("vType", "BulletedListBullet")("vSize", "md");
} }
function ToolbarComponent_ng_template_5_li_8_toolbar_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "toolbar-item", 19);
    i0.ɵɵlistener("click", function ToolbarComponent_ng_template_5_li_8_toolbar_item_1_Template_toolbar_item_click_0_listener() { i0.ɵɵrestoreView(_r30); const item_r25 = i0.ɵɵnextContext().$implicit; const ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28.onItemClick(item_r25); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r25 = i0.ɵɵnextContext().$implicit;
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", item_r25.title)("icon", item_r25.icon)("iconfont", item_r25.iconfont)("type", ctx_r27.isCollapse ? "sm" : "md");
} }
function ToolbarComponent_ng_template_5_li_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵtemplate(1, ToolbarComponent_ng_template_5_li_8_toolbar_item_1_Template, 1, 4, "toolbar-item", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r25.title || item_r25.icon);
} }
function ToolbarComponent_ng_template_5_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function ToolbarComponent_ng_template_5_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.tonggleCollapse(); });
    i0.ɵɵelement(1, "i", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("vSize", "xs")("vColor", "primary");
} }
function ToolbarComponent_ng_template_5_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵlistener("click", function ToolbarComponent_ng_template_5_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.tonggleCollapse(); });
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("vSize", "xs")("vColor", "primary");
} }
const _c0 = function (a1) { return { "toolbar-wrapper": true, "collapse": a1 }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
function ToolbarComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, ToolbarComponent_ng_template_5_ng_container_2_Template, 3, 2, "ng-container", 10);
    i0.ɵɵprojection(3);
    i0.ɵɵtemplate(4, ToolbarComponent_ng_template_5_button_4_Template, 2, 3, "button", 11);
    i0.ɵɵelementStart(5, "vnpt-dropdown-menu", null, 12);
    i0.ɵɵelementStart(7, "ul", 13);
    i0.ɵɵtemplate(8, ToolbarComponent_ng_template_5_li_8_Template, 2, 1, "li", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, ToolbarComponent_ng_template_5_button_9_Template, 2, 2, "button", 15);
    i0.ɵɵtemplate(10, ToolbarComponent_ng_template_5_button_10_Template, 2, 2, "button", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0, ctx_r6.isCollapse))("ngStyle", i0.ɵɵpureFunction1(10, _c1, ctx_r6.bgColor ? ctx_r6.bgColor : ""));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("vSpan", 24);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.config.slice(0, ctx_r6.sliceNum));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r6.config.length > ctx_r6.sliceNum);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r6.config.slice(ctx_r6.sliceNum, ctx_r6.config.length));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.isCollapse);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.isCollapse);
} }
const _c2 = ["*"];
export class ToolbarComponent {
    constructor() {
        this.isCollapse = false;
        this.sliceNum = 15;
        this.itemClick = new EventEmitter();
    }
    onResize(event) {
        this.screenSize = event.target.innerWidth;
        this.calculateScreen();
    }
    ngOnInit() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
    calculateScreen() {
        if (this.screenSize >= 1200)
            this.sliceNum = 15;
        else if (this.screenSize >= 992)
            this.sliceNum = 9;
        else if (this.screenSize >= 768)
            this.sliceNum = 6;
        else if (this.screenSize >= 425)
            this.sliceNum = 3;
        else
            this.sliceNum = 2;
    }
    tonggleCollapse() {
        this.isCollapse = !this.isCollapse;
    }
    onItemClick(item) {
        this.itemClick.emit(item);
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarComponent, selectors: [["app-toolbar"]], hostBindings: function ToolbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function ToolbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { config: "config", fixAtTop: "fixAtTop", fixAtBottom: "fixAtBottom", bgColor: "bgColor", isCollapse: "isCollapse" }, outputs: { itemClick: "itemClick" }, ngContentSelectors: _c2, decls: 7, vars: 2, consts: [[3, "vOffsetTop", 4, "ngIf", "ngIfElse"], ["elseFixAtTop", ""], ["default", ""], ["content", ""], [3, "vOffsetTop"], [4, "ngTemplateOutlet"], [3, "vOffsetBottom", 4, "ngIf", "ngIfElse"], [3, "vOffsetBottom"], ["vnpt-row", "", 3, "ngClass", "ngStyle"], ["vnpt-col", "", 3, "vSpan"], [4, "ngFor", "ngForOf"], ["vnpt-button", "", "vType", "text", "class", "toolbar-more-btn", "vnpt-dropdown", "", 3, "vDropdownMenu", 4, "ngIf"], ["more", "vDropdownMenu"], ["vnpt-menu", "", "vSelectable", ""], ["vnpt-menu-item", "", "style", "text-align: center;", 4, "ngFor", "ngForOf"], ["vnpt-button", "", "vType", "text", "class", "toolbar-btn-collapse", "title", "Thu g\u1ECDn", 3, "click", 4, "ngIf"], ["vnpt-button", "", "vType", "text", "class", "toolbar-btn-collapse", "title", "M\u1EDF r\u1ED9ng", 3, "click", 4, "ngIf"], [3, "title", "icon", "iconfont", "type", "click", 4, "ngIf"], ["vType", "vertical", 4, "ngIf"], [3, "title", "icon", "iconfont", "type", "click"], ["vType", "vertical"], ["vnpt-button", "", "vType", "text", "vnpt-dropdown", "", 1, "toolbar-more-btn", 3, "vDropdownMenu"], ["vnpt-icon", "", 3, "vType", "vSize"], ["vnpt-menu-item", "", 2, "text-align", "center"], ["vnpt-button", "", "vType", "text", "title", "Thu g\u1ECDn", 1, "toolbar-btn-collapse", 3, "click"], ["vnpt-icon", "", "vType", "ChevronUp", 3, "vSize", "vColor"], ["vnpt-button", "", "vType", "text", "title", "M\u1EDF r\u1ED9ng", 1, "toolbar-btn-collapse", 3, "click"], ["vnpt-icon", "", "vType", "ChevronDown", 3, "vSize", "vColor"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, ToolbarComponent_vnpt_affix_0_Template, 2, 2, "vnpt-affix", 0);
        i0.ɵɵtemplate(1, ToolbarComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, ToolbarComponent_ng_template_3_Template, 2, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, ToolbarComponent_ng_template_5_Template, 11, 12, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.fixAtTop)("ngIfElse", _r1);
    } }, directives: [i1.NgIf, i2.VAffixComponent, i1.NgTemplateOutlet, i3.VRowDirective, i1.NgClass, i1.NgStyle, i3.VColDirective, i1.NgForOf, i4.VDropdownMenuComponent, i5.VMenuDirective, i6.ToolbarItemComponent, i7.VDividerComponent, i8.VButtonComponent, i9.ɵVTransitionPatchDirective, i4.VDropdownButtonDirective, i4.VDropDownDirective, i10.VIconDirective, i5.VMenuItemDirective], styles: [".toolbar-wrapper[_ngcontent-%COMP%]{background-color:#f5f5f5;z-index:99;padding:0 30px;height:66px;position:relative}.toolbar-wrapper.collapse[_ngcontent-%COMP%]{height:50px}[_nghost-%COMP%]     .oneui-divider-vertical{height:32px;margin-left:16px;margin-right:16px}.toolbar-btn-collapse[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:2px}[_nghost-%COMP%]     .toolbar-wrapper.collapse .oneui-divider-vertical{height:24px;margin-top:3px;margin-left:8px;margin-right:8px}.toolbar-more-btn[_ngcontent-%COMP%]{text-align:center;height:100%;width:40px;vertical-align:middle;padding-left:18px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.css'],
            }]
    }], null, { config: [{
            type: Input
        }], fixAtTop: [{
            type: Input
        }], fixAtBottom: [{
            type: Input
        }], bgColor: [{
            type: Input
        }], isCollapse: [{
            type: Input
        }], itemClick: [{
            type: Output
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvdG9vbGJhci5jb21wb25lbnQvdG9vbGJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvdG9vbGJhci5jb21wb25lbnQvdG9vbGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ05yQix3QkFBeUQ7OztJQUQzRCxxQ0FDRTtJQUFBLGdHQUF5RDtJQUMzRCxpQkFBYTs7OztJQUZtQyw0Q0FBdUI7SUFDdEQsZUFBeUI7SUFBekIsc0NBQXlCOzs7SUFJdEMsd0JBQXlEOzs7SUFEM0QscUNBQ0U7SUFBQSw4R0FBeUQ7SUFDM0QsaUJBQWE7Ozs7SUFGaUMsa0RBQTZCO0lBQzFELGVBQXlCO0lBQXpCLHNDQUF5Qjs7O0lBRDFDLDZGQUVhOzs7O0lBRkEseUNBQW1CLGlCQUFBOzs7SUFPOUIsd0JBQXlEOzs7SUFEM0QscUNBQ0U7SUFBQSxpR0FBeUQ7SUFDM0QsaUJBQWE7Ozs7SUFGRCwrQkFBaUI7SUFDWixlQUF5QjtJQUF6QixzQ0FBeUI7Ozs7SUFRcEMsd0NBQTJLO0lBQTVCLDRSQUEyQjtJQUFDLGlCQUFlOzs7O0lBQTVJLHNDQUFvQix1QkFBQSwrQkFBQSwwQ0FBQTs7O0lBQ2xFLG1DQUFrRzs7O0lBRnBHLDZCQUNFO0lBQUEsaUhBQTBMO0lBQzFMLGlIQUFrRztJQUNwRywwQkFBZTs7OztJQUZFLGVBQTZCO0lBQTdCLHNEQUE2QjtJQUM3QixlQUFpRDtJQUFqRCxvRkFBaUQ7OztJQUdsRSxrQ0FBZ0k7SUFBQSx3QkFBK0Q7SUFBQSxp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a0JBQWQsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUtJLFNBQVM7a0JBQWxCLE1BQU07WUFHUCxRQUFRO2tCQURQLFlBQVk7bUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJNZW51TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvbWVudS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjb25maWc6IFN1Yk1lbnVNb2RlbFtdO1xyXG4gIEBJbnB1dCgpIGZpeEF0VG9wOiBudW1iZXI7XHJcbiAgQElucHV0KCkgZml4QXRCb3R0b206IG51bWJlcjtcclxuICBASW5wdXQoKSBiZ0NvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXNDb2xsYXBzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBzY3JlZW5TaXplOiBudW1iZXI7XHJcbiAgc2xpY2VOdW06IG51bWJlciA9IDE1O1xyXG5cclxuICBAT3V0cHV0KCkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxTdWJNZW51TW9kZWw+KCk7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gIG9uUmVzaXplKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNjcmVlblNpemUgPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuY2FsY3VsYXRlU2NyZWVuKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVTY3JlZW4oKSB7XHJcbiAgICBpZiAodGhpcy5zY3JlZW5TaXplID49IDEyMDApIHRoaXMuc2xpY2VOdW0gPSAxNTtcclxuICAgIGVsc2UgaWYgKHRoaXMuc2NyZWVuU2l6ZSA+PSA5OTIpIHRoaXMuc2xpY2VOdW0gPSA5O1xyXG4gICAgZWxzZSBpZiAodGhpcy5zY3JlZW5TaXplID49IDc2OCkgdGhpcy5zbGljZU51bSA9IDY7XHJcbiAgICBlbHNlIGlmICh0aGlzLnNjcmVlblNpemUgPj0gNDI1KSB0aGlzLnNsaWNlTnVtID0gMztcclxuICAgIGVsc2UgdGhpcy5zbGljZU51bSA9IDI7XHJcbiAgfVxyXG5cclxuICB0b25nZ2xlQ29sbGFwc2UoKSB7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2UgPSAhdGhpcy5pc0NvbGxhcHNlO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtQ2xpY2soaXRlbTogU3ViTWVudU1vZGVsKSB7XHJcbiAgICB0aGlzLml0ZW1DbGljay5lbWl0KGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCI8dm5wdC1hZmZpeCAqbmdJZj1cImZpeEF0VG9wOyBlbHNlIGVsc2VGaXhBdFRvcFwiIFt2T2Zmc2V0VG9wXT1cImZpeEF0VG9wXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuPC92bnB0LWFmZml4PlxyXG48bmctdGVtcGxhdGUgI2Vsc2VGaXhBdFRvcD5cclxuICA8dm5wdC1hZmZpeCAqbmdJZj1cImZpeEF0Qm90dG9tOyBlbHNlIGRlZmF1bHRcIiBbdk9mZnNldEJvdHRvbV09XCJmaXhBdEJvdHRvbVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuICA8L3ZucHQtYWZmaXg+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHQ+XHJcbiAgPHZucHQtYWZmaXggW3ZPZmZzZXRUb3BdPVwiODVcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgPC92bnB0LWFmZml4PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNjb250ZW50PlxyXG4gIDxkaXYgdm5wdC1yb3cgW25nQ2xhc3NdPVwieyd0b29sYmFyLXdyYXBwZXInOnRydWUsJ2NvbGxhcHNlJzppc0NvbGxhcHNlfVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6YmdDb2xvcj9iZ0NvbG9yOicnfVwiPlxyXG4gICAgPGRpdiB2bnB0LWNvbCBbdlNwYW5dPVwiMjRcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb25maWcuc2xpY2UoMCwgc2xpY2VOdW0pOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgPHRvb2xiYXItaXRlbSAqbmdJZj1cIml0ZW0udGl0bGUgfHwgaXRlbS5pY29uXCIgW3RpdGxlXT1cIml0ZW0udGl0bGVcIiBbaWNvbl09XCJpdGVtLmljb25cIiBbaWNvbmZvbnRdPVwiaXRlbS5pY29uZm9udFwiIFt0eXBlXT1cImlzQ29sbGFwc2U/J3NtJzonbWQnXCIgKGNsaWNrKT1cIm9uSXRlbUNsaWNrKGl0ZW0pXCI+PC90b29sYmFyLWl0ZW0+XHJcbiAgICAgICAgPHZucHQtZGl2aWRlciAqbmdJZj1cIiFpdGVtLnRpdGxlICYmICFpdGVtLmljb24gJiYgc2NyZWVuU2l6ZT45OTJcIiB2VHlwZT1cInZlcnRpY2FsXCI+PC92bnB0LWRpdmlkZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDxidXR0b24gKm5nSWY9XCJjb25maWcubGVuZ3RoID4gc2xpY2VOdW1cIiB2bnB0LWJ1dHRvbiB2VHlwZT1cInRleHRcIiBjbGFzcz1cInRvb2xiYXItbW9yZS1idG5cIiB2bnB0LWRyb3Bkb3duIFt2RHJvcGRvd25NZW51XT1cIm1vcmVcIj48aSB2bnB0LWljb24gW3ZUeXBlXT1cIidCdWxsZXRlZExpc3RCdWxsZXQnXCIgW3ZTaXplXT1cIidtZCdcIj48L2k+PC9idXR0b24+XHJcbiAgICAgIDx2bnB0LWRyb3Bkb3duLW1lbnUgICNtb3JlPVwidkRyb3Bkb3duTWVudVwiPlxyXG4gICAgICAgIDx1bCB2bnB0LW1lbnUgdlNlbGVjdGFibGU+XHJcbiAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29uZmlnLnNsaWNlKHNsaWNlTnVtLCBjb25maWcubGVuZ3RoKTsgbGV0IGkgPSBpbmRleFwiIHZucHQtbWVudS1pdGVtIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxyXG4gICAgICAgICAgICA8dG9vbGJhci1pdGVtICpuZ0lmPVwiaXRlbS50aXRsZSB8fCBpdGVtLmljb25cIiBbdGl0bGVdPVwiaXRlbS50aXRsZVwiIFtpY29uXT1cIml0ZW0uaWNvblwiIFtpY29uZm9udF09XCJpdGVtLmljb25mb250XCIgW3R5cGVdPVwiaXNDb2xsYXBzZT8nc20nOidtZCdcIiAoY2xpY2spPVwib25JdGVtQ2xpY2soaXRlbSlcIj48L3Rvb2xiYXItaXRlbT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC92bnB0LWRyb3Bkb3duLW1lbnU+XHJcblxyXG4gICAgICA8YnV0dG9uICpuZ0lmPVwiIWlzQ29sbGFwc2VcIiB2bnB0LWJ1dHRvbiB2VHlwZT1cInRleHRcIiBjbGFzcz1cInRvb2xiYXItYnRuLWNvbGxhcHNlXCIgdGl0bGU9XCJUaHUgZ+G7jW5cIiAoY2xpY2spPVwidG9uZ2dsZUNvbGxhcHNlKCk7XCI+PGkgdm5wdC1pY29uIHZUeXBlPVwiQ2hldnJvblVwXCIgW3ZTaXplXT1cIid4cydcIiBbdkNvbG9yXT1cIidwcmltYXJ5J1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzQ29sbGFwc2VcIiB2bnB0LWJ1dHRvbiB2VHlwZT1cInRleHRcIiBjbGFzcz1cInRvb2xiYXItYnRuLWNvbGxhcHNlXCIgdGl0bGU9XCJN4bufIHLhu5luZ1wiIChjbGljayk9XCJ0b25nZ2xlQ29sbGFwc2UoKTtcIj48aSB2bnB0LWljb24gdlR5cGU9XCJDaGV2cm9uRG93blwiIFt2U2l6ZV09XCIneHMnXCIgW3ZDb2xvcl09XCIncHJpbWFyeSdcIj48L2k+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19
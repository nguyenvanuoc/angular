import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@vnpt/oneui-ui/affix";
import * as i3 from "@vnpt/oneui-ui/grid";
function ContexualActionBarComponent_vnpt_affix_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ContexualActionBarComponent_vnpt_affix_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function ContexualActionBarComponent_vnpt_affix_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vnpt-affix", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵtemplate(3, ContexualActionBarComponent_vnpt_affix_0_ng_container_3_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵtemplate(5, ContexualActionBarComponent_vnpt_affix_0_ng_container_5_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("vOffsetTop", ctx_r0.fixAtTop);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c0, ctx_r0.bgColor ? ctx_r0.bgColor : ""));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.left);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.right);
} }
function ContexualActionBarComponent_ng_template_1_vnpt_affix_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ContexualActionBarComponent_ng_template_1_vnpt_affix_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ContexualActionBarComponent_ng_template_1_vnpt_affix_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vnpt-affix", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵtemplate(3, ContexualActionBarComponent_ng_template_1_vnpt_affix_0_ng_container_3_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵtemplate(5, ContexualActionBarComponent_ng_template_1_vnpt_affix_0_ng_container_5_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("vOffsetBottom", ctx_r7.fixAtBottom);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.left);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.right);
} }
function ContexualActionBarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ContexualActionBarComponent_ng_template_1_vnpt_affix_0_Template, 6, 3, "vnpt-affix", 8);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngIf", ctx_r2.fixAtBottom)("ngIfElse", _r3);
} }
function ContexualActionBarComponent_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ContexualActionBarComponent_ng_template_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ContexualActionBarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vnpt-affix", 3);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵtemplate(3, ContexualActionBarComponent_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵtemplate(5, ContexualActionBarComponent_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("vOffsetTop", 85);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r4.left);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r4.right);
} }
export class ContexualActionBarComponent {
    constructor() { }
    ngOnInit() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
    close() { }
}
ContexualActionBarComponent.ɵfac = function ContexualActionBarComponent_Factory(t) { return new (t || ContexualActionBarComponent)(); };
ContexualActionBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ContexualActionBarComponent, selectors: [["contexual-actionbar"]], inputs: { left: "left", right: "right", fixAtTop: "fixAtTop", fixAtBottom: "fixAtBottom", bgColor: "bgColor" }, decls: 5, vars: 2, consts: [[3, "vOffsetTop", 4, "ngIf", "ngIfElse"], ["elseFixAtTop", ""], ["default", ""], [3, "vOffsetTop"], ["vnpt-row", "", 1, "context-actionbar-wrapper", 3, "ngStyle"], ["vnpt-col", "", "vXs", "14", "vSm", "14", "vMd", "14", "vLg", "18", "vXl", "18", 1, "actionbar-left"], [4, "ngTemplateOutlet"], ["vnpt-col", "", "vXs", "10", "vSm", "10", "vMd", "10", "vLg", "6", "vXl", "6", 1, "actionbar-right", 2, "text-align", "right"], [3, "vOffsetBottom", 4, "ngIf", "ngIfElse"], [3, "vOffsetBottom"], ["vnpt-row", "", 1, "context-actionbar-wrapper"]], template: function ContexualActionBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ContexualActionBarComponent_vnpt_affix_0_Template, 6, 6, "vnpt-affix", 0);
        i0.ɵɵtemplate(1, ContexualActionBarComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, ContexualActionBarComponent_ng_template_3_Template, 6, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.fixAtTop)("ngIfElse", _r1);
    } }, directives: [i1.NgIf, i2.VAffixComponent, i3.VRowDirective, i1.NgStyle, i3.VColDirective, i1.NgTemplateOutlet], styles: [".context-actionbar-wrapper[_ngcontent-%COMP%]{background-color:#fafafa;z-index:99;padding:4px 30px}.oneui-dropdown-trigger[_ngcontent-%COMP%] > .ms-Icon[_ngcontent-%COMP%]{font-size:16px}@media only screen and (max-width:576px){.context-actionbar-wrapper[_ngcontent-%COMP%]{padding:4px 10px}}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ContexualActionBarComponent, [{
        type: Component,
        args: [{
                selector: 'contexual-actionbar',
                templateUrl: './action.bar.component.html',
                styleUrls: ['./action.bar.component.css'],
            }]
    }], function () { return []; }, { left: [{
            type: Input
        }], right: [{
            type: Input
        }], fixAtTop: [{
            type: Input
        }], fixAtBottom: [{
            type: Input
        }], bgColor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvY29udGV4LmFjdGlvbi5iYXIvYWN0aW9uLmJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvY29udGV4LmFjdGlvbi5iYXIvYWN0aW9uLmJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0doRSx3QkFBc0Q7OztJQUd0RCx3QkFBdUQ7Ozs7SUFON0QscUNBQ0U7SUFBQSw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsMkdBQXNEO0lBQ3hELGlCQUFNO0lBQ04sOEJBQ0U7SUFBQSwyR0FBdUQ7SUFDekQsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFhOzs7SUFUbUMsNENBQXVCO0lBQ3JCLGVBQW1EO0lBQW5ELDBGQUFtRDtJQUVoRixlQUFzQjtJQUF0Qiw4Q0FBc0I7SUFHdEIsZUFBdUI7SUFBdkIsK0NBQXVCOzs7SUFRcEMsd0JBQXNEOzs7SUFHdEQsd0JBQXVEOzs7SUFON0QscUNBQ0U7SUFBQSwrQkFDRTtJQUFBLDhCQUNFO0lBQUEseUhBQXNEO0lBQ3hELGlCQUFNO0lBQ04sOEJBQ0U7SUFBQSx5SEFBdUQ7SUFDekQsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFhOzs7SUFUaUMsa0RBQTZCO0lBR3RELGVBQXNCO0lBQXRCLDhDQUFzQjtJQUd0QixlQUF1QjtJQUF2QiwrQ0FBdUI7OztJQU41Qyx3R0FTYTs7OztJQVRBLHlDQUFtQixpQkFBQTs7O0lBZ0IxQix3QkFBc0Q7OztJQUd0RCx3QkFBdUQ7OztJQU43RCxxQ0FDRTtJQUFBLCtCQUNFO0lBQUEsOEJBQ0U7SUFBQSw0R0FBc0Q7SUFDeEQsaUJBQU07SUFDTiw4QkFDRTtJQUFBLDRHQUF1RDtJQUN6RCxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQWE7OztJQVRELCtCQUFpQjtJQUdSLGVBQXNCO0lBQXRCLDhDQUFzQjtJQUd0QixlQUF1QjtJQUF2QiwrQ0FBdUI7O0FEdkI5QyxNQUFNLE9BQU8sMkJBQTJCO0lBTXRDLGdCQUFlLENBQUM7SUFFaEIsUUFBUTtRQUNOLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELEtBQUssS0FBVSxDQUFDOztzR0FkTCwyQkFBMkI7Z0VBQTNCLDJCQUEyQjtRQ1B4QywwRkFTYTtRQUNiLDZIQVdjO1FBRWQsNkhBV2M7OztRQWxDRCxtQ0FBZ0IsaUJBQUE7O2tERE9oQiwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDO3NDQUVVLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb250ZXh1YWwtYWN0aW9uYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9uLmJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9uLmJhci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZXh1YWxBY3Rpb25CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGxlZnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHJpZ2h0OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBmaXhBdFRvcDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGZpeEF0Qm90dG9tOiBudW1iZXI7XHJcbiAgQElucHV0KCkgYmdDb2xvcjogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XHJcbiAgICB9LCAzMDApO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7fVxyXG59XHJcbiIsIjx2bnB0LWFmZml4ICpuZ0lmPVwiZml4QXRUb3A7IGVsc2UgZWxzZUZpeEF0VG9wXCIgW3ZPZmZzZXRUb3BdPVwiZml4QXRUb3BcIj5cclxuICA8ZGl2IHZucHQtcm93IGNsYXNzPVwiY29udGV4dC1hY3Rpb25iYXItd3JhcHBlclwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6YmdDb2xvcj9iZ0NvbG9yOicnfVwiPlxyXG4gICAgPGRpdiB2bnB0LWNvbCB2WHM9XCIxNFwiIHZTbT1cIjE0XCIgdk1kPVwiMTRcIiB2TGc9XCIxOFwiIHZYbD1cIjE4XCIgY2xhc3M9XCJhY3Rpb25iYXItbGVmdFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGVmdFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHZucHQtY29sIHZYcz1cIjEwXCIgdlNtPVwiMTBcIiB2TWQ9XCIxMFwiIHZMZz1cIjZcIiB2WGw9XCI2XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiIGNsYXNzPVwiYWN0aW9uYmFyLXJpZ2h0XCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJyaWdodFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdm5wdC1hZmZpeD5cclxuPG5nLXRlbXBsYXRlICNlbHNlRml4QXRUb3A+XHJcbiAgPHZucHQtYWZmaXggKm5nSWY9XCJmaXhBdEJvdHRvbTsgZWxzZSBkZWZhdWx0XCIgW3ZPZmZzZXRCb3R0b21dPVwiZml4QXRCb3R0b21cIj5cclxuICAgIDxkaXYgdm5wdC1yb3cgY2xhc3M9XCJjb250ZXh0LWFjdGlvbmJhci13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgdm5wdC1jb2wgdlhzPVwiMTRcIiB2U209XCIxNFwiIHZNZD1cIjE0XCIgdkxnPVwiMThcIiB2WGw9XCIxOFwiIGNsYXNzPVwiYWN0aW9uYmFyLWxlZnRcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGVmdFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2bnB0LWNvbCB2WHM9XCIxMFwiIHZTbT1cIjEwXCIgdk1kPVwiMTBcIiB2TGc9XCI2XCIgdlhsPVwiNlwiIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHRcIiBjbGFzcz1cImFjdGlvbmJhci1yaWdodFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJyaWdodFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvdm5wdC1hZmZpeD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdD5cclxuICA8dm5wdC1hZmZpeCBbdk9mZnNldFRvcF09XCI4NVwiPlxyXG4gICAgPGRpdiB2bnB0LXJvdyBjbGFzcz1cImNvbnRleHQtYWN0aW9uYmFyLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiB2bnB0LWNvbCB2WHM9XCIxNFwiIHZTbT1cIjE0XCIgdk1kPVwiMTRcIiB2TGc9XCIxOFwiIHZYbD1cIjE4XCIgY2xhc3M9XCJhY3Rpb25iYXItbGVmdFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsZWZ0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHZucHQtY29sIHZYcz1cIjEwXCIgdlNtPVwiMTBcIiB2TWQ9XCIxMFwiIHZMZz1cIjZcIiB2WGw9XCI2XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiIGNsYXNzPVwiYWN0aW9uYmFyLXJpZ2h0XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInJpZ2h0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC92bnB0LWFmZml4PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=
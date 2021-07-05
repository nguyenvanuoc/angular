import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@vnpt/oneui-ui/card";
import * as i2 from "@angular/common";
import * as i3 from "@vnpt/oneui-ui/typography";
function MainContentComponent_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
const _c0 = ["*"];
export class MainContentComponent {
    ngOnInit() { }
}
MainContentComponent.ɵfac = function MainContentComponent_Factory(t) { return new (t || MainContentComponent)(); };
MainContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MainContentComponent, selectors: [["vnpt-main-content"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 4, vars: 2, consts: [[1, "layout-wr"], [3, "vBordered"], ["vnpt-typography", "", "class", "mb-4 mb-md-6", 4, "ngIf"], ["vnpt-typography", "", 1, "mb-4", "mb-md-6"]], template: function MainContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "vnpt-card", 1);
        i0.ɵɵtemplate(2, MainContentComponent_h4_2_Template, 2, 1, "h4", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("vBordered", false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title);
    } }, directives: [i1.VCardComponent, i2.NgIf, i3.VTypographyComponent], styles: [".close-btn[_ngcontent-%COMP%]{border:none;background:#f5f5f5;position:fixed;right:60px;padding:0 10px;margin-top:0;cursor:pointer}.close-btn[_ngcontent-%COMP%]:hover{background-color:#fafafa}.page-title[_ngcontent-%COMP%]{margin-bottom:2.2rem}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MainContentComponent, [{
        type: Component,
        args: [{
                selector: 'vnpt-main-content',
                templateUrl: './main.content.component.html',
                styleUrls: ['./main.content.component.css'],
            }]
    }], null, { title: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbkxpYnJhcnkvc3JjL2xpYi9tYWluLmNvbnRlbnQuY29tcG9uZW50L21haW4uY29udGVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvbWFpbi5jb250ZW50LmNvbXBvbmVudC9tYWluLmNvbnRlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0VyRCw2QkFBdUQ7SUFBQSxZQUFXO0lBQUEsaUJBQUs7OztJQUFoQixlQUFXO0lBQVgsa0NBQVc7OztBREt0RSxNQUFNLE9BQU8sb0JBQW9CO0lBRy9CLFFBQVEsS0FBSSxDQUFDOzt3RkFIRixvQkFBb0I7eURBQXBCLG9CQUFvQjs7UUNQakMsOEJBQ0U7UUFBQSxvQ0FDRTtRQUFBLG1FQUF1RTtRQUN2RSxrQkFBMEI7UUFDNUIsaUJBQVk7UUFDZCxpQkFBTTs7UUFKTyxlQUFtQjtRQUFuQixpQ0FBbUI7UUFDdkIsZUFBVztRQUFYLGdDQUFXOztrRERLUCxvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDO2dCQUVVLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2bnB0LW1haW4tY29udGVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29udGVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWFpbi5jb250ZW50LmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImxheW91dC13clwiPlxyXG4gIDx2bnB0LWNhcmQgW3ZCb3JkZXJlZF09XCJmYWxzZVwiPlxyXG4gICAgPGg0ICpuZ0lmPVwidGl0bGVcIiB2bnB0LXR5cG9ncmFwaHkgY2xhc3M9XCJtYi00IG1iLW1kLTZcIj57eyB0aXRsZSB9fTwvaDQ+XHJcbiAgICA8bmctY29udGVudD4gPC9uZy1jb250ZW50PlxyXG4gIDwvdm5wdC1jYXJkPlxyXG48L2Rpdj5cclxuIl19
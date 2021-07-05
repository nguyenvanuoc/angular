import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@vnpt/oneui-ui/typography";
function DrawerContentComponent_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
const _c0 = ["*"];
export class DrawerContentComponent {
    ngOnInit() { }
}
DrawerContentComponent.ɵfac = function DrawerContentComponent_Factory(t) { return new (t || DrawerContentComponent)(); };
DrawerContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DrawerContentComponent, selectors: [["vnpt-main-drawer"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "drawer-content-wrapper"], ["vnpt-typography", "", "class", "page-title", 4, "ngIf"], ["vnpt-typography", "", 1, "page-title"]], template: function DrawerContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DrawerContentComponent_h4_1_Template, 2, 1, "h4", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title);
    } }, directives: [i1.NgIf, i2.VTypographyComponent], styles: [".drawer-content-wrapper[_ngcontent-%COMP%]{padding:30px 25px 0}.drawer-content-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{margin-bottom:25px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DrawerContentComponent, [{
        type: Component,
        args: [{
                selector: 'vnpt-main-drawer',
                templateUrl: './drawer.content.component.html',
                styleUrls: ['./drawer.content.component.css'],
            }]
    }], null, { title: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tbW9uTGlicmFyeS9zcmMvbGliL2RyYXdlci5jb250ZW50LmNvbXBvbmVudC9kcmF3ZXIuY29udGVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvZHJhd2VyLmNvbnRlbnQuY29tcG9uZW50L2RyYXdlci5jb250ZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0N2RCw2QkFBcUQ7SUFBQSxZQUFXO0lBQUEsaUJBQUs7OztJQUFoQixlQUFXO0lBQVgsa0NBQVc7OztBRE1sRSxNQUFNLE9BQU8sc0JBQXNCO0lBR2pDLFFBQVEsS0FBSSxDQUFDOzs0RkFIRixzQkFBc0I7MkRBQXRCLHNCQUFzQjs7UUNQbkMsOEJBQ0U7UUFBQSxxRUFBcUU7UUFDckUsa0JBQTBCO1FBQzVCLGlCQUFNOztRQUZDLGVBQVc7UUFBWCxnQ0FBVzs7a0RETUwsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5QztnQkFFVSxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndm5wdC1tYWluLWRyYXdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYXdlci5jb250ZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kcmF3ZXIuY29udGVudC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmF3ZXJDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImRyYXdlci1jb250ZW50LXdyYXBwZXJcIj5cclxuICA8aDQgKm5nSWY9XCJ0aXRsZVwiIHZucHQtdHlwb2dyYXBoeSBjbGFzcz1cInBhZ2UtdGl0bGVcIj57eyB0aXRsZSB9fTwvaDQ+XHJcbiAgPG5nLWNvbnRlbnQ+IDwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==
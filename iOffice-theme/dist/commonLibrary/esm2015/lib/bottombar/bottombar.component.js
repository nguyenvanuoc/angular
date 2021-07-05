import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@vnpt/oneui-ui/affix";
import * as i2 from "@vnpt/oneui-ui/grid";
import * as i3 from "@angular/common";
const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = ["*"];
export class BottombarComponent {
    constructor() {
        this.position = 0;
        this.bgColor = '#fff';
    }
    ngOnInit() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
}
BottombarComponent.ɵfac = function BottombarComponent_Factory(t) { return new (t || BottombarComponent)(); };
BottombarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BottombarComponent, selectors: [["bottom-bar"]], inputs: { position: "position", bgColor: "bgColor" }, ngContentSelectors: _c1, decls: 4, vars: 4, consts: [[3, "vOffsetBottom"], ["vnpt-row", "", 1, "fixed-bottom-bar", 3, "ngStyle"], ["vnpt-col", "", "vSpan", "24"]], template: function BottombarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "vnpt-affix", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("vOffsetBottom", ctx.position);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, ctx.bgColor));
    } }, directives: [i1.VAffixComponent, i2.VRowDirective, i3.NgStyle, i2.VColDirective], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BottombarComponent, [{
        type: Component,
        args: [{
                selector: 'bottom-bar',
                templateUrl: './bottombar.component.html',
                styleUrls: ['./bottombar.component.css'],
            }]
    }], function () { return []; }, { position: [{
            type: Input
        }], bgColor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbkxpYnJhcnkvc3JjL2xpYi9ib3R0b21iYXIvYm90dG9tYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbkxpYnJhcnkvc3JjL2xpYi9ib3R0b21iYXIvYm90dG9tYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBT3pELE1BQU0sT0FBTyxrQkFBa0I7SUFJN0I7UUFIUyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFlBQU8sR0FBVyxNQUFNLENBQUM7SUFFbkIsQ0FBQztJQUVoQixRQUFRO1FBQ04sVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDOztvRkFWVSxrQkFBa0I7dURBQWxCLGtCQUFrQjs7UUNQL0IscUNBQ0U7UUFBQSw4QkFDRTtRQUFBLDhCQUNFO1FBQUEsa0JBQXlCO1FBQzNCLGlCQUFNO1FBQ1IsaUJBQU07UUFFUixpQkFBYTs7UUFQRCw0Q0FBMEI7UUFDRyxlQUF3QztRQUF4QyxpRUFBd0M7O2tERE1wRSxrQkFBa0I7Y0FMOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6QztzQ0FFVSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JvdHRvbS1iYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ib3R0b21iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JvdHRvbWJhci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb3R0b21iYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZyA9ICcjZmZmJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG59XHJcbiIsIjx2bnB0LWFmZml4IFt2T2Zmc2V0Qm90dG9tXT1cInBvc2l0aW9uXCI+XHJcbiAgPGRpdiB2bnB0LXJvdyBjbGFzcz1cImZpeGVkLWJvdHRvbS1iYXJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOmJnQ29sb3J9XCI+XHJcbiAgICA8ZGl2IHZucHQtY29sIHZTcGFuPVwiMjRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG48L3ZucHQtYWZmaXg+XHJcbiJdfQ==
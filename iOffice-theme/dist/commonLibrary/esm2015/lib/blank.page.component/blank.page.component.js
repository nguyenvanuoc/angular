import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@vnpt/oneui-ui/button";
import * as i3 from "@vnpt/oneui-ui/core/transition-patch";
function BlankPageComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function BlankPageComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onCloseClick(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 2);
    i0.ɵɵelementStart(2, "g");
    i0.ɵɵelementStart(3, "g");
    i0.ɵɵelement(4, "path", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class BlankPageComponent {
    constructor() {
        this.close = true;
        this.title = 'emptypage';
    }
    ngOnInit() { }
    onCloseClick() {
        window.history.back();
    }
}
BlankPageComponent.ɵfac = function BlankPageComponent_Factory(t) { return new (t || BlankPageComponent)(); };
BlankPageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BlankPageComponent, selectors: [["vnpt-page"]], inputs: { close: "close" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["vnpt-button", "", "vType", "text", "class", "close-btn", 3, "click", 4, "ngIf"], ["vnpt-button", "", "vType", "text", 1, "close-btn", 3, "click"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 496.096 496.096", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 496.096 496.096", "width", "12px"], ["d", "M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686\n\t\t\tL13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342\n\t\t\tc-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31\n\t\t\tl234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"]], template: function BlankPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, BlankPageComponent_button_0_Template, 5, 0, "button", 0);
        i0.ɵɵprojection(1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.close);
    } }, directives: [i1.NgIf, i2.VButtonComponent, i3.ɵVTransitionPatchDirective], styles: [".close-btn[_ngcontent-%COMP%]{border:none;background:#f5f5f5;position:fixed;right:60px;padding:0 10px;cursor:pointer;z-index:98;top:100px}.close-btn[_ngcontent-%COMP%]:hover{background-color:#fafafa}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BlankPageComponent, [{
        type: Component,
        args: [{
                selector: 'vnpt-page',
                templateUrl: './blank.page.component.html',
                styleUrls: ['./blank.page.component.css'],
            }]
    }], null, { close: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhbmsucGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvYmxhbmsucGFnZS5jb21wb25lbnQvYmxhbmsucGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvYmxhbmsucGFnZS5jb21wb25lbnQvYmxhbmsucGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ0F6RCxpQ0FDRTtJQUQ2QywyTEFBd0I7SUFDckUsbUJBR0U7SUFIRiw4QkFHRTtJQUFBLHlCQUNFO0lBQUEseUJBQ0U7SUFBQSwwQkFJRjtJQUFBLGlCQUFJO0lBQ04saUJBQUk7SUFDTixpQkFBTTtJQUNSLGlCQUFTOzs7QUROVCxNQUFNLE9BQU8sa0JBQWtCO0lBTC9CO1FBTVcsVUFBSyxHQUFZLElBQUksQ0FBQztRQUMvQixVQUFLLEdBQUcsV0FBVyxDQUFDO0tBS3JCO0lBSkMsUUFBUSxLQUFJLENBQUM7SUFDYixZQUFZO1FBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOztvRkFOVSxrQkFBa0I7dURBQWxCLGtCQUFrQjs7UUNQL0IseUVBYVM7UUFFVCxrQkFBMEI7O1FBZmpCLGdDQUFXOztrRERPUCxrQkFBa0I7Y0FMOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUMxQztnQkFFVSxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndm5wdC1wYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYmxhbmsucGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYmxhbmsucGFnZS5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbGFua1BhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNsb3NlOiBib29sZWFuID0gdHJ1ZTtcclxuICB0aXRsZSA9ICdlbXB0eXBhZ2UnO1xyXG4gIG5nT25Jbml0KCkge31cclxuICBvbkNsb3NlQ2xpY2soKSB7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxidXR0b24gKm5nSWY9XCJjbG9zZVwiIHZucHQtYnV0dG9uIHZUeXBlPVwidGV4dFwiIChjbGljayk9XCJvbkNsb3NlQ2xpY2soKVwiIGNsYXNzPVwiY2xvc2UtYnRuXCI+XHJcbiAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiXHJcbiAgICB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA0OTYuMDk2IDQ5Ni4wOTZcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOiBuZXcgMCAwIDQ5Ni4wOTYgNDk2LjA5Njsgd2lkdGg6IDEycHhcIlxyXG4gICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cclxuICAgIDxnPlxyXG4gICAgICA8Zz5cclxuICAgICAgICA8cGF0aCBkPVwiTTI1OS40MSwyNDcuOTk4TDQ5My43NTQsMTMuNjU0YzMuMTIzLTMuMTI0LDMuMTIzLTguMTg4LDAtMTEuMzEyYy0zLjEyNC0zLjEyMy04LjE4OC0zLjEyMy0xMS4zMTIsMEwyNDguMDk4LDIzNi42ODZcclxuXHRcdFx0TDEzLjc1NCwyLjM0MkMxMC41NzYtMC43MjcsNS41MTItMC42MzksMi40NDIsMi41MzljLTIuOTk0LDMuMS0yLjk5NCw4LjAxNSwwLDExLjExNWwyMzQuMzQ0LDIzNC4zNDRMMi40NDIsNDgyLjM0MlxyXG5cdFx0XHRjLTMuMTc4LDMuMDctMy4yNjYsOC4xMzQtMC4xOTYsMTEuMzEyczguMTM0LDMuMjY2LDExLjMxMiwwLjE5NmMwLjA2Ny0wLjA2NCwwLjEzMi0wLjEzLDAuMTk2LTAuMTk2TDI0OC4wOTgsMjU5LjMxXHJcblx0XHRcdGwyMzQuMzQ0LDIzNC4zNDRjMy4xNzgsMy4wNyw4LjI0MiwyLjk4MiwxMS4zMTItMC4xOTZjMi45OTUtMy4xLDIuOTk1LTguMDE2LDAtMTEuMTE2TDI1OS40MSwyNDcuOTk4elwiIC8+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvZz5cclxuICA8L3N2Zz5cclxuPC9idXR0b24+XHJcblxyXG48bmctY29udGVudD4gPC9uZy1jb250ZW50PlxyXG4iXX0=
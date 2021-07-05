import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@vnpt/oneui-ui/button";
import * as i3 from "@vnpt/oneui-ui/core/transition-patch";
import * as i4 from "@vnpt/oneui-ui/icon";
import * as i5 from "../../assert.pipe";
function ToolbarItemComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵpipe(2, "assetUrl");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r0.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("vSrc", ctx_r0.iconfont ? "" : i0.ɵɵpipeBind1(2, 5, ctx_r0.icon))("vType", ctx_r0.iconfont ? ctx_r0.icon : "")("vSize", "lg");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
function ToolbarItemComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵelement(1, "i", 4);
    i0.ɵɵpipe(2, "assetUrl");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r1.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("vSrc", ctx_r1.iconfont ? "" : i0.ɵɵpipeBind1(2, 4, ctx_r1.icon))("vType", ctx_r1.iconfont ? ctx_r1.icon : "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.title);
} }
function ToolbarItemComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵpipe(2, "assetUrl");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r2.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("vSrc", ctx_r2.iconfont ? "" : i0.ɵɵpipeBind1(2, 5, ctx_r2.icon))("vType", ctx_r2.iconfont ? ctx_r2.icon : "")("vSize", "xs");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.title);
} }
export class ToolbarItemComponent {
    constructor() {
        this.type = 'md';
    }
    ngOnInit() { }
}
ToolbarItemComponent.ɵfac = function ToolbarItemComponent_Factory(t) { return new (t || ToolbarItemComponent)(); };
ToolbarItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarItemComponent, selectors: [["toolbar-item"]], inputs: { type: "type", title: "title", icon: "icon", iconfont: "iconfont" }, decls: 3, vars: 3, consts: [["vnpt-button", "", "vType", "text", "class", "toolbar-btn", 3, "title", 4, "ngIf"], ["vnpt-button", "", "vType", "text", "class", "toolbar-btn-sm", 3, "title", 4, "ngIf"], ["vnpt-button", "", "vType", "text", 1, "toolbar-btn", 3, "title"], ["vnpt-icon", "", 3, "vSrc", "vType", "vSize"], ["vnpt-icon", "", 3, "vSrc", "vType"], ["vnpt-button", "", "vType", "text", 1, "toolbar-btn-sm", 3, "title"]], template: function ToolbarItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ToolbarItemComponent_button_0_Template, 5, 7, "button", 0);
        i0.ɵɵtemplate(1, ToolbarItemComponent_button_1_Template, 5, 6, "button", 0);
        i0.ɵɵtemplate(2, ToolbarItemComponent_button_2_Template, 5, 7, "button", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.type === "lg");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type === "md");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type === "sm");
    } }, directives: [i1.NgIf, i2.VButtonComponent, i3.ɵVTransitionPatchDirective, i4.VIconDirective], pipes: [i5.AssetUrlPipe], styles: [".toolbar-btn[_ngcontent-%COMP%]{height:100%;margin:0 4px;max-width:116px;vertical-align:middle}.toolbar-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .toolbar-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;display:block}.toolbar-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0;margin-top:5px;font-size:12px;text-overflow:ellipsis;overflow:hidden}.toolbar-btn-sm[_ngcontent-%COMP%]{height:100%;margin:0 4px;max-width:100px;vertical-align:middle}.toolbar-btn-sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .toolbar-btn-sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;display:block}.toolbar-btn-sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0;margin-top:5px;font-size:11px;text-overflow:ellipsis;overflow:hidden}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarItemComponent, [{
        type: Component,
        args: [{
                selector: 'toolbar-item',
                templateUrl: './toolbar.item.component.html',
                styleUrls: ['./toolbar.item.component.css'],
            }]
    }], null, { type: [{
            type: Input
        }], title: [{
            type: Input
        }], icon: [{
            type: Input
        }], iconfont: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbkxpYnJhcnkvc3JjL2xpYi90b29sYmFyLmNvbXBvbmVudC90b29sYmFyLml0ZW0uY29tcG9uZW50L3Rvb2xiYXIuaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvdG9vbGJhci5jb21wb25lbnQvdG9vbGJhci5pdGVtLmNvbXBvbmVudC90b29sYmFyLml0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDQXpELGlDQUEyRjtJQUFBLHVCQUFvRzs7SUFBQSw0QkFBTTtJQUFBLFlBQVM7SUFBQSxpQkFBTztJQUFBLGlCQUFTOzs7SUFBckosK0NBQWlCO0lBQWMsZUFBd0M7SUFBeEMsK0VBQXdDLDZDQUFBLGVBQUE7SUFBcUQsZUFBUztJQUFULGtDQUFTOzs7SUFDOU0saUNBQTJGO0lBQUEsdUJBQXFGOztJQUFBLDRCQUFNO0lBQUEsWUFBUztJQUFBLGlCQUFPO0lBQUEsaUJBQVM7OztJQUF0SSwrQ0FBaUI7SUFBYyxlQUF3QztJQUF4QywrRUFBd0MsNkNBQUE7SUFBc0MsZUFBUztJQUFULGtDQUFTOzs7SUFDL0wsaUNBQThGO0lBQUEsdUJBQW9HOztJQUFBLDRCQUFNO0lBQUEsWUFBUztJQUFBLGlCQUFPO0lBQUEsaUJBQVM7OztJQUFySiwrQ0FBaUI7SUFBYyxlQUF3QztJQUF4QywrRUFBd0MsNkNBQUEsZUFBQTtJQUFxRCxlQUFTO0lBQVQsa0NBQVM7O0FES2pOLE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFNVyxTQUFJLEdBQVcsSUFBSSxDQUFDO0tBTTlCO0lBREMsUUFBUSxLQUFJLENBQUM7O3dGQU5GLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FDUGpDLDJFQUE4TjtRQUM5TiwyRUFBK007UUFDL00sMkVBQWlPOztRQUZ4Tix3Q0FBaUI7UUFDakIsZUFBaUI7UUFBakIsd0NBQWlCO1FBQ2pCLGVBQWlCO1FBQWpCLHdDQUFpQjs7a0RES2Isb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7Z0JBRVUsSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b29sYmFyLWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYmFyLml0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Rvb2xiYXIuaXRlbS5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFySXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ21kJztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uZm9udDogYm9vbGVhbjtcclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG59XHJcbiIsIjxidXR0b24gKm5nSWY9XCJ0eXBlPT09J2xnJ1wiIHZucHQtYnV0dG9uIHZUeXBlPVwidGV4dFwiIGNsYXNzPVwidG9vbGJhci1idG5cIiB0aXRsZT1cInt7dGl0bGV9fVwiPjxpIHZucHQtaWNvbiBbdlNyY109XCJpY29uZm9udD8gJyc6IChpY29uIHwgYXNzZXRVcmwpXCIgW3ZUeXBlXT1cImljb25mb250P2ljb246JydcIiBbdlNpemVdPVwiJ2xnJ1wiPjwvaT48c3Bhbj57e3RpdGxlfX08L3NwYW4+PC9idXR0b24+XHJcbjxidXR0b24gKm5nSWY9XCJ0eXBlPT09J21kJ1wiIHZucHQtYnV0dG9uIHZUeXBlPVwidGV4dFwiIGNsYXNzPVwidG9vbGJhci1idG5cIiB0aXRsZT1cInt7dGl0bGV9fVwiPjxpIHZucHQtaWNvbiBbdlNyY109XCJpY29uZm9udD8gJyc6IChpY29uIHwgYXNzZXRVcmwpXCIgW3ZUeXBlXT1cImljb25mb250P2ljb246JydcIj48L2k+PHNwYW4+e3t0aXRsZX19PC9zcGFuPjwvYnV0dG9uPlxyXG48YnV0dG9uICpuZ0lmPVwidHlwZT09PSdzbSdcIiB2bnB0LWJ1dHRvbiB2VHlwZT1cInRleHRcIiBjbGFzcz1cInRvb2xiYXItYnRuLXNtXCIgdGl0bGU9XCJ7e3RpdGxlfX1cIj48aSB2bnB0LWljb24gW3ZTcmNdPVwiaWNvbmZvbnQ/ICcnOiAoaWNvbiB8IGFzc2V0VXJsKVwiIFt2VHlwZV09XCJpY29uZm9udD9pY29uOicnXCIgW3ZTaXplXT1cIid4cydcIj48L2k+PHNwYW4+e3t0aXRsZX19PC9zcGFuPjwvYnV0dG9uPlxyXG4iXX0=
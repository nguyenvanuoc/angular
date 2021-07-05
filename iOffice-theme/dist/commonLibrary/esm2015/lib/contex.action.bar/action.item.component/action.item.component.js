import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@vnpt/oneui-ui/button";
import * as i3 from "@vnpt/oneui-ui/core/transition-patch";
import * as i4 from "@vnpt/oneui-ui/tooltip";
import * as i5 from "@vnpt/oneui-ui/icon";
function ActionItemComponent_button_0_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("vSrc", ctx_r3.iconSrc)("vColor", ctx_r3.color);
} }
function ActionItemComponent_button_0_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 7);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("vType", ctx_r6.icon)("vColor", ctx_r6.color);
} }
function ActionItemComponent_button_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ActionItemComponent_button_0_ng_template_2_i_0_Template, 1, 2, "i", 6);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r5.icon);
} }
function ActionItemComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵtemplate(1, ActionItemComponent_button_0_i_1_Template, 1, 2, "i", 3);
    i0.ɵɵtemplate(2, ActionItemComponent_button_0_ng_template_2_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r4 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("vTooltipTitle", ctx_r0.title)("disabled", ctx_r0.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.iconSrc)("ngIfElse", _r4);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.text);
} }
function ActionItemComponent_ng_template_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("vSrc", ctx_r7.iconSrc)("vColor", ctx_r7.color);
} }
function ActionItemComponent_ng_template_1_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 7);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("vType", ctx_r10.icon)("vColor", ctx_r10.color);
} }
function ActionItemComponent_ng_template_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ActionItemComponent_ng_template_1_ng_template_2_i_0_Template, 1, 2, "i", 6);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r9.icon);
} }
function ActionItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵtemplate(1, ActionItemComponent_ng_template_1_i_1_Template, 1, 2, "i", 3);
    i0.ɵɵtemplate(2, ActionItemComponent_ng_template_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r8 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("vTooltipTitle", ctx_r2.title)("disabled", ctx_r2.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.iconSrc)("ngIfElse", _r8);
} }
export class ActionItemComponent {
    constructor() {
        this.color = 'primary';
        this.disabled = false;
    }
    ngOnInit() { }
    close() { }
}
ActionItemComponent.ɵfac = function ActionItemComponent_Factory(t) { return new (t || ActionItemComponent)(); };
ActionItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ActionItemComponent, selectors: [["action-item"]], inputs: { text: "text", icon: "icon", iconSrc: "iconSrc", color: "color", title: "title", disabled: "disabled" }, decls: 3, vars: 2, consts: [["vnpt-button", "", "vType", "text", "vnpt-tooltip", "", "class", "action-item-btn", 3, "vTooltipTitle", "disabled", 4, "ngIf", "ngIfElse"], ["notext", ""], ["vnpt-button", "", "vType", "text", "vnpt-tooltip", "", 1, "action-item-btn", 3, "vTooltipTitle", "disabled"], ["vnpt-icon", "", 3, "vSrc", "vColor", 4, "ngIf", "ngIfElse"], ["elseSrc", ""], ["vnpt-icon", "", 3, "vSrc", "vColor"], ["vnpt-icon", "", 3, "vType", "vColor", 4, "ngIf"], ["vnpt-icon", "", 3, "vType", "vColor"]], template: function ActionItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ActionItemComponent_button_0_Template, 6, 5, "button", 0);
        i0.ɵɵtemplate(1, ActionItemComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.text)("ngIfElse", _r1);
    } }, directives: [i1.NgIf, i2.VButtonComponent, i3.ɵVTransitionPatchDirective, i4.VTooltipDirective, i5.VIconDirective], styles: [".action-item-btn[_ngcontent-%COMP%]{margin:0 5px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ActionItemComponent, [{
        type: Component,
        args: [{
                selector: 'action-item',
                templateUrl: './action.item.component.html',
                styleUrls: ['./action.item.component.css'],
            }]
    }], function () { return []; }, { text: [{
            type: Input
        }], icon: [{
            type: Input
        }], iconSrc: [{
            type: Input
        }], color: [{
            type: Input
        }], title: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLml0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tbW9uTGlicmFyeS9zcmMvbGliL2NvbnRleC5hY3Rpb24uYmFyL2FjdGlvbi5pdGVtLmNvbXBvbmVudC9hY3Rpb24uaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvY29udGV4LmFjdGlvbi5iYXIvYWN0aW9uLml0ZW0uY29tcG9uZW50L2FjdGlvbi5pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0V2RCx1QkFBaUY7OztJQUF0QyxxQ0FBZ0Isd0JBQUE7OztJQUV6RCx1QkFBOEQ7OztJQUFwQyxtQ0FBYyx3QkFBQTs7O0lBQXhDLHVGQUE4RDs7O0lBQTFELGtDQUFVOzs7SUFKbEIsaUNBRUU7SUFBQSx5RUFBaUY7SUFDakYsOEhBRWM7SUFDZCw0QkFBTTtJQUFBLFlBQVU7SUFBQSxpQkFBTztJQUN6QixpQkFBUzs7OztJQVArRCw0Q0FBdUIsNkJBQUE7SUFFekYsZUFBZTtJQUFmLHFDQUFlLGlCQUFBO0lBSWIsZUFBVTtJQUFWLGlDQUFVOzs7SUFJZCx1QkFBaUY7OztJQUF0QyxxQ0FBZ0Isd0JBQUE7OztJQUV6RCx1QkFBOEQ7OztJQUFwQyxvQ0FBYyx5QkFBQTs7O0lBQXhDLDRGQUE4RDs7O0lBQTFELGtDQUFVOzs7SUFIbEIsaUNBQ0U7SUFBQSw4RUFBaUY7SUFDakYsbUlBRWM7SUFDaEIsaUJBQVM7Ozs7SUFMcUMsNENBQXVCLDZCQUFBO0lBQy9ELGVBQWU7SUFBZixxQ0FBZSxpQkFBQTs7QURIdkIsTUFBTSxPQUFPLG1CQUFtQjtJQVE5QjtRQUpTLFVBQUssR0FBVyxTQUFTLENBQUM7UUFFMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUVwQixDQUFDO0lBRWhCLFFBQVEsS0FBVSxDQUFDO0lBRW5CLEtBQUssS0FBVSxDQUFDOztzRkFaTCxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQ1BoQywwRUFPUztRQUNULHFIQU9jOzs7UUFmTCwrQkFBWSxpQkFBQTs7a0RET1IsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7c0NBRVUsSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhY3Rpb24taXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi5pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hY3Rpb24uaXRlbS5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25TcmM6IHN0cmluZztcclxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJ3ByaW1hcnknO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge31cclxufVxyXG4iLCI8YnV0dG9uICpuZ0lmPVwidGV4dDsgZWxzZSBub3RleHRcIiB2bnB0LWJ1dHRvbiB2VHlwZT1cInRleHRcIiB2bnB0LXRvb2x0aXAgW3ZUb29sdGlwVGl0bGVdPVwidGl0bGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gIGNsYXNzPVwiYWN0aW9uLWl0ZW0tYnRuXCI+XHJcbiAgPGkgKm5nSWY9XCJpY29uU3JjOyBlbHNlIGVsc2VTcmNcIiB2bnB0LWljb24gW3ZTcmNdPVwiaWNvblNyY1wiIFt2Q29sb3JdPVwiY29sb3JcIj48L2k+XHJcbiAgPG5nLXRlbXBsYXRlICNlbHNlU3JjPlxyXG4gICAgPGkgKm5nSWY9XCJpY29uXCIgdm5wdC1pY29uIFt2VHlwZV09XCJpY29uXCIgW3ZDb2xvcl09XCJjb2xvclwiPjwvaT5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxzcGFuPnt7IHRleHQgfX08L3NwYW4+XHJcbjwvYnV0dG9uPlxyXG48bmctdGVtcGxhdGUgI25vdGV4dD5cclxuICA8YnV0dG9uIHZucHQtYnV0dG9uIHZUeXBlPVwidGV4dFwiIHZucHQtdG9vbHRpcCBbdlRvb2x0aXBUaXRsZV09XCJ0aXRsZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIGNsYXNzPVwiYWN0aW9uLWl0ZW0tYnRuXCI+XHJcbiAgICA8aSAqbmdJZj1cImljb25TcmM7IGVsc2UgZWxzZVNyY1wiIHZucHQtaWNvbiBbdlNyY109XCJpY29uU3JjXCIgW3ZDb2xvcl09XCJjb2xvclwiPjwvaT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjZWxzZVNyYz5cclxuICAgICAgPGkgKm5nSWY9XCJpY29uXCIgdm5wdC1pY29uIFt2VHlwZV09XCJpY29uXCIgW3ZDb2xvcl09XCJjb2xvclwiPjwvaT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC9idXR0b24+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
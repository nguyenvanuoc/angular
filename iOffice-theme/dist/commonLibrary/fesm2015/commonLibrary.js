import * as i0 from '@angular/core';
import { Component, Input, Pipe, EventEmitter, Output, HostListener, NgModule } from '@angular/core';
import * as i2$1 from '@vnpt/oneui-ui/affix';
import { VAffixModule } from '@vnpt/oneui-ui/affix';
import * as i2 from '@vnpt/oneui-ui/button';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import * as i5 from '@vnpt/oneui-ui/icon';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@vnpt/oneui-ui/core/transition-patch';
import * as i3$1 from '@vnpt/oneui-ui/grid';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import * as i4 from '@vnpt/oneui-ui/tooltip';
import { VToolTipModule } from '@vnpt/oneui-ui/tooltip';
import * as i1$1 from '@vnpt/oneui-ui/card';
import { VCardModule } from '@vnpt/oneui-ui/card';
import * as i3$2 from '@vnpt/oneui-ui/typography';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import * as i3$3 from '@vnpt/oneui-ui/menu';
import { VMenuModule } from '@vnpt/oneui-ui/menu';
import * as i1$2 from '@angular/router';
import { NavigationEnd, RouterModule } from '@angular/router';
import * as i7 from '@vnpt/oneui-ui/divider';
import { VDividerModule } from '@vnpt/oneui-ui/divider';
import { VListModule } from '@vnpt/oneui-ui/list';
import * as i4$1 from '@vnpt/oneui-ui/dropdown';
import { VDropDownModule } from '@vnpt/oneui-ui/dropdown';

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
const _c0$5 = ["*"];
class BlankPageComponent {
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
BlankPageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BlankPageComponent, selectors: [["vnpt-page"]], inputs: { close: "close" }, ngContentSelectors: _c0$5, decls: 2, vars: 1, consts: [["vnpt-button", "", "vType", "text", "class", "close-btn", 3, "click", 4, "ngIf"], ["vnpt-button", "", "vType", "text", 1, "close-btn", 3, "click"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 496.096 496.096", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 496.096 496.096", "width", "12px"], ["d", "M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686\n\t\t\tL13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342\n\t\t\tc-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31\n\t\t\tl234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"]], template: function BlankPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, BlankPageComponent_button_0_Template, 5, 0, "button", 0);
        i0.ɵɵprojection(1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.close);
    } }, directives: [i1.NgIf, i2.VButtonComponent, i3.ɵVTransitionPatchDirective], styles: [".close-btn[_ngcontent-%COMP%]{border:none;background:#f5f5f5;position:fixed;right:60px;padding:0 10px;cursor:pointer;z-index:98}.close-btn[_ngcontent-%COMP%]:hover{background-color:#fafafa}@media only screen and (max-width:992px){.close-btn[_ngcontent-%COMP%]{position:fixed;right:10px;top:0;margin-top:0;background:#fff}}"] });
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

function ContexualActionBarComponent_vnpt_affix_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ContexualActionBarComponent_vnpt_affix_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0$4 = function (a0) { return { "background-color": a0 }; };
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
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c0$4, ctx_r0.bgColor ? ctx_r0.bgColor : ""));
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
class ContexualActionBarComponent {
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
    } }, directives: [i1.NgIf, i2$1.VAffixComponent, i3$1.VRowDirective, i1.NgStyle, i3$1.VColDirective, i1.NgTemplateOutlet], styles: [".context-actionbar-wrapper[_ngcontent-%COMP%]{background-color:#fafafa;z-index:99;padding:4px 30px}.oneui-dropdown-trigger[_ngcontent-%COMP%] > .ms-Icon[_ngcontent-%COMP%]{font-size:16px}@media only screen and (max-width:576px){.context-actionbar-wrapper[_ngcontent-%COMP%]{padding:4px 10px}}"] });
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
class ActionItemComponent {
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

function MainContentComponent_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
const _c0$3 = ["*"];
class MainContentComponent {
    ngOnInit() { }
}
MainContentComponent.ɵfac = function MainContentComponent_Factory(t) { return new (t || MainContentComponent)(); };
MainContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MainContentComponent, selectors: [["vnpt-main-content"]], inputs: { title: "title" }, ngContentSelectors: _c0$3, decls: 4, vars: 2, consts: [[1, "layout-wr"], [3, "vBordered"], ["vnpt-typography", "", "class", "mb-4 mb-md-6", 4, "ngIf"], ["vnpt-typography", "", 1, "mb-4", "mb-md-6"]], template: function MainContentComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1$1.VCardComponent, i1.NgIf, i3$2.VTypographyComponent], styles: [".close-btn[_ngcontent-%COMP%]{border:none;background:#f5f5f5;position:fixed;right:60px;padding:0 10px;margin-top:0;cursor:pointer}.close-btn[_ngcontent-%COMP%]:hover{background-color:#fafafa}.page-title[_ngcontent-%COMP%]{margin-bottom:2.2rem}"] });
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

function DrawerContentComponent_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
const _c0$2 = ["*"];
class DrawerContentComponent {
    ngOnInit() { }
}
DrawerContentComponent.ɵfac = function DrawerContentComponent_Factory(t) { return new (t || DrawerContentComponent)(); };
DrawerContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DrawerContentComponent, selectors: [["vnpt-main-drawer"]], inputs: { title: "title" }, ngContentSelectors: _c0$2, decls: 3, vars: 1, consts: [[1, "drawer-content-wrapper"], ["vnpt-typography", "", "class", "page-title", 4, "ngIf"], ["vnpt-typography", "", 1, "page-title"]], template: function DrawerContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DrawerContentComponent_h4_1_Template, 2, 1, "h4", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title);
    } }, directives: [i1.NgIf, i3$2.VTypographyComponent], styles: [".drawer-content-wrapper[_ngcontent-%COMP%]{padding:30px 25px 0}.drawer-content-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{margin-bottom:25px}"] });
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

class ActiveUrlCheckPipe {
    transform(rootvalue, value) {
        if (rootvalue) {
            if (rootvalue.startsWith(value)) {
                if (value === '/home' && rootvalue != '/home')
                    return false;
                return true;
            }
            return false;
        }
        return false;
    }
}
ActiveUrlCheckPipe.ɵfac = function ActiveUrlCheckPipe_Factory(t) { return new (t || ActiveUrlCheckPipe)(); };
ActiveUrlCheckPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "activeUrlCheck", type: ActiveUrlCheckPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ActiveUrlCheckPipe, [{
        type: Pipe,
        args: [{ name: 'activeUrlCheck' }]
    }], null, null); })();

class Utilities {
    static assetUrl(url) {
        // @ts-ignore
        const publicPath = __webpack_public_path__;
        const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
        const urlPrefix = url.startsWith('/') ? '' : '/';
        return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
    }
}

class AssetUrlPipe {
    transform(value) {
        return Utilities.assetUrl(value);
    }
}
AssetUrlPipe.ɵfac = function AssetUrlPipe_Factory(t) { return new (t || AssetUrlPipe)(); };
AssetUrlPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "assetUrl", type: AssetUrlPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AssetUrlPipe, [{
        type: Pipe,
        args: [{ name: 'assetUrl' }]
    }], null, null); })();

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
class SubMenuComponent {
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
SubMenuComponent.ɵfac = function SubMenuComponent_Factory(t) { return new (t || SubMenuComponent)(i0.ɵɵdirectiveInject(i1$2.Router)); };
SubMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubMenuComponent, selectors: [["submenu-comp"]], inputs: { menuConfig: "menuConfig" }, outputs: { itemClick: "itemClick" }, decls: 1, vars: 1, consts: [["vnpt-menu", "", "vMode", "inline", "style", "padding: 10px 2px 20px 20px;", 4, "ngIf"], ["vnpt-menu", "", "vMode", "inline", 2, "padding", "10px 2px 20px 20px"], [4, "ngFor", "ngForOf"], ["vnpt-submenu", "", "vOpen", "", 3, "vTitle", "vIcon", 4, "ngIf"], [4, "ngIf"], ["vnpt-submenu", "", "vOpen", "", 3, "vTitle", "vIcon"], ["vnpt-menu-item", "", 3, "routerLink", "title", "vSelected", "click", 4, "ngIf"], ["vnpt-menu-item", "", 3, "vRouterLink", "title", "vSelected", "click", 4, "ngIf"], ["vnpt-menu-item", "", 3, "vSelected", 4, "ngIf"], ["vnpt-menu-item", "", 3, "routerLink", "title", "vSelected", "click"], ["vnpt-icon", "", 3, "vSrc", "vType", "vSize", 4, "ngIf"], ["vnpt-icon", "", 3, "vSrc", "vType", "vSize"], ["vnpt-menu-item", "", 3, "vRouterLink", "title", "vSelected", "click"], ["vnpt-menu-item", "", 3, "vSelected"], ["target", "_blank", 3, "href", "title"]], template: function SubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SubMenuComponent_ul_0_Template, 2, 1, "ul", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.menuConfig && ctx.menuConfig.length > 0);
    } }, directives: [i1.NgIf, i3$3.VMenuDirective, i1.NgForOf, i3.ɵVTransitionPatchDirective, i3$3.VSubMenuComponent, i3$3.VMenuItemDirective, i1$2.RouterLink, i5.VIconDirective], pipes: [ActiveUrlCheckPipe, AssetUrlPipe], styles: ["[_nghost-%COMP%]     .oneui-menu-inline .oneui-menu-item{margin-bottom:15px;margin-top:6px;padding-right:35px;padding-left:20px!important}[_nghost-%COMP%]     .oneui-menu-inline .oneui-menu-item i{margin-right:12px}[_nghost-%COMP%]     .oneui-menu:not(.oneui-menu-horizontal) .oneui-menu-item-selected{background-color:#e7e8e9}[_nghost-%COMP%]     .oneui-menu-inline>.oneui-menu-submenu>.oneui-menu-submenu-title{font-weight:600;padding-left:10px!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubMenuComponent, [{
        type: Component,
        args: [{
                selector: 'submenu-comp',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css'],
            }]
    }], function () { return [{ type: i1$2.Router }]; }, { menuConfig: [{
            type: Input
        }], itemClick: [{
            type: Output
        }] }); })();

class ChangeDateTimePipe {
    transform(value) {
        let reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
        let dateArray = reggie.exec(value);
        let dataObject = new Date(+dateArray[1], +dateArray[2] - 1, +dateArray[3], +dateArray[4], +dateArray[5], +dateArray[6]);
        let timenow = new Date();
        let date;
        let month;
        let hour;
        let minute;
        let second;
        if (dataObject.getFullYear() < timenow.getFullYear()) {
            return dataObject.toLocaleDateString();
        }
        else if (dataObject.getFullYear() == timenow.getFullYear()) {
            if (dataObject.getMonth() < timenow.getMonth()) {
                month = timenow.getMonth() - dataObject.getMonth();
                return month + ' ' + 'tháng trước';
            }
            else if (dataObject.getMonth() == timenow.getMonth()) {
                if (dataObject.getDate() < timenow.getDate()) {
                    date = timenow.getDate() - dataObject.getDate();
                    return date + ' ' + 'ngày trước';
                }
                else if (dataObject.getDate() == timenow.getDate()) {
                    if (dataObject.getHours() < timenow.getHours()) {
                        hour = timenow.getHours() - dataObject.getHours();
                        return hour + ' ' + 'giờ trước';
                    }
                    else if (dataObject.getHours() == timenow.getHours()) {
                        if (dataObject.getMinutes() < timenow.getMinutes()) {
                            minute = timenow.getMinutes() - dataObject.getMinutes();
                            return minute + ' ' + 'phút trước';
                        }
                        else if (dataObject.getMinutes() == timenow.getMinutes()) {
                            if (dataObject.getSeconds() < timenow.getSeconds()) {
                                second = timenow.getSeconds() - dataObject.getSeconds();
                                return second + ' ' + 'giây trước';
                            }
                            else if (dataObject.getSeconds() == timenow.getSeconds()) {
                                return 'less than a minute';
                            }
                        }
                    }
                }
            }
        }
    }
}
ChangeDateTimePipe.ɵfac = function ChangeDateTimePipe_Factory(t) { return new (t || ChangeDateTimePipe)(); };
ChangeDateTimePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "changeDateTime", type: ChangeDateTimePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChangeDateTimePipe, [{
        type: Pipe,
        args: [{ name: 'changeDateTime' }]
    }], null, null); })();

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
class ToolbarItemComponent {
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
    } }, directives: [i1.NgIf, i2.VButtonComponent, i3.ɵVTransitionPatchDirective, i5.VIconDirective], pipes: [AssetUrlPipe], styles: [".toolbar-btn[_ngcontent-%COMP%]{height:100%;margin:0 4px;max-width:116px;vertical-align:middle}.toolbar-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .toolbar-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;display:block}.toolbar-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0;margin-top:5px;font-size:12px;text-overflow:ellipsis;overflow:hidden}.toolbar-btn-sm[_ngcontent-%COMP%]{height:100%;margin:0 4px;max-width:100px;vertical-align:middle}.toolbar-btn-sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .toolbar-btn-sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;display:block}.toolbar-btn-sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0;margin-top:5px;font-size:11px;text-overflow:ellipsis;overflow:hidden}"] });
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
const _c0$1 = function (a1) { return { "toolbar-wrapper": true, "collapse": a1 }; };
const _c1$1 = function (a0) { return { "background-color": a0 }; };
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0$1, ctx_r6.isCollapse))("ngStyle", i0.ɵɵpureFunction1(10, _c1$1, ctx_r6.bgColor ? ctx_r6.bgColor : ""));
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
class ToolbarComponent {
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
    } }, directives: [i1.NgIf, i2$1.VAffixComponent, i1.NgTemplateOutlet, i3$1.VRowDirective, i1.NgClass, i1.NgStyle, i3$1.VColDirective, i1.NgForOf, i4$1.VDropdownMenuComponent, i3$3.VMenuDirective, ToolbarItemComponent, i7.VDividerComponent, i2.VButtonComponent, i3.ɵVTransitionPatchDirective, i4$1.VDropdownButtonDirective, i4$1.VDropDownDirective, i5.VIconDirective, i3$3.VMenuItemDirective], styles: [".toolbar-wrapper[_ngcontent-%COMP%]{background-color:#f5f5f5;z-index:99;padding:0 30px;height:66px;position:relative}.toolbar-wrapper.collapse[_ngcontent-%COMP%]{height:50px}[_nghost-%COMP%]     .oneui-divider-vertical{height:32px;margin-left:16px;margin-right:16px}.toolbar-btn-collapse[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:2px}[_nghost-%COMP%]     .toolbar-wrapper.collapse .oneui-divider-vertical{height:24px;margin-top:3px;margin-left:8px;margin-right:8px}.toolbar-more-btn[_ngcontent-%COMP%]{text-align:center;height:100%;width:40px;vertical-align:middle;padding-left:18px}"] });
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

const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = ["*"];
class BottombarComponent {
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
    } }, directives: [i2$1.VAffixComponent, i3$1.VRowDirective, i1.NgStyle, i3$1.VColDirective], styles: [""] });
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

class CommonLibraryModule {
    static forRoot() {
        return {
            ngModule: CommonLibraryModule
        };
    }
}
CommonLibraryModule.ɵmod = i0.ɵɵdefineNgModule({ type: CommonLibraryModule });
CommonLibraryModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CommonLibraryModule_Factory(t) { return new (t || CommonLibraryModule)(); }, providers: [], imports: [[
            CommonModule,
            VGridModule,
            VAffixModule,
            VButtonModule,
            VIconModule,
            VToolTipModule,
            VTypographyModule,
            VCardModule,
            VMenuModule,
            RouterModule,
            VDividerModule,
            VListModule,
            VLayoutModule,
            VDropDownModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CommonLibraryModule, { declarations: [BlankPageComponent,
        ContexualActionBarComponent,
        ActionItemComponent,
        MainContentComponent,
        DrawerContentComponent,
        ActiveUrlCheckPipe,
        SubMenuComponent,
        AssetUrlPipe,
        ChangeDateTimePipe,
        ToolbarComponent,
        ToolbarItemComponent,
        BottombarComponent], imports: [CommonModule,
        VGridModule,
        VAffixModule,
        VButtonModule,
        VIconModule,
        VToolTipModule,
        VTypographyModule,
        VCardModule,
        VMenuModule,
        RouterModule,
        VDividerModule,
        VListModule,
        VLayoutModule,
        VDropDownModule], exports: [BlankPageComponent,
        ContexualActionBarComponent,
        ActionItemComponent,
        MainContentComponent,
        DrawerContentComponent,
        ActiveUrlCheckPipe,
        SubMenuComponent,
        AssetUrlPipe,
        ChangeDateTimePipe,
        ToolbarComponent,
        ToolbarItemComponent,
        BottombarComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CommonLibraryModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BlankPageComponent,
                    ContexualActionBarComponent,
                    ActionItemComponent,
                    MainContentComponent,
                    DrawerContentComponent,
                    ActiveUrlCheckPipe,
                    SubMenuComponent,
                    AssetUrlPipe,
                    ChangeDateTimePipe,
                    ToolbarComponent,
                    ToolbarItemComponent,
                    BottombarComponent,
                ],
                imports: [
                    CommonModule,
                    VGridModule,
                    VAffixModule,
                    VButtonModule,
                    VIconModule,
                    VToolTipModule,
                    VTypographyModule,
                    VCardModule,
                    VMenuModule,
                    RouterModule,
                    VDividerModule,
                    VListModule,
                    VLayoutModule,
                    VDropDownModule,
                ],
                exports: [
                    BlankPageComponent,
                    ContexualActionBarComponent,
                    ActionItemComponent,
                    MainContentComponent,
                    DrawerContentComponent,
                    ActiveUrlCheckPipe,
                    SubMenuComponent,
                    AssetUrlPipe,
                    ChangeDateTimePipe,
                    ToolbarComponent,
                    ToolbarItemComponent,
                    BottombarComponent,
                ],
                providers: [],
            }]
    }], null, null); })();

class MyValidator {
    static DemoValidator(control) {
        return demoValid(control);
    }
}
function demoValid(control) {
    if (control.value != null && control.value.startsWith(' ')) {
        return {
            trimError: { value: 'control has leading whitespace' },
        };
    }
    if (control.value != null && control.value.endsWith(' ')) {
        return {
            trimError: { value: 'control has trailing whitespace' },
        };
    }
    return null;
}

/*
 * Public API Surface of commonLibrary
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionItemComponent, ActiveUrlCheckPipe, AssetUrlPipe, BlankPageComponent, BottombarComponent, ChangeDateTimePipe, CommonLibraryModule, ContexualActionBarComponent, DrawerContentComponent, MainContentComponent, MyValidator, SubMenuComponent, ToolbarComponent, ToolbarItemComponent, Utilities, demoValid };
//# sourceMappingURL=commonLibrary.js.map

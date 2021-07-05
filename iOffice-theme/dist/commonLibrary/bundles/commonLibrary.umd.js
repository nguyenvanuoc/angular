(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@vnpt/oneui-ui/affix'), require('@vnpt/oneui-ui/button'), require('@vnpt/oneui-ui/icon'), require('@vnpt/oneui-ui/layout'), require('@angular/common'), require('@vnpt/oneui-ui/core/transition-patch'), require('@vnpt/oneui-ui/grid'), require('@vnpt/oneui-ui/tooltip'), require('@vnpt/oneui-ui/card'), require('@vnpt/oneui-ui/typography'), require('@vnpt/oneui-ui/menu'), require('@angular/router'), require('@vnpt/oneui-ui/divider'), require('@vnpt/oneui-ui/list'), require('@vnpt/oneui-ui/dropdown')) :
    typeof define === 'function' && define.amd ? define('commonLibrary', ['exports', '@angular/core', '@vnpt/oneui-ui/affix', '@vnpt/oneui-ui/button', '@vnpt/oneui-ui/icon', '@vnpt/oneui-ui/layout', '@angular/common', '@vnpt/oneui-ui/core/transition-patch', '@vnpt/oneui-ui/grid', '@vnpt/oneui-ui/tooltip', '@vnpt/oneui-ui/card', '@vnpt/oneui-ui/typography', '@vnpt/oneui-ui/menu', '@angular/router', '@vnpt/oneui-ui/divider', '@vnpt/oneui-ui/list', '@vnpt/oneui-ui/dropdown'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.commonLibrary = {}, global.ng.core, global.i2$1, global.i2, global.i5, global.layout, global.ng.common, global.i3, global.i3$1, global.i4, global.i1$1, global.i3$2, global.i3$3, global.ng.router, global.i7, global.list, global.i4$1));
}(this, (function (exports, i0, i2$1, i2, i5, layout, i1, i3, i3$1, i4, i1$1, i3$2, i3$3, i1$2, i7, list, i4$1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace$2 = /*#__PURE__*/_interopNamespace(i3$2);
    var i3__namespace$3 = /*#__PURE__*/_interopNamespace(i3$3);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);

    function BlankPageComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 1);
            i0__namespace.ɵɵlistener("click", function BlankPageComponent_button_0_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r2_1); var ctx_r1 = i0__namespace.ɵɵnextContext(); return ctx_r1.onCloseClick(); });
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(1, "svg", 2);
            i0__namespace.ɵɵelementStart(2, "g");
            i0__namespace.ɵɵelementStart(3, "g");
            i0__namespace.ɵɵelement(4, "path", 3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    var _c0$5 = ["*"];
    var BlankPageComponent = /** @class */ (function () {
        function BlankPageComponent() {
            this.close = true;
            this.title = 'emptypage';
        }
        BlankPageComponent.prototype.ngOnInit = function () { };
        BlankPageComponent.prototype.onCloseClick = function () {
            window.history.back();
        };
        return BlankPageComponent;
    }());
    BlankPageComponent.ɵfac = function BlankPageComponent_Factory(t) { return new (t || BlankPageComponent)(); };
    BlankPageComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: BlankPageComponent, selectors: [["vnpt-page"]], inputs: { close: "close" }, ngContentSelectors: _c0$5, decls: 2, vars: 1, consts: [["vnpt-button", "", "vType", "text", "class", "close-btn", 3, "click", 4, "ngIf"], ["vnpt-button", "", "vType", "text", 1, "close-btn", 3, "click"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 496.096 496.096", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 496.096 496.096", "width", "12px"], ["d", "M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686\n\t\t\tL13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342\n\t\t\tc-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31\n\t\t\tl234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"]], template: function BlankPageComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵtemplate(0, BlankPageComponent_button_0_Template, 5, 0, "button", 0);
                i0__namespace.ɵɵprojection(1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.close);
            }
        }, directives: [i1__namespace.NgIf, i2__namespace.VButtonComponent, i3__namespace.ɵVTransitionPatchDirective], styles: [".close-btn[_ngcontent-%COMP%]{border:none;background:#f5f5f5;position:fixed;right:60px;padding:0 10px;cursor:pointer;z-index:98}.close-btn[_ngcontent-%COMP%]:hover{background-color:#fafafa}@media only screen and (max-width:992px){.close-btn[_ngcontent-%COMP%]{position:fixed;right:10px;top:0;margin-top:0;background:#fff}}"] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(BlankPageComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'vnpt-page',
                        templateUrl: './blank.page.component.html',
                        styleUrls: ['./blank.page.component.css'],
                    }]
            }], null, { close: [{
                    type: i0.Input
                }] });
    })();

    function ContexualActionBarComponent_vnpt_affix_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function ContexualActionBarComponent_vnpt_affix_0_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    var _c0$4 = function (a0) { return { "background-color": a0 }; };
    function ContexualActionBarComponent_vnpt_affix_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "vnpt-affix", 3);
            i0__namespace.ɵɵelementStart(1, "div", 4);
            i0__namespace.ɵɵelementStart(2, "div", 5);
            i0__namespace.ɵɵtemplate(3, ContexualActionBarComponent_vnpt_affix_0_ng_container_3_Template, 1, 0, "ng-container", 6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "div", 7);
            i0__namespace.ɵɵtemplate(5, ContexualActionBarComponent_vnpt_affix_0_ng_container_5_Template, 1, 0, "ng-container", 6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("vOffsetTop", ctx_r0.fixAtTop);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngStyle", i0__namespace.ɵɵpureFunction1(4, _c0$4, ctx_r0.bgColor ? ctx_r0.bgColor : ""));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r0.left);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r0.right);
        }
    }
    function ContexualActionBarComponent_ng_template_1_vnpt_affix_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function ContexualActionBarComponent_ng_template_1_vnpt_affix_0_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function ContexualActionBarComponent_ng_template_1_vnpt_affix_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "vnpt-affix", 9);
            i0__namespace.ɵɵelementStart(1, "div", 10);
            i0__namespace.ɵɵelementStart(2, "div", 5);
            i0__namespace.ɵɵtemplate(3, ContexualActionBarComponent_ng_template_1_vnpt_affix_0_ng_container_3_Template, 1, 0, "ng-container", 6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "div", 7);
            i0__namespace.ɵɵtemplate(5, ContexualActionBarComponent_ng_template_1_vnpt_affix_0_ng_container_5_Template, 1, 0, "ng-container", 6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("vOffsetBottom", ctx_r7.fixAtBottom);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r7.left);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r7.right);
        }
    }
    function ContexualActionBarComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, ContexualActionBarComponent_ng_template_1_vnpt_affix_0_Template, 6, 3, "vnpt-affix", 8);
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            var _r3 = i0__namespace.ɵɵreference(4);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.fixAtBottom)("ngIfElse", _r3);
        }
    }
    function ContexualActionBarComponent_ng_template_3_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function ContexualActionBarComponent_ng_template_3_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function ContexualActionBarComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "vnpt-affix", 3);
            i0__namespace.ɵɵelementStart(1, "div", 10);
            i0__namespace.ɵɵelementStart(2, "div", 5);
            i0__namespace.ɵɵtemplate(3, ContexualActionBarComponent_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "div", 7);
            i0__namespace.ɵɵtemplate(5, ContexualActionBarComponent_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("vOffsetTop", 85);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r4.left);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx_r4.right);
        }
    }
    var ContexualActionBarComponent = /** @class */ (function () {
        function ContexualActionBarComponent() {
        }
        ContexualActionBarComponent.prototype.ngOnInit = function () {
            setTimeout(function () {
                window.dispatchEvent(new Event('resize'));
            }, 300);
        };
        ContexualActionBarComponent.prototype.close = function () { };
        return ContexualActionBarComponent;
    }());
    ContexualActionBarComponent.ɵfac = function ContexualActionBarComponent_Factory(t) { return new (t || ContexualActionBarComponent)(); };
    ContexualActionBarComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: ContexualActionBarComponent, selectors: [["contexual-actionbar"]], inputs: { left: "left", right: "right", fixAtTop: "fixAtTop", fixAtBottom: "fixAtBottom", bgColor: "bgColor" }, decls: 5, vars: 2, consts: [[3, "vOffsetTop", 4, "ngIf", "ngIfElse"], ["elseFixAtTop", ""], ["default", ""], [3, "vOffsetTop"], ["vnpt-row", "", 1, "context-actionbar-wrapper", 3, "ngStyle"], ["vnpt-col", "", "vXs", "14", "vSm", "14", "vMd", "14", "vLg", "18", "vXl", "18", 1, "actionbar-left"], [4, "ngTemplateOutlet"], ["vnpt-col", "", "vXs", "10", "vSm", "10", "vMd", "10", "vLg", "6", "vXl", "6", 1, "actionbar-right", 2, "text-align", "right"], [3, "vOffsetBottom", 4, "ngIf", "ngIfElse"], [3, "vOffsetBottom"], ["vnpt-row", "", 1, "context-actionbar-wrapper"]], template: function ContexualActionBarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ContexualActionBarComponent_vnpt_affix_0_Template, 6, 6, "vnpt-affix", 0);
                i0__namespace.ɵɵtemplate(1, ContexualActionBarComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(3, ContexualActionBarComponent_ng_template_3_Template, 6, 3, "ng-template", null, 2, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.fixAtTop)("ngIfElse", _r1);
            }
        }, directives: [i1__namespace.NgIf, i2__namespace$1.VAffixComponent, i3__namespace$1.VRowDirective, i1__namespace.NgStyle, i3__namespace$1.VColDirective, i1__namespace.NgTemplateOutlet], styles: [".context-actionbar-wrapper[_ngcontent-%COMP%]{background-color:#fafafa;z-index:99;padding:4px 30px}.oneui-dropdown-trigger[_ngcontent-%COMP%] > .ms-Icon[_ngcontent-%COMP%]{font-size:16px}@media only screen and (max-width:576px){.context-actionbar-wrapper[_ngcontent-%COMP%]{padding:4px 10px}}"] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(ContexualActionBarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'contexual-actionbar',
                        templateUrl: './action.bar.component.html',
                        styleUrls: ['./action.bar.component.css'],
                    }]
            }], function () { return []; }, { left: [{
                    type: i0.Input
                }], right: [{
                    type: i0.Input
                }], fixAtTop: [{
                    type: i0.Input
                }], fixAtBottom: [{
                    type: i0.Input
                }], bgColor: [{
                    type: i0.Input
                }] });
    })();

    function ActionItemComponent_button_0_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "i", 5);
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("vSrc", ctx_r3.iconSrc)("vColor", ctx_r3.color);
        }
    }
    function ActionItemComponent_button_0_ng_template_2_i_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "i", 7);
        }
        if (rf & 2) {
            var ctx_r6 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵproperty("vType", ctx_r6.icon)("vColor", ctx_r6.color);
        }
    }
    function ActionItemComponent_button_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, ActionItemComponent_button_0_ng_template_2_i_0_Template, 1, 2, "i", 6);
        }
        if (rf & 2) {
            var ctx_r5 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r5.icon);
        }
    }
    function ActionItemComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 2);
            i0__namespace.ɵɵtemplate(1, ActionItemComponent_button_0_i_1_Template, 1, 2, "i", 3);
            i0__namespace.ɵɵtemplate(2, ActionItemComponent_button_0_ng_template_2_Template, 1, 1, "ng-template", null, 4, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementStart(4, "span");
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r4 = i0__namespace.ɵɵreference(3);
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("vTooltipTitle", ctx_r0.title)("disabled", ctx_r0.disabled);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.iconSrc)("ngIfElse", _r4);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.text);
        }
    }
    function ActionItemComponent_ng_template_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "i", 5);
        }
        if (rf & 2) {
            var ctx_r7 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("vSrc", ctx_r7.iconSrc)("vColor", ctx_r7.color);
        }
    }
    function ActionItemComponent_ng_template_1_ng_template_2_i_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "i", 7);
        }
        if (rf & 2) {
            var ctx_r10 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵproperty("vType", ctx_r10.icon)("vColor", ctx_r10.color);
        }
    }
    function ActionItemComponent_ng_template_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, ActionItemComponent_ng_template_1_ng_template_2_i_0_Template, 1, 2, "i", 6);
        }
        if (rf & 2) {
            var ctx_r9 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r9.icon);
        }
    }
    function ActionItemComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 2);
            i0__namespace.ɵɵtemplate(1, ActionItemComponent_ng_template_1_i_1_Template, 1, 2, "i", 3);
            i0__namespace.ɵɵtemplate(2, ActionItemComponent_ng_template_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r8 = i0__namespace.ɵɵreference(3);
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("vTooltipTitle", ctx_r2.title)("disabled", ctx_r2.disabled);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.iconSrc)("ngIfElse", _r8);
        }
    }
    var ActionItemComponent = /** @class */ (function () {
        function ActionItemComponent() {
            this.color = 'primary';
            this.disabled = false;
        }
        ActionItemComponent.prototype.ngOnInit = function () { };
        ActionItemComponent.prototype.close = function () { };
        return ActionItemComponent;
    }());
    ActionItemComponent.ɵfac = function ActionItemComponent_Factory(t) { return new (t || ActionItemComponent)(); };
    ActionItemComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: ActionItemComponent, selectors: [["action-item"]], inputs: { text: "text", icon: "icon", iconSrc: "iconSrc", color: "color", title: "title", disabled: "disabled" }, decls: 3, vars: 2, consts: [["vnpt-button", "", "vType", "text", "vnpt-tooltip", "", "class", "action-item-btn", 3, "vTooltipTitle", "disabled", 4, "ngIf", "ngIfElse"], ["notext", ""], ["vnpt-button", "", "vType", "text", "vnpt-tooltip", "", 1, "action-item-btn", 3, "vTooltipTitle", "disabled"], ["vnpt-icon", "", 3, "vSrc", "vColor", 4, "ngIf", "ngIfElse"], ["elseSrc", ""], ["vnpt-icon", "", 3, "vSrc", "vColor"], ["vnpt-icon", "", 3, "vType", "vColor", 4, "ngIf"], ["vnpt-icon", "", 3, "vType", "vColor"]], template: function ActionItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ActionItemComponent_button_0_Template, 6, 5, "button", 0);
                i0__namespace.ɵɵtemplate(1, ActionItemComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.text)("ngIfElse", _r1);
            }
        }, directives: [i1__namespace.NgIf, i2__namespace.VButtonComponent, i3__namespace.ɵVTransitionPatchDirective, i4__namespace.VTooltipDirective, i5__namespace.VIconDirective], styles: [".action-item-btn[_ngcontent-%COMP%]{margin:0 5px}"] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(ActionItemComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'action-item',
                        templateUrl: './action.item.component.html',
                        styleUrls: ['./action.item.component.css'],
                    }]
            }], function () { return []; }, { text: [{
                    type: i0.Input
                }], icon: [{
                    type: i0.Input
                }], iconSrc: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }] });
    })();

    function MainContentComponent_h4_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "h4", 3);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.title);
        }
    }
    var _c0$3 = ["*"];
    var MainContentComponent = /** @class */ (function () {
        function MainContentComponent() {
        }
        MainContentComponent.prototype.ngOnInit = function () { };
        return MainContentComponent;
    }());
    MainContentComponent.ɵfac = function MainContentComponent_Factory(t) { return new (t || MainContentComponent)(); };
    MainContentComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: MainContentComponent, selectors: [["vnpt-main-content"]], inputs: { title: "title" }, ngContentSelectors: _c0$3, decls: 4, vars: 2, consts: [[1, "layout-wr"], [3, "vBordered"], ["vnpt-typography", "", "class", "mb-4 mb-md-6", 4, "ngIf"], ["vnpt-typography", "", 1, "mb-4", "mb-md-6"]], template: function MainContentComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "vnpt-card", 1);
                i0__namespace.ɵɵtemplate(2, MainContentComponent_h4_2_Template, 2, 1, "h4", 2);
                i0__namespace.ɵɵprojection(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("vBordered", false);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.title);
            }
        }, directives: [i1__namespace$1.VCardComponent, i1__namespace.NgIf, i3__namespace$2.VTypographyComponent], styles: [".close-btn[_ngcontent-%COMP%]{border:none;background:#f5f5f5;position:fixed;right:60px;padding:0 10px;margin-top:0;cursor:pointer}.close-btn[_ngcontent-%COMP%]:hover{background-color:#fafafa}.page-title[_ngcontent-%COMP%]{margin-bottom:2.2rem}"] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(MainContentComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'vnpt-main-content',
                        templateUrl: './main.content.component.html',
                        styleUrls: ['./main.content.component.css'],
                    }]
            }], null, { title: [{
                    type: i0.Input
                }] });
    })();

    function DrawerContentComponent_h4_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "h4", 2);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.title);
        }
    }
    var _c0$2 = ["*"];
    var DrawerContentComponent = /** @class */ (function () {
        function DrawerContentComponent() {
        }
        DrawerContentComponent.prototype.ngOnInit = function () { };
        return DrawerContentComponent;
    }());
    DrawerContentComponent.ɵfac = function DrawerContentComponent_Factory(t) { return new (t || DrawerContentComponent)(); };
    DrawerContentComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: DrawerContentComponent, selectors: [["vnpt-main-drawer"]], inputs: { title: "title" }, ngContentSelectors: _c0$2, decls: 3, vars: 1, consts: [[1, "drawer-content-wrapper"], ["vnpt-typography", "", "class", "page-title", 4, "ngIf"], ["vnpt-typography", "", 1, "page-title"]], template: function DrawerContentComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, DrawerContentComponent_h4_1_Template, 2, 1, "h4", 1);
                i0__namespace.ɵɵprojection(2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.title);
            }
        }, directives: [i1__namespace.NgIf, i3__namespace$2.VTypographyComponent], styles: [".drawer-content-wrapper[_ngcontent-%COMP%]{padding:30px 25px 0}.drawer-content-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{margin-bottom:25px}"] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(DrawerContentComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'vnpt-main-drawer',
                        templateUrl: './drawer.content.component.html',
                        styleUrls: ['./drawer.content.component.css'],
                    }]
            }], null, { title: [{
                    type: i0.Input
                }] });
    })();

    var ActiveUrlCheckPipe = /** @class */ (function () {
        function ActiveUrlCheckPipe() {
        }
        ActiveUrlCheckPipe.prototype.transform = function (rootvalue, value) {
            if (rootvalue) {
                if (rootvalue.startsWith(value)) {
                    if (value === '/home' && rootvalue != '/home')
                        return false;
                    return true;
                }
                return false;
            }
            return false;
        };
        return ActiveUrlCheckPipe;
    }());
    ActiveUrlCheckPipe.ɵfac = function ActiveUrlCheckPipe_Factory(t) { return new (t || ActiveUrlCheckPipe)(); };
    ActiveUrlCheckPipe.ɵpipe = i0__namespace.ɵɵdefinePipe({ name: "activeUrlCheck", type: ActiveUrlCheckPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(ActiveUrlCheckPipe, [{
                type: i0.Pipe,
                args: [{ name: 'activeUrlCheck' }]
            }], null, null);
    })();

    var Utilities = /** @class */ (function () {
        function Utilities() {
        }
        Utilities.assetUrl = function (url) {
            // @ts-ignore
            var publicPath = __webpack_public_path__;
            var publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
            var urlPrefix = url.startsWith('/') ? '' : '/';
            return "" + publicPath + publicPathSuffix + "assets" + urlPrefix + url;
        };
        return Utilities;
    }());

    var AssetUrlPipe = /** @class */ (function () {
        function AssetUrlPipe() {
        }
        AssetUrlPipe.prototype.transform = function (value) {
            return Utilities.assetUrl(value);
        };
        return AssetUrlPipe;
    }());
    AssetUrlPipe.ɵfac = function AssetUrlPipe_Factory(t) { return new (t || AssetUrlPipe)(); };
    AssetUrlPipe.ɵpipe = i0__namespace.ɵɵdefinePipe({ name: "assetUrl", type: AssetUrlPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(AssetUrlPipe, [{
                type: i0.Pipe,
                args: [{ name: 'assetUrl' }]
            }], null, null);
    })();

    function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "i", 11);
            i0__namespace.ɵɵpipe(1, "assetUrl");
        }
        if (rf & 2) {
            var item_r7 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("vSrc", item_r7.iconfont ? "" : i0__namespace.ɵɵpipeBind1(1, 3, item_r7.icon))("vType", item_r7.iconfont ? item_r7.icon : "")("vSize", "xs");
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "li", 9);
            i0__namespace.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_1_Template_li_click_0_listener() { i0__namespace.ɵɵrestoreView(_r16_1); var item_r7 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r14 = i0__namespace.ɵɵnextContext(4); return ctx_r14.onClick(item_r7); });
            i0__namespace.ɵɵpipe(1, "activeUrlCheck");
            i0__namespace.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_1_i_2_Template, 2, 5, "i", 10);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r7 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r9 = i0__namespace.ɵɵnextContext(4);
            i0__namespace.ɵɵpropertyInterpolate("routerLink", item_r7.routerLink);
            i0__namespace.ɵɵpropertyInterpolate("title", item_r7.title);
            i0__namespace.ɵɵproperty("vSelected", i0__namespace.ɵɵpipeBind2(1, 5, ctx_r9.activeRouter, item_r7.routerLink));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", item_r7.icon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(item_r7.title);
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_2_i_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "i", 11);
            i0__namespace.ɵɵpipe(1, "assetUrl");
        }
        if (rf & 2) {
            var item_r7 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("vSrc", item_r7.iconfont ? "" : i0__namespace.ɵɵpipeBind1(1, 3, item_r7.icon))("vType", item_r7.iconfont ? item_r7.icon : "")("vSize", "xs");
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "li", 12);
            i0__namespace.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_2_Template_li_click_0_listener() { i0__namespace.ɵɵrestoreView(_r22_1); var item_r7 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r20 = i0__namespace.ɵɵnextContext(4); return ctx_r20.onClick(item_r7); });
            i0__namespace.ɵɵpipe(1, "activeUrlCheck");
            i0__namespace.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_2_i_2_Template, 2, 5, "i", 10);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r7 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r10 = i0__namespace.ɵɵnextContext(4);
            i0__namespace.ɵɵpropertyInterpolate("vRouterLink", item_r7.vRouterLink);
            i0__namespace.ɵɵpropertyInterpolate("title", item_r7.title);
            i0__namespace.ɵɵproperty("vSelected", i0__namespace.ɵɵpipeBind2(1, 5, ctx_r10.activeRouter, item_r7.routerLink));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", item_r7.icon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(item_r7.title);
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_3_i_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "i", 11);
            i0__namespace.ɵɵpipe(1, "assetUrl");
        }
        if (rf & 2) {
            var item_r7 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("vSrc", item_r7.iconfont ? "" : i0__namespace.ɵɵpipeBind1(1, 3, item_r7.icon))("vType", item_r7.iconfont ? item_r7.icon : "")("vSize", "xs");
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li", 13);
            i0__namespace.ɵɵpipe(1, "activeUrlCheck");
            i0__namespace.ɵɵelementStart(2, "a", 14);
            i0__namespace.ɵɵtemplate(3, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_3_i_3_Template, 2, 5, "i", 10);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r7 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r11 = i0__namespace.ɵɵnextContext(4);
            i0__namespace.ɵɵproperty("vSelected", i0__namespace.ɵɵpipeBind2(1, 5, ctx_r11.activeRouter, item_r7.routerLink));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵpropertyInterpolate("href", item_r7.href, i0__namespace.ɵɵsanitizeUrl);
            i0__namespace.ɵɵpropertyInterpolate("title", item_r7.title);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r7.icon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(item_r7.title);
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_1_Template, 4, 8, "li", 6);
            i0__namespace.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_2_Template, 4, 8, "li", 7);
            i0__namespace.ɵɵtemplate(3, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_li_3_Template, 5, 8, "li", 8);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var item_r7 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r7.routerLink);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r7.vRouterLink);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r7.href);
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_li_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li", 5);
            i0__namespace.ɵɵelementStart(1, "ul");
            i0__namespace.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_1_ng_container_2_Template, 4, 3, "ng-container", 2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menu_r2 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵproperty("vTitle", menu_r2.title)("vIcon", menu_r2.iconfont ? menu_r2.icon : "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngForOf", menu_r2.childs);
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "i", 11);
            i0__namespace.ɵɵpipe(1, "assetUrl");
        }
        if (rf & 2) {
            var menu_r2 = i0__namespace.ɵɵnextContext(3).$implicit;
            i0__namespace.ɵɵproperty("vSrc", menu_r2.iconfont ? "" : i0__namespace.ɵɵpipeBind1(1, 3, menu_r2.icon))("vType", menu_r2.iconfont ? menu_r2.icon : "")("vSize", "xs");
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r35_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "li", 9);
            i0__namespace.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_1_Template_li_click_0_listener() { i0__namespace.ɵɵrestoreView(_r35_1); var menu_r2 = i0__namespace.ɵɵnextContext(2).$implicit; var ctx_r33 = i0__namespace.ɵɵnextContext(2); return ctx_r33.onClick(menu_r2); });
            i0__namespace.ɵɵpipe(1, "activeUrlCheck");
            i0__namespace.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_1_i_2_Template, 2, 5, "i", 10);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menu_r2 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r28 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵpropertyInterpolate("routerLink", menu_r2.routerLink);
            i0__namespace.ɵɵpropertyInterpolate("title", menu_r2.title);
            i0__namespace.ɵɵproperty("vSelected", i0__namespace.ɵɵpipeBind2(1, 5, ctx_r28.activeRouter, ctx_r28.item.routerLink));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", menu_r2.icon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(menu_r2.title);
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_2_i_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "i", 11);
            i0__namespace.ɵɵpipe(1, "assetUrl");
        }
        if (rf & 2) {
            var menu_r2 = i0__namespace.ɵɵnextContext(3).$implicit;
            i0__namespace.ɵɵproperty("vSrc", menu_r2.iconfont ? "" : i0__namespace.ɵɵpipeBind1(1, 3, menu_r2.icon))("vType", menu_r2.iconfont ? menu_r2.icon : "")("vSize", "xs");
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r41_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "li", 12);
            i0__namespace.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_2_Template_li_click_0_listener() { i0__namespace.ɵɵrestoreView(_r41_1); var menu_r2 = i0__namespace.ɵɵnextContext(2).$implicit; var ctx_r39 = i0__namespace.ɵɵnextContext(2); return ctx_r39.onClick(menu_r2); });
            i0__namespace.ɵɵpipe(1, "activeUrlCheck");
            i0__namespace.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_2_i_2_Template, 2, 5, "i", 10);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menu_r2 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r29 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵpropertyInterpolate("vRouterLink", menu_r2.vRouterLink);
            i0__namespace.ɵɵpropertyInterpolate("title", menu_r2.title);
            i0__namespace.ɵɵproperty("vSelected", i0__namespace.ɵɵpipeBind2(1, 5, ctx_r29.activeRouter, ctx_r29.item.routerLink));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", menu_r2.icon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(menu_r2.title);
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_3_i_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "i", 11);
            i0__namespace.ɵɵpipe(1, "assetUrl");
        }
        if (rf & 2) {
            var menu_r2 = i0__namespace.ɵɵnextContext(3).$implicit;
            i0__namespace.ɵɵproperty("vSrc", menu_r2.iconfont ? "" : i0__namespace.ɵɵpipeBind1(1, 3, menu_r2.icon))("vType", menu_r2.iconfont ? menu_r2.icon : "")("vSize", "xs");
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li", 13);
            i0__namespace.ɵɵpipe(1, "activeUrlCheck");
            i0__namespace.ɵɵelementStart(2, "a", 14);
            i0__namespace.ɵɵtemplate(3, SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_3_i_3_Template, 2, 5, "i", 10);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menu_r2 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r30 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("vSelected", i0__namespace.ɵɵpipeBind2(1, 5, ctx_r30.activeRouter, ctx_r30.item.routerLink));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵpropertyInterpolate("href", menu_r2.href, i0__namespace.ɵɵsanitizeUrl);
            i0__namespace.ɵɵpropertyInterpolate("title", menu_r2.title);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", menu_r2.icon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(menu_r2.title);
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_1_Template, 4, 8, "li", 6);
            i0__namespace.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_2_Template, 4, 8, "li", 7);
            i0__namespace.ɵɵtemplate(3, SubMenuComponent_ul_0_ng_container_1_ng_container_2_li_3_Template, 5, 8, "li", 8);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var menu_r2 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", menu_r2.routerLink);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", menu_r2.vRouterLink);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", menu_r2.href);
        }
    }
    function SubMenuComponent_ul_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_li_1_Template, 3, 3, "li", 3);
            i0__namespace.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 4);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var menu_r2 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", menu_r2.childs && menu_r2.childs.length > 0);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r1.menuConfig || ctx_r1.menuConfig.length <= 0);
        }
    }
    function SubMenuComponent_ul_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "ul", 1);
            i0__namespace.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_Template, 3, 2, "ng-container", 2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r0.menuConfig);
        }
    }
    var SubMenuComponent = /** @class */ (function () {
        function SubMenuComponent(router) {
            var _this = this;
            this.router = router;
            this.itemClick = new i0.EventEmitter();
            this.router.events.subscribe(function (data) {
                if (data instanceof i1$2.NavigationEnd) {
                    _this.activeRouter = data.url.toLowerCase();
                }
            });
        }
        SubMenuComponent.prototype.ngOnInit = function () { };
        SubMenuComponent.prototype.onClick = function (event) {
            this.itemClick.emit(event);
        };
        return SubMenuComponent;
    }());
    SubMenuComponent.ɵfac = function SubMenuComponent_Factory(t) { return new (t || SubMenuComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$2.Router)); };
    SubMenuComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: SubMenuComponent, selectors: [["submenu-comp"]], inputs: { menuConfig: "menuConfig" }, outputs: { itemClick: "itemClick" }, decls: 1, vars: 1, consts: [["vnpt-menu", "", "vMode", "inline", "style", "padding: 10px 2px 20px 20px;", 4, "ngIf"], ["vnpt-menu", "", "vMode", "inline", 2, "padding", "10px 2px 20px 20px"], [4, "ngFor", "ngForOf"], ["vnpt-submenu", "", "vOpen", "", 3, "vTitle", "vIcon", 4, "ngIf"], [4, "ngIf"], ["vnpt-submenu", "", "vOpen", "", 3, "vTitle", "vIcon"], ["vnpt-menu-item", "", 3, "routerLink", "title", "vSelected", "click", 4, "ngIf"], ["vnpt-menu-item", "", 3, "vRouterLink", "title", "vSelected", "click", 4, "ngIf"], ["vnpt-menu-item", "", 3, "vSelected", 4, "ngIf"], ["vnpt-menu-item", "", 3, "routerLink", "title", "vSelected", "click"], ["vnpt-icon", "", 3, "vSrc", "vType", "vSize", 4, "ngIf"], ["vnpt-icon", "", 3, "vSrc", "vType", "vSize"], ["vnpt-menu-item", "", 3, "vRouterLink", "title", "vSelected", "click"], ["vnpt-menu-item", "", 3, "vSelected"], ["target", "_blank", 3, "href", "title"]], template: function SubMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, SubMenuComponent_ul_0_Template, 2, 1, "ul", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.menuConfig && ctx.menuConfig.length > 0);
            }
        }, directives: [i1__namespace.NgIf, i3__namespace$3.VMenuDirective, i1__namespace.NgForOf, i3__namespace.ɵVTransitionPatchDirective, i3__namespace$3.VSubMenuComponent, i3__namespace$3.VMenuItemDirective, i1__namespace$2.RouterLink, i5__namespace.VIconDirective], pipes: [ActiveUrlCheckPipe, AssetUrlPipe], styles: ["[_nghost-%COMP%]     .oneui-menu-inline .oneui-menu-item{margin-bottom:15px;margin-top:6px;padding-right:35px;padding-left:20px!important}[_nghost-%COMP%]     .oneui-menu-inline .oneui-menu-item i{margin-right:12px}[_nghost-%COMP%]     .oneui-menu:not(.oneui-menu-horizontal) .oneui-menu-item-selected{background-color:#e7e8e9}[_nghost-%COMP%]     .oneui-menu-inline>.oneui-menu-submenu>.oneui-menu-submenu-title{font-weight:600;padding-left:10px!important}"] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(SubMenuComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'submenu-comp',
                        templateUrl: './menu.component.html',
                        styleUrls: ['./menu.component.css'],
                    }]
            }], function () { return [{ type: i1__namespace$2.Router }]; }, { menuConfig: [{
                    type: i0.Input
                }], itemClick: [{
                    type: i0.Output
                }] });
    })();

    var ChangeDateTimePipe = /** @class */ (function () {
        function ChangeDateTimePipe() {
        }
        ChangeDateTimePipe.prototype.transform = function (value) {
            var reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
            var dateArray = reggie.exec(value);
            var dataObject = new Date(+dateArray[1], +dateArray[2] - 1, +dateArray[3], +dateArray[4], +dateArray[5], +dateArray[6]);
            var timenow = new Date();
            var date;
            var month;
            var hour;
            var minute;
            var second;
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
        };
        return ChangeDateTimePipe;
    }());
    ChangeDateTimePipe.ɵfac = function ChangeDateTimePipe_Factory(t) { return new (t || ChangeDateTimePipe)(); };
    ChangeDateTimePipe.ɵpipe = i0__namespace.ɵɵdefinePipe({ name: "changeDateTime", type: ChangeDateTimePipe, pure: true });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(ChangeDateTimePipe, [{
                type: i0.Pipe,
                args: [{ name: 'changeDateTime' }]
            }], null, null);
    })();

    function ToolbarItemComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 2);
            i0__namespace.ɵɵelement(1, "i", 3);
            i0__namespace.ɵɵpipe(2, "assetUrl");
            i0__namespace.ɵɵelementStart(3, "span");
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("title", ctx_r0.title);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("vSrc", ctx_r0.iconfont ? "" : i0__namespace.ɵɵpipeBind1(2, 5, ctx_r0.icon))("vType", ctx_r0.iconfont ? ctx_r0.icon : "")("vSize", "lg");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.title);
        }
    }
    function ToolbarItemComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 2);
            i0__namespace.ɵɵelement(1, "i", 4);
            i0__namespace.ɵɵpipe(2, "assetUrl");
            i0__namespace.ɵɵelementStart(3, "span");
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("title", ctx_r1.title);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("vSrc", ctx_r1.iconfont ? "" : i0__namespace.ɵɵpipeBind1(2, 4, ctx_r1.icon))("vType", ctx_r1.iconfont ? ctx_r1.icon : "");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(ctx_r1.title);
        }
    }
    function ToolbarItemComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 5);
            i0__namespace.ɵɵelement(1, "i", 3);
            i0__namespace.ɵɵpipe(2, "assetUrl");
            i0__namespace.ɵɵelementStart(3, "span");
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("title", ctx_r2.title);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("vSrc", ctx_r2.iconfont ? "" : i0__namespace.ɵɵpipeBind1(2, 5, ctx_r2.icon))("vType", ctx_r2.iconfont ? ctx_r2.icon : "")("vSize", "xs");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(ctx_r2.title);
        }
    }
    var ToolbarItemComponent = /** @class */ (function () {
        function ToolbarItemComponent() {
            this.type = 'md';
        }
        ToolbarItemComponent.prototype.ngOnInit = function () { };
        return ToolbarItemComponent;
    }());
    ToolbarItemComponent.ɵfac = function ToolbarItemComponent_Factory(t) { return new (t || ToolbarItemComponent)(); };
    ToolbarItemComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: ToolbarItemComponent, selectors: [["toolbar-item"]], inputs: { type: "type", title: "title", icon: "icon", iconfont: "iconfont" }, decls: 3, vars: 3, consts: [["vnpt-button", "", "vType", "text", "class", "toolbar-btn", 3, "title", 4, "ngIf"], ["vnpt-button", "", "vType", "text", "class", "toolbar-btn-sm", 3, "title", 4, "ngIf"], ["vnpt-button", "", "vType", "text", 1, "toolbar-btn", 3, "title"], ["vnpt-icon", "", 3, "vSrc", "vType", "vSize"], ["vnpt-icon", "", 3, "vSrc", "vType"], ["vnpt-button", "", "vType", "text", 1, "toolbar-btn-sm", 3, "title"]], template: function ToolbarItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ToolbarItemComponent_button_0_Template, 5, 7, "button", 0);
                i0__namespace.ɵɵtemplate(1, ToolbarItemComponent_button_1_Template, 5, 6, "button", 0);
                i0__namespace.ɵɵtemplate(2, ToolbarItemComponent_button_2_Template, 5, 7, "button", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.type === "lg");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.type === "md");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.type === "sm");
            }
        }, directives: [i1__namespace.NgIf, i2__namespace.VButtonComponent, i3__namespace.ɵVTransitionPatchDirective, i5__namespace.VIconDirective], pipes: [AssetUrlPipe], styles: [".toolbar-btn[_ngcontent-%COMP%]{height:100%;margin:0 4px;max-width:116px;vertical-align:middle}.toolbar-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .toolbar-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;display:block}.toolbar-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0;margin-top:5px;font-size:12px;text-overflow:ellipsis;overflow:hidden}.toolbar-btn-sm[_ngcontent-%COMP%]{height:100%;margin:0 4px;max-width:100px;vertical-align:middle}.toolbar-btn-sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .toolbar-btn-sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;display:block}.toolbar-btn-sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0;margin-top:5px;font-size:11px;text-overflow:ellipsis;overflow:hidden}"] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(ToolbarItemComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'toolbar-item',
                        templateUrl: './toolbar.item.component.html',
                        styleUrls: ['./toolbar.item.component.css'],
                    }]
            }], null, { type: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], icon: [{
                    type: i0.Input
                }], iconfont: [{
                    type: i0.Input
                }] });
    })();

    function ToolbarComponent_vnpt_affix_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function ToolbarComponent_vnpt_affix_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "vnpt-affix", 4);
            i0__namespace.ɵɵtemplate(1, ToolbarComponent_vnpt_affix_0_ng_container_1_Template, 1, 0, "ng-container", 5);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            var _r5 = i0__namespace.ɵɵreference(6);
            i0__namespace.ɵɵproperty("vOffsetTop", ctx_r0.fixAtTop);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", _r5);
        }
    }
    function ToolbarComponent_ng_template_1_vnpt_affix_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function ToolbarComponent_ng_template_1_vnpt_affix_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "vnpt-affix", 7);
            i0__namespace.ɵɵtemplate(1, ToolbarComponent_ng_template_1_vnpt_affix_0_ng_container_1_Template, 1, 0, "ng-container", 5);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0__namespace.ɵɵnextContext(2);
            var _r5 = i0__namespace.ɵɵreference(6);
            i0__namespace.ɵɵproperty("vOffsetBottom", ctx_r8.fixAtBottom);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", _r5);
        }
    }
    function ToolbarComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, ToolbarComponent_ng_template_1_vnpt_affix_0_Template, 2, 2, "vnpt-affix", 6);
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            var _r3 = i0__namespace.ɵɵreference(4);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.fixAtBottom)("ngIfElse", _r3);
        }
    }
    function ToolbarComponent_ng_template_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function ToolbarComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "vnpt-affix", 4);
            i0__namespace.ɵɵtemplate(1, ToolbarComponent_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 5);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r5 = i0__namespace.ɵɵreference(6);
            i0__namespace.ɵɵproperty("vOffsetTop", 85);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", _r5);
        }
    }
    function ToolbarComponent_ng_template_5_ng_container_2_toolbar_item_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "toolbar-item", 19);
            i0__namespace.ɵɵlistener("click", function ToolbarComponent_ng_template_5_ng_container_2_toolbar_item_1_Template_toolbar_item_click_0_listener() { i0__namespace.ɵɵrestoreView(_r23_1); var item_r17 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r21 = i0__namespace.ɵɵnextContext(2); return ctx_r21.onItemClick(item_r17); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r17 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r19 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("title", item_r17.title)("icon", item_r17.icon)("iconfont", item_r17.iconfont)("type", ctx_r19.isCollapse ? "sm" : "md");
        }
    }
    function ToolbarComponent_ng_template_5_ng_container_2_vnpt_divider_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "vnpt-divider", 20);
        }
    }
    function ToolbarComponent_ng_template_5_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, ToolbarComponent_ng_template_5_ng_container_2_toolbar_item_1_Template, 1, 4, "toolbar-item", 17);
            i0__namespace.ɵɵtemplate(2, ToolbarComponent_ng_template_5_ng_container_2_vnpt_divider_2_Template, 1, 0, "vnpt-divider", 18);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var item_r17 = ctx.$implicit;
            var ctx_r11 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r17.title || item_r17.icon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !item_r17.title && !item_r17.icon && ctx_r11.screenSize > 992);
        }
    }
    function ToolbarComponent_ng_template_5_button_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 21);
            i0__namespace.ɵɵelement(1, "i", 22);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r13 = i0__namespace.ɵɵreference(6);
            i0__namespace.ɵɵproperty("vDropdownMenu", _r13);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("vType", "BulletedListBullet")("vSize", "md");
        }
    }
    function ToolbarComponent_ng_template_5_li_8_toolbar_item_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r30_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "toolbar-item", 19);
            i0__namespace.ɵɵlistener("click", function ToolbarComponent_ng_template_5_li_8_toolbar_item_1_Template_toolbar_item_click_0_listener() { i0__namespace.ɵɵrestoreView(_r30_1); var item_r25 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r28 = i0__namespace.ɵɵnextContext(2); return ctx_r28.onItemClick(item_r25); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r25 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r27 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("title", item_r25.title)("icon", item_r25.icon)("iconfont", item_r25.iconfont)("type", ctx_r27.isCollapse ? "sm" : "md");
        }
    }
    function ToolbarComponent_ng_template_5_li_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li", 23);
            i0__namespace.ɵɵtemplate(1, ToolbarComponent_ng_template_5_li_8_toolbar_item_1_Template, 1, 4, "toolbar-item", 17);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r25 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r25.title || item_r25.icon);
        }
    }
    function ToolbarComponent_ng_template_5_button_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r33_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 24);
            i0__namespace.ɵɵlistener("click", function ToolbarComponent_ng_template_5_button_9_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r33_1); var ctx_r32 = i0__namespace.ɵɵnextContext(2); return ctx_r32.tonggleCollapse(); });
            i0__namespace.ɵɵelement(1, "i", 25);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("vSize", "xs")("vColor", "primary");
        }
    }
    function ToolbarComponent_ng_template_5_button_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r35_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 26);
            i0__namespace.ɵɵlistener("click", function ToolbarComponent_ng_template_5_button_10_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r35_1); var ctx_r34 = i0__namespace.ɵɵnextContext(2); return ctx_r34.tonggleCollapse(); });
            i0__namespace.ɵɵelement(1, "i", 27);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("vSize", "xs")("vColor", "primary");
        }
    }
    var _c0$1 = function (a1) { return { "toolbar-wrapper": true, "collapse": a1 }; };
    var _c1$1 = function (a0) { return { "background-color": a0 }; };
    function ToolbarComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 8);
            i0__namespace.ɵɵelementStart(1, "div", 9);
            i0__namespace.ɵɵtemplate(2, ToolbarComponent_ng_template_5_ng_container_2_Template, 3, 2, "ng-container", 10);
            i0__namespace.ɵɵprojection(3);
            i0__namespace.ɵɵtemplate(4, ToolbarComponent_ng_template_5_button_4_Template, 2, 3, "button", 11);
            i0__namespace.ɵɵelementStart(5, "vnpt-dropdown-menu", null, 12);
            i0__namespace.ɵɵelementStart(7, "ul", 13);
            i0__namespace.ɵɵtemplate(8, ToolbarComponent_ng_template_5_li_8_Template, 2, 1, "li", 14);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(9, ToolbarComponent_ng_template_5_button_9_Template, 2, 2, "button", 15);
            i0__namespace.ɵɵtemplate(10, ToolbarComponent_ng_template_5_button_10_Template, 2, 2, "button", 16);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(8, _c0$1, ctx_r6.isCollapse))("ngStyle", i0__namespace.ɵɵpureFunction1(10, _c1$1, ctx_r6.bgColor ? ctx_r6.bgColor : ""));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("vSpan", 24);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r6.config.slice(0, ctx_r6.sliceNum));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r6.config.length > ctx_r6.sliceNum);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r6.config.slice(ctx_r6.sliceNum, ctx_r6.config.length));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r6.isCollapse);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r6.isCollapse);
        }
    }
    var _c2 = ["*"];
    var ToolbarComponent = /** @class */ (function () {
        function ToolbarComponent() {
            this.isCollapse = false;
            this.sliceNum = 15;
            this.itemClick = new i0.EventEmitter();
        }
        ToolbarComponent.prototype.onResize = function (event) {
            this.screenSize = event.target.innerWidth;
            this.calculateScreen();
        };
        ToolbarComponent.prototype.ngOnInit = function () {
            setTimeout(function () {
                window.dispatchEvent(new Event('resize'));
            }, 300);
        };
        ToolbarComponent.prototype.calculateScreen = function () {
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
        };
        ToolbarComponent.prototype.tonggleCollapse = function () {
            this.isCollapse = !this.isCollapse;
        };
        ToolbarComponent.prototype.onItemClick = function (item) {
            this.itemClick.emit(item);
        };
        return ToolbarComponent;
    }());
    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
    ToolbarComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: ToolbarComponent, selectors: [["app-toolbar"]], hostBindings: function ToolbarComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("resize", function ToolbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0__namespace.ɵɵresolveWindow);
            }
        }, inputs: { config: "config", fixAtTop: "fixAtTop", fixAtBottom: "fixAtBottom", bgColor: "bgColor", isCollapse: "isCollapse" }, outputs: { itemClick: "itemClick" }, ngContentSelectors: _c2, decls: 7, vars: 2, consts: [[3, "vOffsetTop", 4, "ngIf", "ngIfElse"], ["elseFixAtTop", ""], ["default", ""], ["content", ""], [3, "vOffsetTop"], [4, "ngTemplateOutlet"], [3, "vOffsetBottom", 4, "ngIf", "ngIfElse"], [3, "vOffsetBottom"], ["vnpt-row", "", 3, "ngClass", "ngStyle"], ["vnpt-col", "", 3, "vSpan"], [4, "ngFor", "ngForOf"], ["vnpt-button", "", "vType", "text", "class", "toolbar-more-btn", "vnpt-dropdown", "", 3, "vDropdownMenu", 4, "ngIf"], ["more", "vDropdownMenu"], ["vnpt-menu", "", "vSelectable", ""], ["vnpt-menu-item", "", "style", "text-align: center;", 4, "ngFor", "ngForOf"], ["vnpt-button", "", "vType", "text", "class", "toolbar-btn-collapse", "title", "Thu g\u1ECDn", 3, "click", 4, "ngIf"], ["vnpt-button", "", "vType", "text", "class", "toolbar-btn-collapse", "title", "M\u1EDF r\u1ED9ng", 3, "click", 4, "ngIf"], [3, "title", "icon", "iconfont", "type", "click", 4, "ngIf"], ["vType", "vertical", 4, "ngIf"], [3, "title", "icon", "iconfont", "type", "click"], ["vType", "vertical"], ["vnpt-button", "", "vType", "text", "vnpt-dropdown", "", 1, "toolbar-more-btn", 3, "vDropdownMenu"], ["vnpt-icon", "", 3, "vType", "vSize"], ["vnpt-menu-item", "", 2, "text-align", "center"], ["vnpt-button", "", "vType", "text", "title", "Thu g\u1ECDn", 1, "toolbar-btn-collapse", 3, "click"], ["vnpt-icon", "", "vType", "ChevronUp", 3, "vSize", "vColor"], ["vnpt-button", "", "vType", "text", "title", "M\u1EDF r\u1ED9ng", 1, "toolbar-btn-collapse", 3, "click"], ["vnpt-icon", "", "vType", "ChevronDown", 3, "vSize", "vColor"]], template: function ToolbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵtemplate(0, ToolbarComponent_vnpt_affix_0_Template, 2, 2, "vnpt-affix", 0);
                i0__namespace.ɵɵtemplate(1, ToolbarComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(3, ToolbarComponent_ng_template_3_Template, 2, 2, "ng-template", null, 2, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(5, ToolbarComponent_ng_template_5_Template, 11, 12, "ng-template", null, 3, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.fixAtTop)("ngIfElse", _r1);
            }
        }, directives: [i1__namespace.NgIf, i2__namespace$1.VAffixComponent, i1__namespace.NgTemplateOutlet, i3__namespace$1.VRowDirective, i1__namespace.NgClass, i1__namespace.NgStyle, i3__namespace$1.VColDirective, i1__namespace.NgForOf, i4__namespace$1.VDropdownMenuComponent, i3__namespace$3.VMenuDirective, ToolbarItemComponent, i7__namespace.VDividerComponent, i2__namespace.VButtonComponent, i3__namespace.ɵVTransitionPatchDirective, i4__namespace$1.VDropdownButtonDirective, i4__namespace$1.VDropDownDirective, i5__namespace.VIconDirective, i3__namespace$3.VMenuItemDirective], styles: [".toolbar-wrapper[_ngcontent-%COMP%]{background-color:#f5f5f5;z-index:99;padding:0 30px;height:66px;position:relative}.toolbar-wrapper.collapse[_ngcontent-%COMP%]{height:50px}[_nghost-%COMP%]     .oneui-divider-vertical{height:32px;margin-left:16px;margin-right:16px}.toolbar-btn-collapse[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:2px}[_nghost-%COMP%]     .toolbar-wrapper.collapse .oneui-divider-vertical{height:24px;margin-top:3px;margin-left:8px;margin-right:8px}.toolbar-more-btn[_ngcontent-%COMP%]{text-align:center;height:100%;width:40px;vertical-align:middle;padding-left:18px}"] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(ToolbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'app-toolbar',
                        templateUrl: './toolbar.component.html',
                        styleUrls: ['./toolbar.component.css'],
                    }]
            }], null, { config: [{
                    type: i0.Input
                }], fixAtTop: [{
                    type: i0.Input
                }], fixAtBottom: [{
                    type: i0.Input
                }], bgColor: [{
                    type: i0.Input
                }], isCollapse: [{
                    type: i0.Input
                }], itemClick: [{
                    type: i0.Output
                }], onResize: [{
                    type: i0.HostListener,
                    args: ['window:resize', ['$event']]
                }] });
    })();

    var _c0 = function (a0) { return { "background-color": a0 }; };
    var _c1 = ["*"];
    var BottombarComponent = /** @class */ (function () {
        function BottombarComponent() {
            this.position = 0;
            this.bgColor = '#fff';
        }
        BottombarComponent.prototype.ngOnInit = function () {
            setTimeout(function () {
                window.dispatchEvent(new Event('resize'));
            }, 300);
        };
        return BottombarComponent;
    }());
    BottombarComponent.ɵfac = function BottombarComponent_Factory(t) { return new (t || BottombarComponent)(); };
    BottombarComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: BottombarComponent, selectors: [["bottom-bar"]], inputs: { position: "position", bgColor: "bgColor" }, ngContentSelectors: _c1, decls: 4, vars: 4, consts: [[3, "vOffsetBottom"], ["vnpt-row", "", 1, "fixed-bottom-bar", 3, "ngStyle"], ["vnpt-col", "", "vSpan", "24"]], template: function BottombarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "vnpt-affix", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵprojection(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("vOffsetBottom", ctx.position);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngStyle", i0__namespace.ɵɵpureFunction1(2, _c0, ctx.bgColor));
            }
        }, directives: [i2__namespace$1.VAffixComponent, i3__namespace$1.VRowDirective, i1__namespace.NgStyle, i3__namespace$1.VColDirective], styles: [""] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(BottombarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bottom-bar',
                        templateUrl: './bottombar.component.html',
                        styleUrls: ['./bottombar.component.css'],
                    }]
            }], function () { return []; }, { position: [{
                    type: i0.Input
                }], bgColor: [{
                    type: i0.Input
                }] });
    })();

    var CommonLibraryModule = /** @class */ (function () {
        function CommonLibraryModule() {
        }
        CommonLibraryModule.forRoot = function () {
            return {
                ngModule: CommonLibraryModule
            };
        };
        return CommonLibraryModule;
    }());
    CommonLibraryModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: CommonLibraryModule });
    CommonLibraryModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function CommonLibraryModule_Factory(t) { return new (t || CommonLibraryModule)(); }, providers: [], imports: [[
                i1.CommonModule,
                i3$1.VGridModule,
                i2$1.VAffixModule,
                i2.VButtonModule,
                i5.VIconModule,
                i4.VToolTipModule,
                i3$2.VTypographyModule,
                i1$1.VCardModule,
                i3$3.VMenuModule,
                i1$2.RouterModule,
                i7.VDividerModule,
                list.VListModule,
                layout.VLayoutModule,
                i4$1.VDropDownModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CommonLibraryModule, { declarations: [BlankPageComponent,
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
                BottombarComponent], imports: [i1.CommonModule,
                i3$1.VGridModule,
                i2$1.VAffixModule,
                i2.VButtonModule,
                i5.VIconModule,
                i4.VToolTipModule,
                i3$2.VTypographyModule,
                i1$1.VCardModule,
                i3$3.VMenuModule,
                i1$2.RouterModule,
                i7.VDividerModule,
                list.VListModule,
                layout.VLayoutModule,
                i4$1.VDropDownModule], exports: [BlankPageComponent,
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
                BottombarComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(CommonLibraryModule, [{
                type: i0.NgModule,
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
                            i1.CommonModule,
                            i3$1.VGridModule,
                            i2$1.VAffixModule,
                            i2.VButtonModule,
                            i5.VIconModule,
                            i4.VToolTipModule,
                            i3$2.VTypographyModule,
                            i1$1.VCardModule,
                            i3$3.VMenuModule,
                            i1$2.RouterModule,
                            i7.VDividerModule,
                            list.VListModule,
                            layout.VLayoutModule,
                            i4$1.VDropDownModule,
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
            }], null, null);
    })();

    var MyValidator = /** @class */ (function () {
        function MyValidator() {
        }
        MyValidator.DemoValidator = function (control) {
            return demoValid(control);
        };
        return MyValidator;
    }());
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

    exports.ActionItemComponent = ActionItemComponent;
    exports.ActiveUrlCheckPipe = ActiveUrlCheckPipe;
    exports.AssetUrlPipe = AssetUrlPipe;
    exports.BlankPageComponent = BlankPageComponent;
    exports.BottombarComponent = BottombarComponent;
    exports.ChangeDateTimePipe = ChangeDateTimePipe;
    exports.CommonLibraryModule = CommonLibraryModule;
    exports.ContexualActionBarComponent = ContexualActionBarComponent;
    exports.DrawerContentComponent = DrawerContentComponent;
    exports.MainContentComponent = MainContentComponent;
    exports.MyValidator = MyValidator;
    exports.SubMenuComponent = SubMenuComponent;
    exports.ToolbarComponent = ToolbarComponent;
    exports.ToolbarItemComponent = ToolbarItemComponent;
    exports.Utilities = Utilities;
    exports.demoValid = demoValid;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=commonLibrary.umd.js.map

/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './stocks';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../providers/allstocks-service';
import * as import9 from 'ionic-angular/components/loading/loading';
import * as import10 from 'ionic-angular/navigation/nav-controller';
import * as import11 from 'ionic-angular/navigation/nav-params';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from 'ionic-angular/components/toolbar/toolbar';
import * as import15 from 'ionic-angular/components/navbar/navbar';
import * as import16 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import17 from 'ionic-angular/components/content/content';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/navigation/view-controller';
import * as import22 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import23 from 'ionic-angular/components/app/app';
import * as import24 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import25 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import26 from 'ionic-angular/util/keyboard';
import * as import27 from '@angular/core/src/zone/ng_zone';
import * as import28 from 'ionic-angular/components/tabs/tabs';
import * as import29 from '@angular/core/src/linker/template_ref';
import * as import30 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import31 from 'ionic-angular/components/card/card';
import * as import32 from 'ionic-angular/components/grid/grid';
import * as import33 from 'ionic-angular/components/icon/icon';
var renderType_StocksPage_Host = null;
var _View_StocksPage_Host0 = (function (_super) {
    __extends(_View_StocksPage_Host0, _super);
    function _View_StocksPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_StocksPage_Host0, renderType_StocksPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_StocksPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-stocks', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_StocksPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._StocksPage_0_4 = new import3.StocksPage(this.parentInjector.get(import8.AllStocksService), this.parentInjector.get(import9.LoadingController), this.parentInjector.get(import10.NavController), this.parentInjector.get(import11.NavParams));
        this._appEl_0.initComponent(this._StocksPage_0_4, [], compView_0);
        compView_0.create(this._StocksPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_StocksPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.StocksPage) && (0 === requestNodeIndex))) {
            return this._StocksPage_0_4;
        }
        return notFoundResult;
    };
    return _View_StocksPage_Host0;
}(import1.AppView));
function viewFactory_StocksPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_StocksPage_Host === null)) {
        (renderType_StocksPage_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_StocksPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var StocksPageNgFactory = new import13.ComponentFactory('page-stocks', viewFactory_StocksPage_Host0, import3.StocksPage);
var styles_StocksPage = [];
var renderType_StocksPage = null;
var _View_StocksPage0 = (function (_super) {
    __extends(_View_StocksPage0, _super);
    function _View_StocksPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_StocksPage0, renderType_StocksPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_StocksPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import14.Header(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import21.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n  ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_3, 'color', 'hometab');
        this._appEl_3 = new import2.AppElement(3, 1, this, this._el_3);
        var compView_3 = import22.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import15.Navbar(this.parentInjector.get(import23.App), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import10.NavController, null), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._el_5 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_5 = new import2.AppElement(5, 3, this, this._el_5);
        var compView_5 = import24.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(5), this._appEl_5);
        this._ToolbarTitle_5_4 = new import16.ToolbarTitle(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import14.Toolbar, null), this._Navbar_3_4);
        this._appEl_5.initComponent(this._ToolbarTitle_5_4, [], compView_5);
        this._text_6 = this.renderer.createText(null, 'Stocks', null);
        compView_5.create(this._ToolbarTitle_5_4, [[].concat([this._text_6])], null);
        this._text_7 = this.renderer.createText(null, '\n  ', null);
        compView_3.create(this._Navbar_3_4, [
            [],
            [],
            [],
            [].concat([
                this._text_4,
                this._el_5,
                this._text_7
            ])
        ], null);
        this._text_8 = this.renderer.createText(this._el_1, '\n', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_10 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'home-background');
        this.renderer.setElementAttribute(this._el_10, 'padding', '');
        this._appEl_10 = new import2.AppElement(10, null, this, this._el_10);
        var compView_10 = import25.viewFactory_Content0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Content_10_4 = new import17.Content(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import23.App), this.parentInjector.get(import26.Keyboard), this.parentInjector.get(import27.NgZone), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import28.Tabs, null));
        this._appEl_10.initComponent(this._Content_10_4, [], compView_10);
        this._text_11 = this.renderer.createText(null, '\n', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_12 = new import2.AppElement(12, 10, this, this._anchor_12);
        this._TemplateRef_12_5 = new import29.TemplateRef_(this._appEl_12, viewFactory_StocksPage1);
        this._NgFor_12_6 = new import18.NgFor(this._appEl_12.vcRef, this._TemplateRef_12_5, this.parentInjector.get(import30.IterableDiffers), this.ref);
        this._text_13 = this.renderer.createText(null, '\n', null);
        compView_10.create(this._Content_10_4, [
            [],
            [].concat([
                this._text_11,
                this._appEl_12,
                this._text_13
            ]),
            []
        ], null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n  \n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._anchor_12,
            this._text_13,
            this._text_14
        ], [], []);
        return null;
    };
    _View_StocksPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._ToolbarTitle_5_4;
        }
        if (((token === import15.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Navbar_3_4;
        }
        if (((token === import14.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Header_1_3;
        }
        if (((token === import29.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import18.NgFor) && (12 === requestNodeIndex))) {
            return this._NgFor_12_6;
        }
        if (((token === import17.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Content_10_4;
        }
        return notFoundResult;
    };
    _View_StocksPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        var currVal_0 = 'hometab';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Navbar_3_4.color = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_10_4.ngOnInit();
        }
        changes = null;
        var currVal_4 = this.context.stockData;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgFor_12_6.ngForOf = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._NgFor_12_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_12_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = this._Navbar_3_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Navbar_3_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Content_10_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_10, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.ngAfterViewInit();
            }
        }
    };
    _View_StocksPage0.prototype.destroyInternal = function () {
        this._Content_10_4.ngOnDestroy();
    };
    return _View_StocksPage0;
}(import1.AppView));
export function viewFactory_StocksPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_StocksPage === null)) {
        (renderType_StocksPage = viewUtils.createRenderComponentType('/Users/sivasakthisoftwares/Desktop/Android/ionicdashboard/.tmp/pages/stocks/stocks.html', 0, import12.ViewEncapsulation.None, styles_StocksPage, {}));
    }
    return new _View_StocksPage0(viewUtils, parentInjector, declarationEl);
}
var _View_StocksPage1 = (function (_super) {
    __extends(_View_StocksPage1, _super);
    function _View_StocksPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_StocksPage1, renderType_StocksPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_StocksPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-card', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'card-round');
        this._Card_0_3 = new import31.Card(this.parent.parentInjector.get(import19.Config), new import20.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-card-header', null);
        this._CardHeader_2_3 = new import31.CardHeader();
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = this.renderer.createElement(this._el_0, 'ion-card-content', null);
        this._CardContent_8_3 = new import31.CardContent();
        this._text_9 = this.renderer.createText(this._el_8, '\n      ', null);
        this._el_10 = this.renderer.createElement(this._el_8, 'ion-grid', null);
        this._Grid_10_3 = new import32.Grid();
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'ion-row', null);
        this._Row_12_3 = new import32.Row();
        this._text_13 = this.renderer.createText(this._el_12, '\n          ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_14, 'width-50', '');
        this._Col_14_3 = new import32.Col();
        this._text_15 = this.renderer.createText(this._el_14, '\n            ', null);
        this._el_16 = this.renderer.createElement(this._el_14, 'h2', null);
        this._text_17 = this.renderer.createText(this._el_16, 'Closing Qty', null);
        this._text_18 = this.renderer.createText(this._el_14, '\n            ', null);
        this._el_19 = this.renderer.createElement(this._el_14, 'span', null);
        this._el_20 = this.renderer.createElement(this._el_19, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'card-titler');
        this.renderer.setElementAttribute(this._el_20, 'name', 'pie');
        this.renderer.setElementAttribute(this._el_20, 'role', 'img');
        this._Icon_20_3 = new import33.Icon(this.parent.parentInjector.get(import19.Config), new import20.ElementRef(this._el_20), this.renderer);
        this._text_21 = this.renderer.createText(this._el_20, '', null);
        this._text_22 = this.renderer.createText(this._el_14, '\n          ', null);
        this._text_23 = this.renderer.createText(this._el_12, '\n          ', null);
        this._el_24 = this.renderer.createElement(this._el_12, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_24, 'width-50', '');
        this._Col_24_3 = new import32.Col();
        this._text_25 = this.renderer.createText(this._el_24, '\n            ', null);
        this._el_26 = this.renderer.createElement(this._el_24, 'h2', null);
        this._text_27 = this.renderer.createText(this._el_26, 'Closing Value', null);
        this._text_28 = this.renderer.createText(this._el_24, '\n            ', null);
        this._el_29 = this.renderer.createElement(this._el_24, 'span', null);
        this._el_30 = this.renderer.createElement(this._el_29, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_30, 'class', 'card-titler');
        this.renderer.setElementAttribute(this._el_30, 'name', 'podium');
        this.renderer.setElementAttribute(this._el_30, 'role', 'img');
        this._Icon_30_3 = new import33.Icon(this.parent.parentInjector.get(import19.Config), new import20.ElementRef(this._el_30), this.renderer);
        this._text_31 = this.renderer.createText(this._el_30, '', null);
        this._text_32 = this.renderer.createText(this._el_24, '\n          ', null);
        this._text_33 = this.renderer.createText(this._el_12, '\n        ', null);
        this._text_34 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_35 = this.renderer.createElement(this._el_10, 'ion-row', null);
        this._Row_35_3 = new import32.Row();
        this._text_36 = this.renderer.createText(this._el_35, '\n          ', null);
        this._el_37 = this.renderer.createElement(this._el_35, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_37, 'width-50', '');
        this._Col_37_3 = new import32.Col();
        this._text_38 = this.renderer.createText(this._el_37, '\n            ', null);
        this._el_39 = this.renderer.createElement(this._el_37, 'h2', null);
        this._text_40 = this.renderer.createText(this._el_39, 'Sales Value', null);
        this._text_41 = this.renderer.createText(this._el_37, '\n            ', null);
        this._el_42 = this.renderer.createElement(this._el_37, 'span', null);
        this._el_43 = this.renderer.createElement(this._el_42, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_43, 'class', 'card-titler');
        this.renderer.setElementAttribute(this._el_43, 'name', 'stats');
        this.renderer.setElementAttribute(this._el_43, 'role', 'img');
        this._Icon_43_3 = new import33.Icon(this.parent.parentInjector.get(import19.Config), new import20.ElementRef(this._el_43), this.renderer);
        this._text_44 = this.renderer.createText(this._el_43, '', null);
        this._text_45 = this.renderer.createText(this._el_37, '\n          ', null);
        this._text_46 = this.renderer.createText(this._el_35, '\n          ', null);
        this._el_47 = this.renderer.createElement(this._el_35, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_47, 'width-50', '');
        this._Col_47_3 = new import32.Col();
        this._text_48 = this.renderer.createText(this._el_47, '\n            ', null);
        this._el_49 = this.renderer.createElement(this._el_47, 'h2', null);
        this._text_50 = this.renderer.createText(this._el_49, 'Profit', null);
        this._text_51 = this.renderer.createText(this._el_47, '\n            ', null);
        this._el_52 = this.renderer.createElement(this._el_47, 'span', null);
        this._el_53 = this.renderer.createElement(this._el_52, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_53, 'class', 'card-titler');
        this.renderer.setElementAttribute(this._el_53, 'name', 'ribbon');
        this.renderer.setElementAttribute(this._el_53, 'role', 'img');
        this._Icon_53_3 = new import33.Icon(this.parent.parentInjector.get(import19.Config), new import20.ElementRef(this._el_53), this.renderer);
        this._text_54 = this.renderer.createText(this._el_53, '', null);
        this._text_55 = this.renderer.createText(this._el_47, '\n          ', null);
        this._text_56 = this.renderer.createText(this._el_35, '\n        ', null);
        this._text_57 = this.renderer.createText(this._el_10, '\n      ', null);
        this._text_58 = this.renderer.createText(this._el_8, '\n    ', null);
        this._text_59 = this.renderer.createText(this._el_0, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._text_51,
            this._el_52,
            this._el_53,
            this._text_54,
            this._text_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._text_59
        ], [], []);
        return null;
    };
    _View_StocksPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import31.CardHeader) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._CardHeader_2_3;
        }
        if (((token === import33.Icon) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Icon_20_3;
        }
        if (((token === import32.Col) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._Col_14_3;
        }
        if (((token === import33.Icon) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._Icon_30_3;
        }
        if (((token === import32.Col) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._Col_24_3;
        }
        if (((token === import32.Row) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Row_12_3;
        }
        if (((token === import33.Icon) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._Icon_43_3;
        }
        if (((token === import32.Col) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._Col_37_3;
        }
        if (((token === import33.Icon) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 54)))) {
            return this._Icon_53_3;
        }
        if (((token === import32.Col) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._Col_47_3;
        }
        if (((token === import32.Row) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._Row_35_3;
        }
        if (((token === import32.Grid) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._Grid_10_3;
        }
        if (((token === import31.CardContent) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 58)))) {
            return this._CardContent_8_3;
        }
        if (((token === import31.Card) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._Card_0_3;
        }
        return notFoundResult;
    };
    _View_StocksPage1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = 'pie';
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._Icon_20_3.name = currVal_2;
            this._expr_2 = currVal_2;
        }
        var currVal_5 = 'podium';
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Icon_30_3.name = currVal_5;
            this._expr_5 = currVal_5;
        }
        var currVal_8 = 'stats';
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._Icon_43_3.name = currVal_8;
            this._expr_8 = currVal_8;
        }
        var currVal_11 = 'ribbon';
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._Icon_53_3.name = currVal_11;
            this._expr_11 = currVal_11;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, 'card-tab-bg-', this.context.$implicit.color, ' font-bold');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'className', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit.daterange, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_5, currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_3 = this._Icon_20_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_20, 'hide', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, ' ', this.context.$implicit.clqty, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_21, currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_30_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_30, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = import4.interpolate(1, ' ', this.context.$implicit.clqvalue, '');
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_31, currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_9 = this._Icon_43_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_43, 'hide', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = import4.interpolate(1, ' ', this.context.$implicit.salvalue, '');
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setText(this._text_44, currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_12 = this._Icon_53_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_53, 'hide', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = import4.interpolate(1, ' ', this.context.$implicit.profit, '%');
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_54, currVal_13);
            this._expr_13 = currVal_13;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_StocksPage1.prototype.destroyInternal = function () {
        this._Icon_20_3.ngOnDestroy();
        this._Icon_30_3.ngOnDestroy();
        this._Icon_43_3.ngOnDestroy();
        this._Icon_53_3.ngOnDestroy();
    };
    return _View_StocksPage1;
}(import1.AppView));
function viewFactory_StocksPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_StocksPage1(viewUtils, parentInjector, declarationEl);
}

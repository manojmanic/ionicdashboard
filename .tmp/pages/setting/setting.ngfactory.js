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
import * as import3 from '../../providers/connection-service';
import * as import4 from './setting';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from 'ionic-angular/platform/platform';
import * as import10 from 'ionic-angular/navigation/nav-controller';
import * as import11 from 'ionic-angular/navigation/nav-params';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from 'ionic-angular/components/toolbar/toolbar';
import * as import15 from 'ionic-angular/components/navbar/navbar';
import * as import16 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import17 from 'ionic-angular/components/content/content';
import * as import18 from '@angular/forms/src/directives/ng_form';
import * as import19 from '@angular/forms/src/directives/ng_control_status';
import * as import20 from 'ionic-angular/components/item/item';
import * as import21 from '@angular/core/src/linker/query_list';
import * as import22 from 'ionic-angular/components/label/label';
import * as import23 from '@angular/forms/src/directives/ng_model';
import * as import24 from 'ionic-angular/components/input/input';
import * as import25 from 'ionic-angular/components/button/button';
import * as import26 from 'ionic-angular/config/config';
import * as import27 from '@angular/core/src/linker/element_ref';
import * as import28 from 'ionic-angular/navigation/view-controller';
import * as import29 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import30 from 'ionic-angular/components/app/app';
import * as import31 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import32 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import33 from 'ionic-angular/util/keyboard';
import * as import34 from '@angular/core/src/zone/ng_zone';
import * as import35 from 'ionic-angular/components/tabs/tabs';
import * as import36 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import37 from 'ionic-angular/util/form';
import * as import38 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import39 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import40 from '@angular/forms/src/directives/ng_control';
import * as import41 from '@angular/forms/src/directives/control_container';
var renderType_SettingPage_Host = null;
var _View_SettingPage_Host0 = (function (_super) {
    __extends(_View_SettingPage_Host0, _super);
    function _View_SettingPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SettingPage_Host0, renderType_SettingPage_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_SettingPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-setting', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_SettingPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ConnectionService_0_4 = new import3.ConnectionService(this.parentInjector.get(import9.Platform), this.parentInjector.get(import10.NavController));
        this._SettingPage_0_5 = new import4.SettingPage(this.parentInjector.get(import10.NavController), this.parentInjector.get(import9.Platform), this._ConnectionService_0_4, this.parentInjector.get(import11.NavParams));
        this._appEl_0.initComponent(this._SettingPage_0_5, [], compView_0);
        compView_0.create(this._SettingPage_0_5, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_SettingPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ConnectionService) && (0 === requestNodeIndex))) {
            return this._ConnectionService_0_4;
        }
        if (((token === import4.SettingPage) && (0 === requestNodeIndex))) {
            return this._SettingPage_0_5;
        }
        return notFoundResult;
    };
    return _View_SettingPage_Host0;
}(import1.AppView));
function viewFactory_SettingPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SettingPage_Host === null)) {
        (renderType_SettingPage_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_SettingPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var SettingPageNgFactory = new import13.ComponentFactory('page-setting', viewFactory_SettingPage_Host0, import4.SettingPage);
var styles_SettingPage = [];
var renderType_SettingPage = null;
var _View_SettingPage0 = (function (_super) {
    __extends(_View_SettingPage0, _super);
    function _View_SettingPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SettingPage0, renderType_SettingPage, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_SettingPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import14.Header(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import28.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n\n	', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_3, 'color', 'hometab');
        this._appEl_3 = new import2.AppElement(3, 1, this, this._el_3);
        var compView_3 = import29.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import15.Navbar(this.parentInjector.get(import30.App), this.parentInjector.get(import28.ViewController, null), this.parentInjector.get(import10.NavController, null), this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n		', null);
        this._el_5 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_5 = new import2.AppElement(5, 3, this, this._el_5);
        var compView_5 = import31.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(5), this._appEl_5);
        this._ToolbarTitle_5_4 = new import16.ToolbarTitle(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import14.Toolbar, null), this._Navbar_3_4);
        this._appEl_5.initComponent(this._ToolbarTitle_5_4, [], compView_5);
        this._text_6 = this.renderer.createText(null, 'Settings', null);
        compView_5.create(this._ToolbarTitle_5_4, [[].concat([this._text_6])], null);
        this._text_7 = this.renderer.createText(null, '\n	', null);
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
        this._text_8 = this.renderer.createText(this._el_1, '\n\n', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_10 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'home home-background');
        this.renderer.setElementAttribute(this._el_10, 'padding-5', '');
        this._appEl_10 = new import2.AppElement(10, null, this, this._el_10);
        var compView_10 = import32.viewFactory_Content0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Content_10_4 = new import17.Content(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import30.App), this.parentInjector.get(import33.Keyboard), this.parentInjector.get(import34.NgZone), this.parentInjector.get(import28.ViewController, null), this.parentInjector.get(import35.Tabs, null));
        this._appEl_10.initComponent(this._Content_10_4, [], compView_10);
        this._text_11 = this.renderer.createText(null, '\n	', null);
        this._el_12 = this.renderer.createElement(null, 'form', null);
        this._NgForm_12_3 = new import18.NgForm(null, null);
        this._ControlContainer_12_4 = this._NgForm_12_3;
        this._NgControlStatusGroup_12_5 = new import19.NgControlStatusGroup(this._ControlContainer_12_4);
        this._text_13 = this.renderer.createText(this._el_12, '\n		', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_14, 'color', 'hometab');
        this._appEl_14 = new import2.AppElement(14, 12, this, this._el_14);
        var compView_14 = import36.viewFactory_Item0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Item_14_4 = new import20.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_14), this.renderer);
        this._ItemContent_14_5 = new import20.ItemContent();
        this._query_Label_14_0 = new import21.QueryList();
        this._query_Button_14_1 = new import21.QueryList();
        this._query_Icon_14_2 = new import21.QueryList();
        this._appEl_14.initComponent(this._Item_14_4, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n			', null);
        this._el_16 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_16, 'floating', '');
        this._Label_16_3 = new import22.Label(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_16), this.renderer, '', null, null, null);
        this._text_17 = this.renderer.createText(this._el_16, 'IP', null);
        this._text_18 = this.renderer.createText(null, '\n			', null);
        this._el_19 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_19, 'name', 'ip');
        this.renderer.setElementAttribute(this._el_19, 'type', 'text');
        this._appEl_19 = new import2.AppElement(19, 14, this, this._el_19);
        var compView_19 = import38.viewFactory_TextInput0(this.viewUtils, this.injector(19), this._appEl_19);
        this._NgModel_19_4 = new import23.NgModel(this._ControlContainer_12_4, null, null, null);
        this._NgControl_19_5 = this._NgModel_19_4;
        this._NgControlStatus_19_6 = new import19.NgControlStatus(this._NgControl_19_5);
        this._TextInput_19_7 = new import24.TextInput(this.parentInjector.get(import26.Config), this.parentInjector.get(import37.Form), this._Item_14_4, this.parentInjector.get(import30.App), this.parentInjector.get(import9.Platform), new import27.ElementRef(this._el_19), this.renderer, this._Content_10_4, this.parentInjector.get(import10.NavController, null), this._NgControl_19_5);
        this._appEl_19.initComponent(this._TextInput_19_7, [], compView_19);
        compView_19.create(this._TextInput_19_7, [], null);
        this._text_20 = this.renderer.createText(null, '\n		', null);
        this._query_Label_14_0.reset([this._Label_16_3]);
        this._Item_14_4.contentLabel = this._query_Label_14_0.first;
        compView_14.create(this._Item_14_4, [
            [],
            [].concat([this._el_16]),
            [].concat([
                this._text_15,
                this._text_18,
                this._text_20
            ]),
            [].concat([this._el_19]),
            []
        ], null);
        this._text_21 = this.renderer.createText(this._el_12, '\n		', null);
        this._el_22 = this.renderer.createElement(this._el_12, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_22, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_22, 'color', 'hometab');
        this._appEl_22 = new import2.AppElement(22, 12, this, this._el_22);
        var compView_22 = import36.viewFactory_Item0(this.viewUtils, this.injector(22), this._appEl_22);
        this._Item_22_4 = new import20.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_22), this.renderer);
        this._ItemContent_22_5 = new import20.ItemContent();
        this._query_Label_22_0 = new import21.QueryList();
        this._query_Button_22_1 = new import21.QueryList();
        this._query_Icon_22_2 = new import21.QueryList();
        this._appEl_22.initComponent(this._Item_22_4, [], compView_22);
        this._text_23 = this.renderer.createText(null, '\n			', null);
        this._el_24 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_24, 'floating', '');
        this._Label_24_3 = new import22.Label(this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_24), this.renderer, '', null, null, null);
        this._text_25 = this.renderer.createText(this._el_24, 'PORT', null);
        this._text_26 = this.renderer.createText(null, '\n			', null);
        this._el_27 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_27, 'name', 'port');
        this.renderer.setElementAttribute(this._el_27, 'type', 'text');
        this._appEl_27 = new import2.AppElement(27, 22, this, this._el_27);
        var compView_27 = import38.viewFactory_TextInput0(this.viewUtils, this.injector(27), this._appEl_27);
        this._NgModel_27_4 = new import23.NgModel(this._ControlContainer_12_4, null, null, null);
        this._NgControl_27_5 = this._NgModel_27_4;
        this._NgControlStatus_27_6 = new import19.NgControlStatus(this._NgControl_27_5);
        this._TextInput_27_7 = new import24.TextInput(this.parentInjector.get(import26.Config), this.parentInjector.get(import37.Form), this._Item_22_4, this.parentInjector.get(import30.App), this.parentInjector.get(import9.Platform), new import27.ElementRef(this._el_27), this.renderer, this._Content_10_4, this.parentInjector.get(import10.NavController, null), this._NgControl_27_5);
        this._appEl_27.initComponent(this._TextInput_27_7, [], compView_27);
        compView_27.create(this._TextInput_27_7, [], null);
        this._text_28 = this.renderer.createText(null, '\n		', null);
        this._query_Label_22_0.reset([this._Label_24_3]);
        this._Item_22_4.contentLabel = this._query_Label_22_0.first;
        compView_22.create(this._Item_22_4, [
            [],
            [].concat([this._el_24]),
            [].concat([
                this._text_23,
                this._text_26,
                this._text_28
            ]),
            [].concat([this._el_27]),
            []
        ], null);
        this._text_29 = this.renderer.createText(this._el_12, '\n		', null);
        this._el_30 = this.renderer.createElement(this._el_12, 'button', null);
        this.renderer.setElementAttribute(this._el_30, 'full', '');
        this.renderer.setElementAttribute(this._el_30, 'ion-button', '');
        this._appEl_30 = new import2.AppElement(30, 12, this, this._el_30);
        var compView_30 = import39.viewFactory_Button0(this.viewUtils, this.injector(30), this._appEl_30);
        this._Button_30_4 = new import25.Button(null, '', this.parentInjector.get(import26.Config), new import27.ElementRef(this._el_30), this.renderer);
        this._appEl_30.initComponent(this._Button_30_4, [], compView_30);
        this._text_31 = this.renderer.createText(null, 'Save Configuration', null);
        compView_30.create(this._Button_30_4, [[].concat([this._text_31])], null);
        this._text_32 = this.renderer.createText(this._el_12, '\n	', null);
        this._text_33 = this.renderer.createText(null, '\n', null);
        compView_10.create(this._Content_10_4, [
            [],
            [].concat([
                this._text_11,
                this._el_12,
                this._text_33
            ]),
            []
        ], null);
        this._expr_0 = import8.UNINITIALIZED;
        this._expr_1 = import8.UNINITIALIZED;
        this._expr_2 = import8.UNINITIALIZED;
        this._expr_3 = import8.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_12, 'ngSubmit', this.eventHandler(this._handle_ngSubmit_12_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_12, 'submit', this.eventHandler(this._handle_submit_12_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_12, 'reset', this.eventHandler(this._handle_reset_12_2.bind(this)));
        var subscription_0 = this._NgForm_12_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_12_0.bind(this)));
        this._expr_7 = import8.UNINITIALIZED;
        this._expr_8 = import8.UNINITIALIZED;
        this._expr_9 = import8.UNINITIALIZED;
        this._expr_10 = import8.UNINITIALIZED;
        this._expr_11 = import8.UNINITIALIZED;
        this._expr_12 = import8.UNINITIALIZED;
        this._expr_13 = import8.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_19, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_19_0.bind(this)));
        this._expr_15 = import8.UNINITIALIZED;
        this._expr_16 = import8.UNINITIALIZED;
        var subscription_1 = this._NgModel_19_4.update.subscribe(this.eventHandler(this._handle_ngModelChange_19_0.bind(this)));
        this._expr_17 = import8.UNINITIALIZED;
        this._expr_18 = import8.UNINITIALIZED;
        this._expr_19 = import8.UNINITIALIZED;
        this._expr_20 = import8.UNINITIALIZED;
        this._expr_21 = import8.UNINITIALIZED;
        this._expr_22 = import8.UNINITIALIZED;
        this._expr_23 = import8.UNINITIALIZED;
        this._expr_24 = import8.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_27, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_27_0.bind(this)));
        this._expr_26 = import8.UNINITIALIZED;
        this._expr_27 = import8.UNINITIALIZED;
        var subscription_2 = this._NgModel_27_4.update.subscribe(this.eventHandler(this._handle_ngModelChange_27_0.bind(this)));
        this._expr_28 = import8.UNINITIALIZED;
        this._expr_29 = import8.UNINITIALIZED;
        this._expr_30 = import8.UNINITIALIZED;
        this._expr_31 = import8.UNINITIALIZED;
        this._expr_32 = import8.UNINITIALIZED;
        this._expr_33 = import8.UNINITIALIZED;
        this._expr_34 = import8.UNINITIALIZED;
        this._expr_35 = import8.UNINITIALIZED;
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
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._text_33
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ], [
            subscription_0,
            subscription_1,
            subscription_2
        ]);
        return null;
    };
    _View_SettingPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._ToolbarTitle_5_4;
        }
        if (((token === import15.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Navbar_3_4;
        }
        if (((token === import14.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Header_1_3;
        }
        if (((token === import22.Label) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Label_16_3;
        }
        if (((token === import23.NgModel) && (19 === requestNodeIndex))) {
            return this._NgModel_19_4;
        }
        if (((token === import40.NgControl) && (19 === requestNodeIndex))) {
            return this._NgControl_19_5;
        }
        if (((token === import19.NgControlStatus) && (19 === requestNodeIndex))) {
            return this._NgControlStatus_19_6;
        }
        if (((token === import24.TextInput) && (19 === requestNodeIndex))) {
            return this._TextInput_19_7;
        }
        if (((token === import20.Item) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Item_14_4;
        }
        if (((token === import20.ItemContent) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._ItemContent_14_5;
        }
        if (((token === import22.Label) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Label_24_3;
        }
        if (((token === import23.NgModel) && (27 === requestNodeIndex))) {
            return this._NgModel_27_4;
        }
        if (((token === import40.NgControl) && (27 === requestNodeIndex))) {
            return this._NgControl_27_5;
        }
        if (((token === import19.NgControlStatus) && (27 === requestNodeIndex))) {
            return this._NgControlStatus_27_6;
        }
        if (((token === import24.TextInput) && (27 === requestNodeIndex))) {
            return this._TextInput_27_7;
        }
        if (((token === import20.Item) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Item_22_4;
        }
        if (((token === import20.ItemContent) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._ItemContent_22_5;
        }
        if (((token === import25.Button) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._Button_30_4;
        }
        if (((token === import18.NgForm) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._NgForm_12_3;
        }
        if (((token === import41.ControlContainer) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._ControlContainer_12_4;
        }
        if (((token === import19.NgControlStatusGroup) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._NgControlStatusGroup_12_5;
        }
        if (((token === import17.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Content_10_4;
        }
        return notFoundResult;
    };
    _View_SettingPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        var changes = null;
        var currVal_0 = 'hometab';
        if (import5.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Navbar_3_4.color = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_10_4.ngOnInit();
        }
        changed = false;
        var currVal_13 = 'hometab';
        if (import5.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._Item_14_4.color = currVal_13;
            changed = true;
            this._expr_13 = currVal_13;
        }
        if (changed) {
            this._appEl_14.componentView.markAsCheckOnce();
        }
        changes = null;
        var currVal_15 = 'ip';
        if (import5.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._NgModel_19_4.name = currVal_15;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import8.SimpleChange(this._expr_15, currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this.context.ip;
        if (import5.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this._NgModel_19_4.model = currVal_16;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import8.SimpleChange(this._expr_16, currVal_16);
            this._expr_16 = currVal_16;
        }
        if ((changes !== null)) {
            this._NgModel_19_4.ngOnChanges(changes);
        }
        var currVal_23 = 'text';
        if (import5.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this._TextInput_19_7.type = currVal_23;
            this._expr_23 = currVal_23;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TextInput_19_7.ngOnInit();
        }
        changed = false;
        var currVal_24 = 'hometab';
        if (import5.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this._Item_22_4.color = currVal_24;
            changed = true;
            this._expr_24 = currVal_24;
        }
        if (changed) {
            this._appEl_22.componentView.markAsCheckOnce();
        }
        changes = null;
        var currVal_26 = 'port';
        if (import5.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this._NgModel_27_4.name = currVal_26;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import8.SimpleChange(this._expr_26, currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this.context.port;
        if (import5.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this._NgModel_27_4.model = currVal_27;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import8.SimpleChange(this._expr_27, currVal_27);
            this._expr_27 = currVal_27;
        }
        if ((changes !== null)) {
            this._NgModel_27_4.ngOnChanges(changes);
        }
        var currVal_34 = 'text';
        if (import5.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this._TextInput_27_7.type = currVal_34;
            this._expr_34 = currVal_34;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TextInput_27_7.ngOnInit();
        }
        changed = false;
        var currVal_35 = '';
        if (import5.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this._Button_30_4.full = currVal_35;
            changed = true;
            this._expr_35 = currVal_35;
        }
        if (changed) {
            this._appEl_30.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_14_1.dirty) {
                this._query_Button_14_1.reset([]);
                this._Item_14_4._buttons = this._query_Button_14_1;
                this._query_Button_14_1.notifyOnChanges();
            }
            if (this._query_Icon_14_2.dirty) {
                this._query_Icon_14_2.reset([]);
                this._Item_14_4._icons = this._query_Icon_14_2;
                this._query_Icon_14_2.notifyOnChanges();
            }
            if (this._query_Button_22_1.dirty) {
                this._query_Button_22_1.reset([]);
                this._Item_22_4._buttons = this._query_Button_22_1;
                this._query_Button_22_1.notifyOnChanges();
            }
            if (this._query_Icon_22_2.dirty) {
                this._query_Icon_22_2.reset([]);
                this._Item_22_4._icons = this._query_Icon_22_2;
                this._query_Icon_22_2.notifyOnChanges();
            }
            this._TextInput_19_7.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_14_4.ngAfterContentInit();
            }
            this._TextInput_27_7.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_22_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_30_4.ngAfterContentInit();
            }
        }
        var currVal_1 = this._Navbar_3_4._hidden;
        if (import5.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Navbar_3_4._sbPadding;
        if (import5.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Content_10_4._sbPadding;
        if (import5.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_10, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_7 = this._NgControlStatusGroup_12_5.ngClassUntouched;
        if (import5.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_12, 'ng-untouched', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatusGroup_12_5.ngClassTouched;
        if (import5.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_12, 'ng-touched', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatusGroup_12_5.ngClassPristine;
        if (import5.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_12, 'ng-pristine', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatusGroup_12_5.ngClassDirty;
        if (import5.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_12, 'ng-dirty', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._NgControlStatusGroup_12_5.ngClassValid;
        if (import5.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_12, 'ng-valid', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._NgControlStatusGroup_12_5.ngClassInvalid;
        if (import5.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_12, 'ng-invalid', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_17 = this._NgControlStatus_19_6.ngClassUntouched;
        if (import5.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_19, 'ng-untouched', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = this._NgControlStatus_19_6.ngClassTouched;
        if (import5.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_19, 'ng-touched', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_19 = this._NgControlStatus_19_6.ngClassPristine;
        if (import5.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_19, 'ng-pristine', currVal_19);
            this._expr_19 = currVal_19;
        }
        var currVal_20 = this._NgControlStatus_19_6.ngClassDirty;
        if (import5.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementClass(this._el_19, 'ng-dirty', currVal_20);
            this._expr_20 = currVal_20;
        }
        var currVal_21 = this._NgControlStatus_19_6.ngClassValid;
        if (import5.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementClass(this._el_19, 'ng-valid', currVal_21);
            this._expr_21 = currVal_21;
        }
        var currVal_22 = this._NgControlStatus_19_6.ngClassInvalid;
        if (import5.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_19, 'ng-invalid', currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_28 = this._NgControlStatus_27_6.ngClassUntouched;
        if (import5.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_27, 'ng-untouched', currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_29 = this._NgControlStatus_27_6.ngClassTouched;
        if (import5.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setElementClass(this._el_27, 'ng-touched', currVal_29);
            this._expr_29 = currVal_29;
        }
        var currVal_30 = this._NgControlStatus_27_6.ngClassPristine;
        if (import5.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setElementClass(this._el_27, 'ng-pristine', currVal_30);
            this._expr_30 = currVal_30;
        }
        var currVal_31 = this._NgControlStatus_27_6.ngClassDirty;
        if (import5.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setElementClass(this._el_27, 'ng-dirty', currVal_31);
            this._expr_31 = currVal_31;
        }
        var currVal_32 = this._NgControlStatus_27_6.ngClassValid;
        if (import5.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setElementClass(this._el_27, 'ng-valid', currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_33 = this._NgControlStatus_27_6.ngClassInvalid;
        if (import5.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_27, 'ng-invalid', currVal_33);
            this._expr_33 = currVal_33;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.ngAfterViewInit();
            }
        }
    };
    _View_SettingPage0.prototype.destroyInternal = function () {
        this._NgModel_19_4.ngOnDestroy();
        this._TextInput_19_7.ngOnDestroy();
        this._NgModel_27_4.ngOnDestroy();
        this._TextInput_27_7.ngOnDestroy();
        this._Content_10_4.ngOnDestroy();
    };
    _View_SettingPage0.prototype._handle_ngSubmit_12_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onSubmit() !== false);
        return (true && pd_0);
    };
    _View_SettingPage0.prototype._handle_submit_12_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._NgForm_12_3.onSubmit($event) !== false);
        return (true && pd_0);
    };
    _View_SettingPage0.prototype._handle_reset_12_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._NgForm_12_3.onReset() !== false);
        return (true && pd_0);
    };
    _View_SettingPage0.prototype._handle_ngModelChange_19_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.ip = $event) !== false);
        return (true && pd_0);
    };
    _View_SettingPage0.prototype._handle_ngModelChange_27_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.port = $event) !== false);
        return (true && pd_0);
    };
    return _View_SettingPage0;
}(import1.AppView));
export function viewFactory_SettingPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SettingPage === null)) {
        (renderType_SettingPage = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, styles_SettingPage, {}));
    }
    return new _View_SettingPage0(viewUtils, parentInjector, declarationEl);
}
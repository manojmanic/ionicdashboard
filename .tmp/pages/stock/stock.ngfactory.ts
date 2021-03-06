/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './stock';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../providers/stocks-service';
import * as import9 from 'ionic-angular/components/loading/loading';
import * as import10 from 'ionic-angular/navigation/nav-controller';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from 'ionic-angular/components/toolbar/toolbar';
import * as import14 from 'ionic-angular/components/navbar/navbar';
import * as import15 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import16 from 'ionic-angular/components/content/content';
import * as import17 from '@angular/common/src/directives/ng_for';
import * as import18 from 'ionic-angular/config/config';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from 'ionic-angular/navigation/view-controller';
import * as import21 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import22 from 'ionic-angular/components/app/app';
import * as import23 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import25 from 'ionic-angular/util/keyboard';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from 'ionic-angular/components/tabs/tabs';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import30 from 'ionic-angular/components/card/card';
import * as import31 from 'ionic-angular/components/grid/grid';
import * as import32 from 'ionic-angular/components/icon/icon';
var renderType_StockPage_Host:import0.RenderComponentType = (null as any);
class _View_StockPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _StockPage_0_4:import3.StockPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_StockPage_Host0,renderType_StockPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-stock',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_StockPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._StockPage_0_4 = new import3.StockPage(this.parentInjector.get(import8.StocksService),this.parentInjector.get(import9.LoadingController),this.parentInjector.get(import10.NavController));
    this._appEl_0.initComponent(this._StockPage_0_4,[],compView_0);
    compView_0.create(this._StockPage_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.StockPage) && (0 === requestNodeIndex))) { return this._StockPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_StockPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_StockPage_Host === (null as any))) { (renderType_StockPage_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,[],{})); }
  return new _View_StockPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const StockPageNgFactory:import12.ComponentFactory<import3.StockPage> = new import12.ComponentFactory<import3.StockPage>('page-stock',viewFactory_StockPage_Host0,import3.StockPage);
const styles_StockPage:any[] = [];
var renderType_StockPage:import0.RenderComponentType = (null as any);
class _View_StockPage0 extends import1.AppView<import3.StockPage> {
  _text_0:any;
  _el_1:any;
  _Header_1_3:import13.Header;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import2.AppElement;
  _Navbar_3_4:import14.Navbar;
  _text_4:any;
  _el_5:any;
  /*private*/ _appEl_5:import2.AppElement;
  _ToolbarTitle_5_4:import15.ToolbarTitle;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  /*private*/ _appEl_10:import2.AppElement;
  _Content_10_4:import16.Content;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _appEl_12:import2.AppElement;
  _TemplateRef_12_5:any;
  _NgFor_12_6:import17.NgFor;
  _text_13:any;
  _text_14:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_StockPage0,renderType_StockPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_1_3 = new import13.Header(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_1),this.renderer,this.parentInjector.get(import20.ViewController,(null as any)));
    this._text_2 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','toolbar');
    this.renderer.setElementAttribute(this._el_3,'color','hometab');
    this._appEl_3 = new import2.AppElement(3,1,this,this._el_3);
    var compView_3:any = import21.viewFactory_Navbar0(this.viewUtils,this.injector(3),this._appEl_3);
    this._Navbar_3_4 = new import14.Navbar(this.parentInjector.get(import22.App),this.parentInjector.get(import20.ViewController,(null as any)),this.parentInjector.get(import10.NavController,(null as any)),this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_3),this.renderer);
    this._appEl_3.initComponent(this._Navbar_3_4,[],compView_3);
    this._text_4 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_5 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_5 = new import2.AppElement(5,3,this,this._el_5);
    var compView_5:any = import23.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(5),this._appEl_5);
    this._ToolbarTitle_5_4 = new import15.ToolbarTitle(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_5),this.renderer,this.parentInjector.get(import13.Toolbar,(null as any)),this._Navbar_3_4);
    this._appEl_5.initComponent(this._ToolbarTitle_5_4,[],compView_5);
    this._text_6 = this.renderer.createText((null as any),'Company (Stock)',(null as any));
    compView_5.create(this._ToolbarTitle_5_4,[[].concat([this._text_6])],(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_3.create(this._Navbar_3_4,[
      [],
      [],
      [],
      [].concat([
        this._text_4,
        this._el_5,
        this._text_7
      ]
      )
    ]
    ,(null as any));
    this._text_8 = this.renderer.createText(this._el_1,'\n\n',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_10 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_10,'class','home-background');
    this.renderer.setElementAttribute(this._el_10,'padding','');
    this._appEl_10 = new import2.AppElement(10,(null as any),this,this._el_10);
    var compView_10:any = import24.viewFactory_Content0(this.viewUtils,this.injector(10),this._appEl_10);
    this._Content_10_4 = new import16.Content(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_10),this.renderer,this.parentInjector.get(import22.App),this.parentInjector.get(import25.Keyboard),this.parentInjector.get(import26.NgZone),this.parentInjector.get(import20.ViewController,(null as any)),this.parentInjector.get(import27.Tabs,(null as any)));
    this._appEl_10.initComponent(this._Content_10_4,[],compView_10);
    this._text_11 = this.renderer.createText((null as any),'\n',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_12 = new import2.AppElement(12,10,this,this._anchor_12);
    this._TemplateRef_12_5 = new import28.TemplateRef_(this._appEl_12,viewFactory_StockPage1);
    this._NgFor_12_6 = new import17.NgFor(this._appEl_12.vcRef,this._TemplateRef_12_5,this.parentInjector.get(import29.IterableDiffers),this.ref);
    this._text_13 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_10.create(this._Content_10_4,[
      [],
      [].concat([
        this._text_11,
        this._appEl_12,
        this._text_13
      ]
      ),
      []
    ]
    ,(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this.init([],[
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
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._ToolbarTitle_5_4; }
    if (((token === import14.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Navbar_3_4; }
    if (((token === import13.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._Header_1_3; }
    if (((token === import28.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import17.NgFor) && (12 === requestNodeIndex))) { return this._NgFor_12_6; }
    if (((token === import16.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._Content_10_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_0:any = 'hometab';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Navbar_3_4.color = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_10_4.ngOnInit(); }
    changes = (null as any);
    const currVal_4:any = this.context.companyData;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgFor_12_6.ngForOf = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._NgFor_12_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_12_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this._Navbar_3_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_3,'hidden',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Navbar_3_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_3,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._Content_10_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_10,'statusbar-padding',currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_3_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_10_4.ngOnDestroy();
  }
}
export function viewFactory_StockPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.StockPage> {
  if ((renderType_StockPage === (null as any))) { (renderType_StockPage = viewUtils.createRenderComponentType('/Users/sivasakthisoftwares/Desktop/Android/ionicdashboard/.tmp/pages/stock/stock.html',0,import11.ViewEncapsulation.None,styles_StockPage,{})); }
  return new _View_StockPage0(viewUtils,parentInjector,declarationEl);
}
class _View_StockPage1 extends import1.AppView<any> {
  _el_0:any;
  _Card_0_3:import30.Card;
  _text_1:any;
  _el_2:any;
  _CardHeader_2_3:import30.CardHeader;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _CardContent_8_3:import30.CardContent;
  _text_9:any;
  _el_10:any;
  _Grid_10_3:import31.Grid;
  _text_11:any;
  _el_12:any;
  _Row_12_3:import31.Row;
  _text_13:any;
  _el_14:any;
  _Col_14_3:import31.Col;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _el_20:any;
  _Icon_20_3:import32.Icon;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _Col_24_3:import31.Col;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _el_30:any;
  _Icon_30_3:import32.Icon;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _el_35:any;
  _Row_35_3:import31.Row;
  _text_36:any;
  _el_37:any;
  _Col_37_3:import31.Col;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _text_41:any;
  _el_42:any;
  _el_43:any;
  _Icon_43_3:import32.Icon;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  _el_47:any;
  _Col_47_3:import31.Col;
  _text_48:any;
  _el_49:any;
  _text_50:any;
  _text_51:any;
  _el_52:any;
  _el_53:any;
  _Icon_53_3:import32.Icon;
  _text_54:any;
  _text_55:any;
  _text_56:any;
  _text_57:any;
  _el_58:any;
  _Row_58_3:import31.Row;
  _text_59:any;
  _el_60:any;
  _Col_60_3:import31.Col;
  _text_61:any;
  _el_62:any;
  _text_63:any;
  _text_64:any;
  _el_65:any;
  _el_66:any;
  _Icon_66_3:import32.Icon;
  _text_67:any;
  _text_68:any;
  _text_69:any;
  _text_70:any;
  _text_71:any;
  _text_72:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_StockPage1,renderType_StockPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-card',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','card-round');
    this._Card_0_3 = new import30.Card(this.parent.parentInjector.get(import18.Config),new import19.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-card-header',(null as any));
    this._CardHeader_2_3 = new import30.CardHeader();
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_0,'ion-card-content',(null as any));
    this._CardContent_8_3 = new import30.CardContent();
    this._text_9 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_8,'ion-grid',(null as any));
    this._Grid_10_3 = new import31.Grid();
    this._text_11 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_10,'ion-row',(null as any));
    this._Row_12_3 = new import31.Row();
    this._text_13 = this.renderer.createText(this._el_12,'\n          ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_14,'width-50','');
    this._Col_14_3 = new import31.Col();
    this._text_15 = this.renderer.createText(this._el_14,'\n            ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_14,'h2',(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'Inward QTY',(null as any));
    this._text_18 = this.renderer.createText(this._el_14,'\n            ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_14,'span',(null as any));
    this._el_20 = this.renderer.createElement(this._el_19,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','card-titler');
    this.renderer.setElementAttribute(this._el_20,'name','pie');
    this.renderer.setElementAttribute(this._el_20,'role','img');
    this._Icon_20_3 = new import32.Icon(this.parent.parentInjector.get(import18.Config),new import19.ElementRef(this._el_20),this.renderer);
    this._text_21 = this.renderer.createText(this._el_20,'',(null as any));
    this._text_22 = this.renderer.createText(this._el_14,'\n          ',(null as any));
    this._text_23 = this.renderer.createText(this._el_12,'\n          ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_12,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_24,'width-50','');
    this._Col_24_3 = new import31.Col();
    this._text_25 = this.renderer.createText(this._el_24,'\n            ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_24,'h2',(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'Outward QTY',(null as any));
    this._text_28 = this.renderer.createText(this._el_24,'\n            ',(null as any));
    this._el_29 = this.renderer.createElement(this._el_24,'span',(null as any));
    this._el_30 = this.renderer.createElement(this._el_29,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_30,'class','card-titler');
    this.renderer.setElementAttribute(this._el_30,'name','podium');
    this.renderer.setElementAttribute(this._el_30,'role','img');
    this._Icon_30_3 = new import32.Icon(this.parent.parentInjector.get(import18.Config),new import19.ElementRef(this._el_30),this.renderer);
    this._text_31 = this.renderer.createText(this._el_30,'',(null as any));
    this._text_32 = this.renderer.createText(this._el_24,'\n          ',(null as any));
    this._text_33 = this.renderer.createText(this._el_12,'\n        ',(null as any));
    this._text_34 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._el_35 = this.renderer.createElement(this._el_10,'ion-row',(null as any));
    this._Row_35_3 = new import31.Row();
    this._text_36 = this.renderer.createText(this._el_35,'\n          ',(null as any));
    this._el_37 = this.renderer.createElement(this._el_35,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_37,'width-50','');
    this._Col_37_3 = new import31.Col();
    this._text_38 = this.renderer.createText(this._el_37,'\n            ',(null as any));
    this._el_39 = this.renderer.createElement(this._el_37,'h2',(null as any));
    this._text_40 = this.renderer.createText(this._el_39,'Closing QTY',(null as any));
    this._text_41 = this.renderer.createText(this._el_37,'\n            ',(null as any));
    this._el_42 = this.renderer.createElement(this._el_37,'span',(null as any));
    this._el_43 = this.renderer.createElement(this._el_42,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_43,'class','card-titler');
    this.renderer.setElementAttribute(this._el_43,'name','stats');
    this.renderer.setElementAttribute(this._el_43,'role','img');
    this._Icon_43_3 = new import32.Icon(this.parent.parentInjector.get(import18.Config),new import19.ElementRef(this._el_43),this.renderer);
    this._text_44 = this.renderer.createText(this._el_43,'',(null as any));
    this._text_45 = this.renderer.createText(this._el_37,'\n          ',(null as any));
    this._text_46 = this.renderer.createText(this._el_35,'\n          ',(null as any));
    this._el_47 = this.renderer.createElement(this._el_35,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_47,'width-50','');
    this._Col_47_3 = new import31.Col();
    this._text_48 = this.renderer.createText(this._el_47,'\n            ',(null as any));
    this._el_49 = this.renderer.createElement(this._el_47,'h2',(null as any));
    this._text_50 = this.renderer.createText(this._el_49,'Profit',(null as any));
    this._text_51 = this.renderer.createText(this._el_47,'\n            ',(null as any));
    this._el_52 = this.renderer.createElement(this._el_47,'span',(null as any));
    this._el_53 = this.renderer.createElement(this._el_52,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_53,'class','card-titler');
    this.renderer.setElementAttribute(this._el_53,'name','ribbon');
    this.renderer.setElementAttribute(this._el_53,'role','img');
    this._Icon_53_3 = new import32.Icon(this.parent.parentInjector.get(import18.Config),new import19.ElementRef(this._el_53),this.renderer);
    this._text_54 = this.renderer.createText(this._el_53,'',(null as any));
    this._text_55 = this.renderer.createText(this._el_47,'\n          ',(null as any));
    this._text_56 = this.renderer.createText(this._el_35,'\n        ',(null as any));
    this._text_57 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._el_58 = this.renderer.createElement(this._el_10,'ion-row',(null as any));
    this._Row_58_3 = new import31.Row();
    this._text_59 = this.renderer.createText(this._el_58,'\n          ',(null as any));
    this._el_60 = this.renderer.createElement(this._el_58,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_60,'width-100','');
    this._Col_60_3 = new import31.Col();
    this._text_61 = this.renderer.createText(this._el_60,'\n            ',(null as any));
    this._el_62 = this.renderer.createElement(this._el_60,'h2',(null as any));
    this._text_63 = this.renderer.createText(this._el_62,'Closing QTY value',(null as any));
    this._text_64 = this.renderer.createText(this._el_60,'\n            ',(null as any));
    this._el_65 = this.renderer.createElement(this._el_60,'span',(null as any));
    this._el_66 = this.renderer.createElement(this._el_65,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_66,'class','card-titler');
    this.renderer.setElementAttribute(this._el_66,'name','ribbon');
    this.renderer.setElementAttribute(this._el_66,'role','img');
    this._Icon_66_3 = new import32.Icon(this.parent.parentInjector.get(import18.Config),new import19.ElementRef(this._el_66),this.renderer);
    this._text_67 = this.renderer.createText(this._el_66,'',(null as any));
    this._text_68 = this.renderer.createText(this._el_60,'\n          ',(null as any));
    this._text_69 = this.renderer.createText(this._el_58,'\n        ',(null as any));
    this._text_70 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._text_71 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._text_72 = this.renderer.createText(this._el_0,'\n    \n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
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
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
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
      this._el_58,
      this._text_59,
      this._el_60,
      this._text_61,
      this._el_62,
      this._text_63,
      this._text_64,
      this._el_65,
      this._el_66,
      this._text_67,
      this._text_68,
      this._text_69,
      this._text_70,
      this._text_71,
      this._text_72
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import30.CardHeader) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._CardHeader_2_3; }
    if (((token === import32.Icon) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._Icon_20_3; }
    if (((token === import31.Col) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._Col_14_3; }
    if (((token === import32.Icon) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) { return this._Icon_30_3; }
    if (((token === import31.Col) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._Col_24_3; }
    if (((token === import31.Row) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 33)))) { return this._Row_12_3; }
    if (((token === import32.Icon) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 44)))) { return this._Icon_43_3; }
    if (((token === import31.Col) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 45)))) { return this._Col_37_3; }
    if (((token === import32.Icon) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 54)))) { return this._Icon_53_3; }
    if (((token === import31.Col) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 55)))) { return this._Col_47_3; }
    if (((token === import31.Row) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 56)))) { return this._Row_35_3; }
    if (((token === import32.Icon) && ((66 <= requestNodeIndex) && (requestNodeIndex <= 67)))) { return this._Icon_66_3; }
    if (((token === import31.Col) && ((60 <= requestNodeIndex) && (requestNodeIndex <= 68)))) { return this._Col_60_3; }
    if (((token === import31.Row) && ((58 <= requestNodeIndex) && (requestNodeIndex <= 69)))) { return this._Row_58_3; }
    if (((token === import31.Grid) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 70)))) { return this._Grid_10_3; }
    if (((token === import30.CardContent) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 71)))) { return this._CardContent_8_3; }
    if (((token === import30.Card) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 72)))) { return this._Card_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3:any = 'pie';
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._Icon_20_3.name = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_6:any = 'podium';
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._Icon_30_3.name = currVal_6;
      this._expr_6 = currVal_6;
    }
    const currVal_9:any = 'stats';
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._Icon_43_3.name = currVal_9;
      this._expr_9 = currVal_9;
    }
    const currVal_12:any = 'ribbon';
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._Icon_53_3.name = currVal_12;
      this._expr_12 = currVal_12;
    }
    const currVal_15:any = 'ribbon';
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this._Icon_66_3.name = currVal_15;
      this._expr_15 = currVal_15;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,'card-tab-bg-',this.context.$implicit.color,' font-bold');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_2,'className',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.context.$implicit.name,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_5,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_4:any = this._Icon_20_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_20,'hide',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = import4.interpolate(1,' ',this.context.$implicit.inwqty,'');
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_21,currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_7:any = this._Icon_30_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_30,'hide',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = import4.interpolate(1,' ',this.context.$implicit.ouwqty,'');
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setText(this._text_31,currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_10:any = this._Icon_43_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_43,'hide',currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = import4.interpolate(1,' ',this.context.$implicit.clqty,'');
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setText(this._text_44,currVal_11);
      this._expr_11 = currVal_11;
    }
    const currVal_13:any = this._Icon_53_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementClass(this._el_53,'hide',currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = import4.interpolate(1,' ',this.context.$implicit.profit,'%');
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setText(this._text_54,currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_16:any = this._Icon_66_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_66,'hide',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = import4.interpolate(1,' ',this.context.$implicit.clqvalue,'');
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setText(this._text_67,currVal_17);
      this._expr_17 = currVal_17;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Icon_20_3.ngOnDestroy();
    this._Icon_30_3.ngOnDestroy();
    this._Icon_43_3.ngOnDestroy();
    this._Icon_53_3.ngOnDestroy();
    this._Icon_66_3.ngOnDestroy();
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.companyClicked($event,this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_StockPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_StockPage1(viewUtils,parentInjector,declarationEl);
}
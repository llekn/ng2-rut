/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './index';
import * as import2 from '@angular/forms/src/directives';
import * as import3 from '@angular/forms/src/form_providers';
import * as import4 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import5 from './src/rut.service';
import * as import6 from './src/rut.validator';
import * as import7 from '@angular/core/src/di/injector';
class Ng2RutInjector extends import0.NgModuleInjector<import1.Ng2Rut> {
  _InternalFormsSharedModule_0:import2.InternalFormsSharedModule;
  _FormsModule_1:import3.FormsModule;
  _Ng2Rut_2:import1.Ng2Rut;
  __RadioControlRegistry_3:import4.RadioControlRegistry;
  __RutService_4:import5.RutService;
  __RutValidator_5:import6.RutValidator;
  constructor(parent:import7.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _RadioControlRegistry_3():import4.RadioControlRegistry {
    if ((this.__RadioControlRegistry_3 == (null as any))) { (this.__RadioControlRegistry_3 = new import4.RadioControlRegistry()); }
    return this.__RadioControlRegistry_3;
  }
  get _RutService_4():import5.RutService {
    if ((this.__RutService_4 == (null as any))) { (this.__RutService_4 = new import5.RutService()); }
    return this.__RutService_4;
  }
  get _RutValidator_5():import6.RutValidator {
    if ((this.__RutValidator_5 == (null as any))) { (this.__RutValidator_5 = new import6.RutValidator(this._RutService_4)); }
    return this.__RutValidator_5;
  }
  createInternal():import1.Ng2Rut {
    this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
    this._FormsModule_1 = new import3.FormsModule();
    this._Ng2Rut_2 = new import1.Ng2Rut();
    return this._Ng2Rut_2;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_0; }
    if ((token === import3.FormsModule)) { return this._FormsModule_1; }
    if ((token === import1.Ng2Rut)) { return this._Ng2Rut_2; }
    if ((token === import4.RadioControlRegistry)) { return this._RadioControlRegistry_3; }
    if ((token === import5.RutService)) { return this._RutService_4; }
    if ((token === import6.RutValidator)) { return this._RutValidator_5; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const Ng2RutNgFactory:import0.NgModuleFactory<import1.Ng2Rut> = new import0.NgModuleFactory(Ng2RutInjector,import1.Ng2Rut);
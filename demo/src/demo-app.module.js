"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var ng2_rut_module_1 = require('../../src/ng2-rut.module');
var demo_app_component_1 = require('./demo-app.component');
var DemoAppModule = (function () {
    function DemoAppModule() {
    }
    DemoAppModule = __decorate([
        core_1.NgModule({
            declarations: [
                demo_app_component_1.DemoAppComponent,
            ],
            providers: [ng2_rut_module_1.RutValidator],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng2_rut_module_1.Ng2Rut
            ],
            bootstrap: [demo_app_component_1.DemoAppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], DemoAppModule);
    return DemoAppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(DemoAppModule)
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=demo-app.module.js.map
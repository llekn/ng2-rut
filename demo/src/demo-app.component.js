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
var ng2_rut_module_1 = require('../../src/ng2-rut.module');
var DemoAppComponent = (function () {
    function DemoAppComponent(fb, rv) {
        this.user = new User('Leandro', '30972198');
        this.reactiveForm = fb.group({
            rut: ['30972198', [forms_1.Validators.required, rv]]
        });
    }
    DemoAppComponent.prototype.onSubmit = function (form) {
        console.info(form);
    };
    DemoAppComponent = __decorate([
        core_1.Component({
            selector: 'demo-app',
            templateUrl: './src/demo-app.component.html',
            providers: [],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, (typeof (_a = typeof ng2_rut_module_1.RutValidator !== 'undefined' && ng2_rut_module_1.RutValidator) === 'function' && _a) || Object])
    ], DemoAppComponent);
    return DemoAppComponent;
    var _a;
}());
exports.DemoAppComponent = DemoAppComponent;
var User = (function () {
    function User(name, rut) {
        this.name = name;
        this.rut = rut;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=demo-app.component.js.map
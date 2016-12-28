"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var rut_service_1 = require('./rut.service');
function validateRutFactory(rutService) {
    return function (c) {
        return rutService.validateRut(c.value) ? null : { invalidRut: true };
    };
}
exports.validateRutFactory = validateRutFactory;
var RutValidator = (function () {
    function RutValidator(rutService) {
        this.validator = validateRutFactory(rutService);
    }
    RutValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    RutValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[validateRut][ngModel],[validateRut][formControl]',
                    providers: [
                        rut_service_1.RutService,
                        { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return RutValidator; }), multi: true },
                    ],
                },] },
    ];
    /** @nocollapse */
    RutValidator.ctorParameters = [
        { type: rut_service_1.RutService, },
    ];
    return RutValidator;
}());
exports.RutValidator = RutValidator;
//# sourceMappingURL=rut.validator.js.map
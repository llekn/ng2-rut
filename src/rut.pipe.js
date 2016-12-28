"use strict";
var core_1 = require('@angular/core');
var rut_service_1 = require('./rut.service');
var RutPipe = (function () {
    function RutPipe(rutService) {
        this.srv = rutService;
    }
    RutPipe.prototype.transform = function (value) {
        return this.srv.formatRut(value);
    };
    RutPipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'rut',
                },] },
    ];
    /** @nocollapse */
    RutPipe.ctorParameters = [
        { type: rut_service_1.RutService, },
    ];
    return RutPipe;
}());
exports.RutPipe = RutPipe;
//# sourceMappingURL=rut.pipe.js.map
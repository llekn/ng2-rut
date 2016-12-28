"use strict";
var core_1 = require('@angular/core');
var RutService = (function () {
    function RutService() {
    }
    RutService.prototype.cleanRut = function (value) {
        return typeof value === 'string' ? value.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
    };
    RutService.prototype.formatRut = function (value) {
        value = this.cleanRut(value);
        if (!value) {
            return;
        }
        if (value.length <= 1) {
            return value;
        }
        var result = value.slice(-4, -1) + '-' + value.substr(value.length - 1);
        for (var i = 4; i < value.length; i += 3) {
            result = value.slice(-3 - i, -i) + '.' + result;
        }
        return result;
    };
    RutService.prototype.validateRut = function (value) {
        if (typeof value !== 'string') {
            return false;
        }
        var t = parseInt(value.slice(0, -1), 10);
        var m = 0;
        var s = 1;
        while (t > 0) {
            s = (s + t % 10 * (9 - m++ % 6)) % 11;
            t = Math.floor(t / 10);
        }
        var v = (s > 0) ? (s - 1) + '' : 'K';
        return (v === value.slice(-1));
    };
    RutService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    RutService.ctorParameters = [];
    return RutService;
}());
exports.RutService = RutService;
//# sourceMappingURL=rut.service.js.map
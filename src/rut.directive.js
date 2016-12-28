"use strict";
var core_1 = require('@angular/core');
var rut_service_1 = require('./rut.service');
var RutDirective = (function () {
    function RutDirective(rutService, _elementRef, _renderer) {
        this.rutService = rutService;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.rutChange = new core_1.EventEmitter();
    }
    RutDirective.prototype.onFocus = function (value) {
        var cleanedRut = this.rutService.cleanRut(value);
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', cleanedRut);
    };
    RutDirective.prototype.onBlur = function (value) {
        var formattedRut = this.rutService.formatRut(value) || '';
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', formattedRut);
    };
    RutDirective.prototype.onChange = function (value) {
        this.rutChange.emit(this.rutService.cleanRut(value));
    };
    RutDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'input[formatRut]',
                    providers: [rut_service_1.RutService],
                    host: {
                        '(blur)': 'onBlur($event.target.value)',
                        '(focus)': 'onFocus($event.target.value)',
                        '(input)': 'onChange($event.target.value)',
                    }
                },] },
    ];
    /** @nocollapse */
    RutDirective.ctorParameters = [
        { type: rut_service_1.RutService, },
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
    ];
    RutDirective.propDecorators = {
        'rutChange': [{ type: core_1.Output },],
    };
    return RutDirective;
}());
exports.RutDirective = RutDirective;
//# sourceMappingURL=rut.directive.js.map
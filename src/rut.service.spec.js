"use strict";
var rut_service_1 = require('./rut.service');
describe('RutService', function () {
    var service;
    beforeEach(function () {
        service = new rut_service_1.RutService();
    });
    describe('cleanRut', function () {
        it('cleans rut', function () {
            expect(service.cleanRut('A12&&*~34B')).toEqual('1234');
        });
    });
    describe('validateRut', function () {
        it('returns true with valid rut', function () {
            expect(service.validateRut('30972198')).toBe(true);
        });
        it('returns false with valid rut', function () {
            expect(service.validateRut('30972199')).toBe(false);
        });
    });
    describe('formatRut', function () {
        it('formats rut', function () {
            expect(service.formatRut('A30&&*~..97-2198B')).toEqual('3.097.219-8');
        });
    });
});
//# sourceMappingURL=rut.service.spec.js.map
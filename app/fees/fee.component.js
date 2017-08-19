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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fee_service_1 = require("./fee.service");
var lodash_1 = require("lodash");
var FeeComponent = (function () {
    function FeeComponent(_feeService) {
        this._feeService = _feeService;
        this.feeForm = false;
        this.editFeeForm = false;
        this.newFee = {};
        this.editedFee = {};
    }
    FeeComponent.prototype.ngOnInit = function () {
        this.getFees();
    };
    FeeComponent.prototype.getFees = function () {
        this.fees = this._feeService.getFeesFromData();
    };
    FeeComponent.prototype.showEditFeeForm = function (fee) {
        if (!fee) {
            this.feeForm = false;
            return;
        }
        this.editFeeForm = true;
        this.editedFee = lodash_1.clone(fee);
    };
    FeeComponent.prototype.showAddFeeForm = function () {
        // resets form if edited fee
        if (this.fees.length) {
            this.newFee = {};
        }
        this.feeForm = true;
        this.isNewForm = true;
    };
    FeeComponent.prototype.saveFee = function (fee) {
        if (this.isNewForm) {
            // add a new fee
            this._feeService.addProduct(fee);
        }
        this.feeForm = false;
    };
    FeeComponent.prototype.removeFee = function (fee) {
        this._feeService.deleteFee(fee);
    };
    FeeComponent.prototype.updateFee = function () {
        this._feeService.updateFee(this.editedFee);
        this.editFeeForm = false;
        this.editedFee = {};
    };
    FeeComponent.prototype.cancelNewFee = function () {
        this.newFee = {};
        this.feeForm = false;
    };
    FeeComponent.prototype.cancelEdits = function () {
        this.editedFee = {};
        this.editFeeForm = false;
    };
    return FeeComponent;
}());
FeeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'fee.template.html'
    }),
    __metadata("design:paramtypes", [fee_service_1.FeeService])
], FeeComponent);
exports.FeeComponent = FeeComponent;
//# sourceMappingURL=fee.component.js.map
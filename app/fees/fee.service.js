"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fee_data_1 = require("./fee-data");
var lodash_1 = require("lodash");
var FeeService = (function () {
    function FeeService() {
        this.pItems = fee_data_1.FEE_ITEMS;
    }
    FeeService.prototype.getFeesFromData = function () {
        console.log(this.pItems);
        return this.pItems;
    };
    FeeService.prototype.addProduct = function (fee) {
        this.pItems.push(fee);
        console.log(this.pItems);
    };
    FeeService.prototype.updateFee = function (fee) {
        var index = lodash_1.findIndex(this.pItems, function (p) {
            return p.id === fee.id;
        });
        this.pItems[index] = fee;
    };
    FeeService.prototype.deleteFee = function (fee) {
        this.pItems.splice(this.pItems.indexOf(fee), 1);
        console.log(this.pItems);
    };
    return FeeService;
}());
FeeService = __decorate([
    core_1.Injectable()
], FeeService);
exports.FeeService = FeeService;
// getProductsFromService(): Product[] {
//   return [{
//   id: 1,
//   name: 'Scissors',
//   description: 'use this to cut stuff',
//   price: 4.99
// }, {
//   id: 2,
//   name: 'Steak Knives',
//   description: 'use this to eat food with',
//   price: 10.99
// }, {
//   id: 3,
//   name: 'Shot Glass',
//   description: 'use this to take shots',
//   price: 5.99
// }]
// }
//# sourceMappingURL=fee.service.js.map
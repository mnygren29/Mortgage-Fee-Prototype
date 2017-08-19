import { Component, OnInit } from '@angular/core';
import { FeeService } from './fee.service';
import { Fee } from './fee';
import { clone } from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'fee.template.html'
})

export class FeeComponent implements OnInit {
  fees: Fee[];
  feeForm: boolean = false;
  editFeeForm: boolean = false;
  isNewForm: boolean;
  newFee: any = {};
  editedFee: any = {};

  constructor(private _feeService: FeeService) { }

  ngOnInit() {
    this.getFees();
  }

  getFees() {
    this.fees = this._feeService.getFeesFromData();
  }

  showEditFeeForm(fee: Fee) {
    if(!fee) {
      this.feeForm = false;
      return;
    }
    this.editFeeForm = true;
    this.editedFee = clone(fee);
  }

  showAddFeeForm() {
    // resets form if edited fee
    if(this.fees.length) {
      this.newFee = {};
    }
    this.feeForm = true;
    this.isNewForm = true;
  }

  saveFee(fee: Fee) {
    if(this.isNewForm) {
      // add a new fee
      this._feeService.addProduct(fee);
    }
    this.feeForm = false;
  }

  removeFee(fee: Fee) {
    this._feeService.deleteFee(fee);
  }

  updateFee() {
    this._feeService.updateFee(this.editedFee);
    this.editFeeForm = false;
    this.editedFee = {};
  }

  cancelNewFee() {
    this.newFee = {};
    this.feeForm = false;
  }

  cancelEdits() {
    this.editedFee = {};
    this.editFeeForm = false;
  }

}

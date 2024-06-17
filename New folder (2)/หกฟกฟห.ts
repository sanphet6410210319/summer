import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { BackgroundService, VariableSupportService } from "@wealth/common";
import { BondDialog } from "src/app/service/bond.dialog";
import { Location } from '@angular/common';

@Component({
  selector: 'bond-transafer-out',
  templateUrl: './bond-transafer-out.component.html'
})
export class BondTransaferOutComponent implements AfterViewInit, OnInit {
  [x: string]: any;

  public _dto: any = {};
  public selectedOption: string;

  transferorOptionEditorOptions: any = {
    dataSource: [
      { value: 'GSB', label: 'มีบัญชี Custodian กับ GSB' },
      { value: 'Other', label: 'มีบัญชี Custodian ที่อื่นๆ' }
    ],
    displayExpr: 'label',
    valueExpr: 'value',
    layout: 'horizontal',
    elementAttr: {
      id: "bond.transaction.ctd.transferOut.radioBox.transferorOption",
    },
    onValueChanged: (event) => {
      if (event.value) {
        this.selectedOption = event.value;
      }
    }
  };
  

  transactionDateEditorOptions: any = {
    elementAttr: {
      id: "bond.transaction.ctd.transferOut.dateBox.transactionDate",
    },
    displayFormat: "dd/MM/yyyy",
  };

  effecttiveDateEditorOptions: any = {
    elementAttr: {
      id: "bond.transaction.ctd.transferOut.dateBox.effecttiveDate",
    },
    displayFormat: "dd/MM/yyyy",
  };

  cifNoEditorOptions: any = {
    elementAttr: {
      id: "bond.transaction.ctd.transferOut.textBox.cifNo",
    }
  };

  depositoryAccountNoEditorOptions: any = {
    elementAttr: {
      id: "bond.transaction.ctd.transferOut.textBox.depositoryAccountNo",
    }
  };

  investorNameEditorOptions: any = {
    elementAttr: {
      id: "bond.transaction.ctd.transferOut.textBox.investorName",
    }
  };

  registerNoEditorOptions: any = {
    elementAttr: {
      id: "bond.transaction.ctd.transferOut.textBox.registerNo",
    }
  };

  securityCodeEditorOptions: any = {
    elementAttr: {
      id: "bond.transaction.ctd.transferOut.selectBox.securityCode",
    }
  };

  securityNameEditorOptions: any = {
    elementAttr: {
      id: "bond.transaction.ctd.transferOut.textBox.securityName",
    },
    disabled: true
  };

  availableUnitsEditorOptions: any = {
    elementAttr: {
      id: "bond.transaction.ctd.transferOut.textBox.transferInUnits",
    },
    disabled: true
  };

  transferOutUnitsEditorOptions: any = {
    elementAttr: {
      id: "bond.transaction.ctd.transferOut.textBox.transferOutUnits",
    }
  };

  companyCodeEditorOptions: any = {
    elementAttr: {
      id: "bond.transaction.ctd.transferOut.selectBox.companyCode",
    }
  };

  remarkEditorOptions: any = {
    elementAttr: {
      id: "bond.transaction.ctd.transferOut.textBox.remarkEditor",
    }
  };

  public saveButtonOption: any = {
    text: "OK",
    type: "primary flat",
    useSubmitBehavior: true,
    elementAttr: { id: 'bond.transaction.ctd.transferOut.button.save' },
    onClick: () => {
      this.doSave();
    }
  };

  public cancelButtonOption: any = {
    text: "CANCEL",
    type: "primary text",
    elementAttr: { id: 'bond.transaction.ctd.transferOut.button.cancel' },
    onClick: () => {
      this.back();
    }
  };

  constructor(
    protected service: BackgroundService,
    protected routed: ActivatedRoute,
    protected router: Router,
    protected translate: TranslateService,
    protected cd: ChangeDetectorRef,
    protected dialog: MatDialog,
    private location: Location
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this._dto = this.initDto();
  }

  initDto(): any {
    return {};
  }

  doSave() {
    let confirm = this.translate.instant("bond.transaction.ctd.transferOut.dialogConfirm")
    BondDialog.ShowConfirm(this.dialog, confirm).then((r) => {
      if (r) {
        console.log("this for show dto." + JSON.stringify(this._dto));
      }
    });
  }

  back() {
    this.location.back();
  }

  changeFormState() {
    this.cd.detectChanges();
  }
}
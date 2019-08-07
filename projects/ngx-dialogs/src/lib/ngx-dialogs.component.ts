import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Ngxalert } from './ngxalert';
@Component({
  selector: 'ngx-dialogs',
  templateUrl: './ngx-dialogs.component.html',
  styleUrls: ['./ngx-dialogs.component.scss']
})
export class NgxDialogsComponent implements OnChanges {

  @Input() config: any = null;
  dialogId: string = null;
  customCssClass: string = null;
  dialogTypeClass: string = '';
  dialogTitle: string = '';
  isShow: boolean = false;
  constructor() {
    this.setDialogType();
    this.dialogId = "ngxdialog-" + document.getElementsByClassName('ngx-dialog').length;
  }
  setDialogType() {
    let type = 'S';
    if (this.config && this.config.type) {
      type = this.config.type;
    }
    switch (type) {
      case "M":
        this.dialogTypeClass = 'd-m';
        break;
      case "L":
        this.dialogTypeClass = 'd-l';
        break;
      case "XL":
        this.dialogTypeClass = 'd-xl';
        break;
      default:
        this.dialogTypeClass = 'd-s';
        break;
    }
  }
  ngOnChanges() {
    let dialogObj = new Ngxalert;
    if (this.config) {
      this.isShow = true;
      if (this.config.id) {
        this.dialogId = this.config.id;
      }
      if (this.config.customCssClass) {
        this.customCssClass = this.config.customCssClass;
      }
      this.setDialogType();

      if (this.config.title) {
        this.dialogTitle = this.config.title;
      }
      setTimeout(()=>{
        if (!this.config.strict && document.getElementById(this.dialogId)) {
          
          document.getElementById(this.dialogId).getElementsByClassName('ngx-dialog-overlay').item(0).addEventListener('click', (e)=>{
            this.closeDialog();
          })
        }
        let dialogBody:any = document.getElementById(this.dialogId).getElementsByClassName('ngx-dialog-body').item(0);
        if (window.innerHeight < dialogBody.scrollHeight) {
          dialogBody.style['overflow-y']='scroll';
        } else {
          dialogBody.style['overflow-y']='hidden';
        }
      },10);
    }

  }
  closeDialog() {
    this.isShow = false;
  }

}

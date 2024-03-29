import { Component, OnInit } from '@angular/core';
import {Ngxalert} from 'ngx-dialogs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  simpleAlert: any = new Ngxalert;
  alertWithustomCssClass: any = new Ngxalert;
  alertWithBtnObj:any = new Ngxalert;
  subAlertObj:any = new Ngxalert;
  confirmAlert:any = new Ngxalert;
  strictBackgroundDialog:any = new Ngxalert;
  modalDialogConfig:any = null;
  lightBoxDialogConfig:any = new Ngxalert;
  constructor() { }

  ngOnInit() {
    
  }
  openSimpleAlert() {
    this.simpleAlert.create({
      title: 'Simple Dialog',
      message: 'It is a simple alert dialog',
      });
  }
  openAlertWithCustomCssClass() {
    this.alertWithustomCssClass.create({
      title: 'Dialog with Custom css class',
      message: 'It is a dialog with custom css class',
      customCssClass: 'custom-alert'
      });
    
  }
  openAlertWithButton() {
    this.alertWithBtnObj.create({
      title: 'Dialog with Buttons',
      message: 'It is a alert box with buttons',
      strict: false,
      
      buttons : [
        {
          title : 'Ok',
          class: 'ok-btn',
          event : ()=>{
            alert('you press ok');
          }
        },
        {
          title : 'Yes',
          class: 'yes-btn',
          event : ()=>{
            this.subAlertObj.create({
              title: 'Sub Alert',
              message: 'You press Yes button',
              confirm : () =>{
                alert('thank you');
              }
            });
          }
        },
        {
          title : 'No',
          class: 'no-btn',
          event : ()=>{
            alert('you press No');
          }
        }
      ]
    });
  }

  openConfirmDialog() {
    this.confirmAlert = new Ngxalert;
    this.confirmAlert.create({
      title: 'Confirm Dialog',
      // strict : true,
      message: 'It is a confirm dialog box',
      confirm: ()=> {
        alert('you click "yes"');
        
      },
    })
  }

  openstrictBackgroundDialog() {
    this.strictBackgroundDialog.create({
      title :'Dialog with strict background',
      message : 'It is a dialog with strict backgrond. only close by clicking on "x" ',
      strict: true,
      type:'M'
    })
  }

  openModalDialog() {
    this.modalDialogConfig = {};
    this.modalDialogConfig['title'] = 'Simple Modal';
    this.modalDialogConfig['type'] = 'M';
    this.modalDialogConfig['strict'] = true;
    // this.modalDialogConfig['id'] = 'simple-ngx-modal';
  }
  openLightBoxDialog() {
    this.lightBoxDialogConfig.create({
      // "src": 'assets/img-thumb.jpg'
      "src": 'assets/img.jpeg'
    });
  }
}


# ngx-dialogs

  

All type of dialogs in one package for angular

 -   [Simple Alert Dialog](#simple-alert-dialog)
 -   [Dialog with custom style](#dialog-with-custom-style)
 - [Dialog with custom buttons](#dialog-with-custom-buttons)
 - [Confirm Dialog](#confirm-dialog)
 - [Dialog with static background](#dialog-with-static-background)
 - [Modal Dialog](#modal-dialog)
 - [Lightbox Dialog](#lightbox-dialog)

  
  

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/BinsSoft/ngx-pager) [![Support](https://img.shields.io/badge/Support-Angular%202%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%204%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%205%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%206%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%207%2B-blue.svg?style=flat-square)]() ![Support](https://img.shields.io/badge/Support-ES6-blue.svg?style=flat-square) [![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()

  

> Please support this project by simply putting a Github star. Share this library with friends on Twitter and everywhere else you can.

  

## Table of contents:

  

- Getting started

-  [Installation](#installation)

-  [Implementation](#implementation)

-  [Settings Option](#settings-option)

-  [Demo](#demo)

-  [Creators](#creator)

-  [License](#license)

  

## Getting started

  

### Installation

    npm install ngx-dialogs --save

  

### Implementation

  

import "**NgxDialogsModule**" in your application module. For example: **app.module.ts**

    import {NgxDialogsModule} from  'ngx-dialogs';
    @NgModule({
	    imports :[
		    NgxDialogsModule
		    ...
	    ]
    })
    export  class  AppModule { }
    
add configration in your component. For example : **MyOwn.component.ts**

    import {Ngxalert} from  'ngx-dialogs';

#### Simple Alert Dialog
    
    export  class  MyOwnComponent  implements  OnInit {
	    simpleAlert:  any  =  new  Ngxalert;
	    openSimpleAlert() {
		    this.simpleAlert.create({
			    title: 'Simple Dialog',
			    message: 'It is a simple alert dialog',
			});
		}
    }
##### HTML

    <a href="javascript:void(0)" (click)="openSimpleAlert()">Click Here</a>

#### Dialog with custom style

    export  class  MyOwnComponent  implements  OnInit {
	    alertWithustomCssClass:  any  =  new  Ngxalert;
	    openAlertWithCustomCssClass() {
		    this.alertWithustomCssClass.create({
			    title: 'Custom style Dialog',
			    message: 'It is a custom style alert dialog',
			    customCssClass:  'custom-alert'
			});
		}
    }

##### HTML

    <a  href="javascript:void(0)"  (click)="openAlertWithCustomCssClass()">Click HERE </a>

#### Dialog with custom buttons

    export  class  MyOwnComponent  implements  OnInit {
	    alertWithBtnObj:  any  =  new  Ngxalert;
	    openAlertWithButton() {
			this.alertWithBtnObj.create({
					title:  'Dialog with Buttons',
					message:  'It is a alert box with buttons',
					buttons : [
							{
								title :  'Ok',
								class:  'ok-btn',
								event : ()=>{
									alert('you press ok');
								}
							},
							{
								title :  'Yes',
								class:  'yes-btn',
								event : ()=>{
									alert('you press yes');
								}
							},
							{
								title :  'No',
								class:  'no-btn',
								event : ()=>{
									alert('you press No');
								}
							}
						]
					});
				}
		    }

##### HTML

    <a  href="javascript:void(0)"  (click)="openAlertWithButton()">Click HERE </a>

#### Confirm Dialog

    export  class  MyOwnComponent  implements  OnInit {
	    confirmAlert:  any  =  new  Ngxalert;
	    openConfirmDialog() {
		    this.confirmAlert.create({
			    title:  'Confirm Dialog',
				message:  'It is a confirm dialog box',
				confirm: ()=> {
					alert('you click "yes"');
				},
			});
		}
    }

##### HTML

    <a  href="javascript:void(0)"  (click)="openConfirmDialog()">Click HERE </a>

#### Dialog with static background

    export  class  MyOwnComponent  implements  OnInit {
	    strictBackgroundDialog:  any  =  new  Ngxalert;
	    openstrictBackgroundDialog() {
		    this.strictBackgroundDialog.create({
			    title :'Dialog with static background',
				message :  'It is a dialog with static backgrond. only close by clicking on "x" ',
				strict:  true,
				type:'M'
			});
		}
    }

##### HTML

    <a  href="javascript:void(0)"  (click)="openstrictBackgroundDialog()">Click HERE </a>

#### Modal Dialog

    export  class  MyOwnComponent  implements  OnInit {
	    modalDialogConfig:  any  =  {};
	    openModalDialog() {
		    this.modalDialogConfig  = {};
			this.modalDialogConfig['title'] =  'Simple Modal';
			this.modalDialogConfig['type'] =  'M';
			this.modalDialogConfig['strict'] =  true;
		}
    }

##### HTML

    <a  href="javascript:void(0)"  (click)="openModalDialog()">Click HERE </a>
    <ngx-dialogs [config]="modalDialogConfig">
	    <p>It is a modal dialog</p>
		<button (click)="openAlertWithButton()">Open Simple Alert</button>
	</ngx-dialogs>

#### Image Lightbox Dialog

    export  class  MyOwnComponent  implements  OnInit {
	    lightBoxDialogConfig:  any  =  new  Ngxalert;
	    openLightBoxDialog() {
		    this.lightBoxDialogConfig.create({
			    "src":  'path/to/big/image/img.jpg'
			});
		}
    }

##### HTML
	<img  title="Click to open light box"  src="path/to/thumb/img-thumb.jpg"  (click)="openLightBoxDialog()"/>

  
  

### Settings Option


Name | Description | Default Value | Example
|--|--|--|--|
| `title` | to display the heading of the dialog | NULL | `'title':'Sample Heading'`
| `message` | to display the message of the dialog | NULL | `'message':'Message of the alert box'`
| `src` | to add the image path for lightbox dialog | NULL | `'src':'http://test-domain/img.jpg'`
| `strict` | to make the dialog background static | false | `'strict': true`
| `customCssClass` | to add custom css clas with the dialog| NULL | `'customCssClass': 'custom-dialog'`
| `type` | to manage the dialog width| 'S' | `'type': 'S/M/L/XL' ` (any one at e time)
| `confirm` | event only for confirm dialog| ()=>{} | `confirm:()=>{ alert('click on confirm'); }`
| `buttons` | to manage multiple custom buttons in the dialog | [] | `buttons : [ {title :  'Ok',class:  'ok-btn',event : ()=>{alert('you press ok');}},]`
| `buttons.title` |to add the text of the button| 'OK' | `buttons : [ {title :  'Ok'}]`
| `buttons.class` |to add the custom class of the button| 'ok-btn' | `buttons : [ {class :  'ok-btn'}]`
| `buttons.event` | event of the perticular button | ()=>{} | `buttons : [ {event : ()=>{alert('you press ok');}}]`



  

## Demo

[Click Here](https://stackblitz.com/edit/ngx-dialogs) for the demo

  

## Creator

  

#### [Tonmoy Nandy](tonmoy.nandy@gmail.com)

-  [@GitHub](https://github.com/tonmoynandy)

  

## License

  

#### The MIT License (MIT)
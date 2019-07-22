import { NgModule } from '@angular/core';
import { NgxDialogsComponent } from './ngx-dialogs.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [NgxDialogsComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgxDialogsComponent]
})
export class NgxDialogsModule { }

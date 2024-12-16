import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConversationalUIModule } from '@progress/kendo-angular-conversational-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { EditorModule } from '@progress/kendo-angular-editor';
import { ChartsModule } from "@progress/kendo-angular-charts";
import { MapModule } from "@progress/kendo-angular-map";
import { MessageService } from '@progress/kendo-angular-l10n';
import { MyMessageService } from './my-message.service';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    InputsModule,
    HttpClientModule,
    ConversationalUIModule,
    EditorModule,
    ChartsModule,
    MapModule,
    GridModule
  ],
  providers: [{ provide: MessageService, useClass: MyMessageService }],

  bootstrap: [AppComponent]
})
export class AppModule { }

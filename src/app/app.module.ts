import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { ColumnchartComponent } from './columnchart/columnchart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { CustomdashComponent } from './customdash/customdash.component';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Customdash2Component } from './customdash2/customdash2.component';
import { DialogModule } from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { WindowResizeDirective } from './shared/window-resize.directive';
import { AreachartComponent } from './areachart/areachart.component';
import { Customdash3Component } from './customdash3/customdash3.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    ColumnchartComponent,
    BarchartComponent,
    PiechartComponent,
    DonutchartComponent,
    CustomdashComponent,
    Customdash2Component,
    HighlightMouseDirective,
    WindowResizeDirective,
    AreachartComponent,
    Customdash3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    DropdownModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    DialogModule,
    RadioButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

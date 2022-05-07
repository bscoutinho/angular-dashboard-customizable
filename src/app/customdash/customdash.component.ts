import { Component, ViewContainerRef, ViewChild, Type, ComponentRef} from '@angular/core';

import { LinechartComponent } from '../linechart/linechart.component';
import { BarchartComponent } from '../barchart/barchart.component';
import { ColumnchartComponent } from '../columnchart/columnchart.component';
import { PiechartComponent } from '../piechart/piechart.component';
import { DonutchartComponent } from '../donutchart/donutchart.component';

interface IDashboard {
  name: string,
  code: string
}

interface IChart {
  name: string,
  code: Type<any>
}

@Component({
  selector: 'app-customdash',
  templateUrl: './customdash.component.html',
  styleUrls: ['./customdash.component.scss']
})
export class CustomdashComponent {
  @ViewChild('container1', {read: ViewContainerRef}) container1: ViewContainerRef;
  @ViewChild('container2', {read: ViewContainerRef}) container2: ViewContainerRef;
  @ViewChild('container3', {read: ViewContainerRef}) container3: ViewContainerRef;
  @ViewChild('container4', {read: ViewContainerRef}) container4: ViewContainerRef;
  @ViewChild('container5', {read: ViewContainerRef}) container5: ViewContainerRef;
  @ViewChild('container6', {read: ViewContainerRef}) container6: ViewContainerRef;

  // Keep track of list of generated components for removal purposes
  components : ComponentRef<any>[] = [];

  // Expose components so that it can be used in the template
  lineChart = LinechartComponent;
  barChart = BarchartComponent;
  columnChart = ColumnchartComponent;
  pieChart = PiechartComponent;
  donutChart = DonutchartComponent;

  // Variables to define templates in Dropdown
  listDash: IDashboard[];
  selectedDash: IDashboard;
  listChart: IChart[];
  selectedChart: IChart;

  constructor() { 
    //List of dashboards templates
    this.listDash = [
      {name: 'Dashboard 01', code: 'D01'},
      {name: 'Dashboard 02', code: 'D02'},
      {name: 'Dashboard 03', code: 'D03'},
      {name: 'Dashboard 04', code: 'D04'},
    ];

    //List of Chart templates
    this.listChart = [
      {name: 'Line Chart', code: this.lineChart},
      {name: 'Bar Chart', code: this.barChart},
      {name: 'Column Chart', code: this.columnChart},
      {name: 'Pie Chart', code: this.pieChart},
      {name: 'Donut Chart', code: this.donutChart},
    ];

    // dashboard defined by default in dropdown
    this.selectedDash = {name: 'Dashboard 01', code: 'D01'}

    // chart defined by default in dropdown
    this.selectedChart = {name: 'Line Chart', code: this.lineChart}
  }

  // Create component dynamically inside the ng-template choosed
  addComponent(componentClass: Type<any>, container: string) {
    let vcr = this.getContainer(container);
    if (vcr.length === 0) {
      vcr.createComponent(componentClass);
    }
  }

  // Remove component
  removeComponent(container: string) {
    let vcr: any = this.getContainer(container);
    return vcr.clear();
  }

  getContainer(container: string): any {
    switch (container) {
      case 'container1':
        return this.container1
      case 'container2':
        return this.container2
      case 'container3':
        return this.container3   
      case 'container4':
        return this.container4  
      case 'container5':
        return this.container5  
      case 'container6':
        return this.container6   
    }
  }
}

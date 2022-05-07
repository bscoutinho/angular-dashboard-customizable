import { Component, OnInit, QueryList, Type, ViewChildren, ViewContainerRef } from '@angular/core';

import { LinechartComponent } from '../linechart/linechart.component';
import { BarchartComponent } from '../barchart/barchart.component';
import { ColumnchartComponent } from '../columnchart/columnchart.component';
import { PiechartComponent } from '../piechart/piechart.component';
import { DonutchartComponent } from '../donutchart/donutchart.component';
import { AreachartComponent } from '../areachart/areachart.component';

interface IChart {
  name: string,
  code: Type<any>,
  type: string
}

@Component({
  selector: 'app-customdash2',
  templateUrl: './customdash2.component.html',
  styleUrls: ['./customdash2.component.scss']
})
export class Customdash2Component implements OnInit {

  //Add multiple templates (Charts) in ng-template
  @ViewChildren('maincontainer', { read: ViewContainerRef })
  dynComponents: QueryList<ViewContainerRef>;

  // Expose components so that it can be used in the template
  lineChart = LinechartComponent;
  barChart = BarchartComponent;
  columnChart = ColumnchartComponent;
  pieChart = PiechartComponent;
  donutChart = DonutchartComponent;
  areaChart = AreachartComponent;

  listChart: IChart[]; 
  selectedChart: IChart;
  chartObj: any;
  displayBasic2: boolean = false;
  selectedSizeChart: number = 0
  btnAddChartDisable: boolean = true;
  rdSimpleDisable: boolean = true;
  rdDoubleDisable: boolean = true;
  dashObj: any = [];
  btnCreateDashboardDisable: boolean = true;
  innerWidth: any;

  // Reorder Variables
  rowElements: number = 0;
  previewDash: any = [];
  previewObj: any = [];
  currentRow: any = [];
  openRow: boolean = false;
  reorderDone: boolean = false;

  constructor() { 
    // Object with all charts properties
    this.listChart = [
      {name: 'Line Chart', code: this.lineChart, type:'flex'},
      {name: 'Bar Chart', code: this.barChart, type:'flex'},
      {name: 'Area Chart', code: this.areaChart, type:'flex'},
      {name: 'Column Chart', code: this.columnChart, type:'double'},
      {name: 'Pie Chart', code: this.pieChart, type:'simple'},
      {name: 'Donut Chart', code: this.donutChart, type:'simple'},
    ];
  }

  ngOnInit(): void {
  }

  // Open dialog to define a dashboard
  showBasicDialog2() {
    this.displayBasic2 = true;
    this.cleanVar()
  }

  //Clean all dashboard variables
  cleanVar() {
    this.dashObj = [];
    this.chartObj = undefined;
    this.rowElements = 0;
    this.previewDash = [];
    this.previewObj = [];
    this.currentRow = [];
    this.openRow = false;
    this.reorderDone = false;
  }

  // Check chart type and enable/disable radio and buttons
  checkSizeChart() {
    debugger
    let type = this.selectedChart.type
    if (type === 'flex') {
      this.rdSimpleDisable = false;
      this.rdDoubleDisable = false;
      this.selectedSizeChart = 0;
      this.btnAddChartDisable = true;
    }

    if (type === 'simple') {
      this.rdSimpleDisable = true;
      this.rdDoubleDisable = true;
      this.selectedSizeChart = 1;
      this.btnAddChartDisable = false;
    }

    if (type === 'double') {
      this.rdSimpleDisable = true;
      this.rdDoubleDisable = true;
      this.selectedSizeChart = 2;
      this.btnAddChartDisable = false;
    }
  }

  // Click radio to define chart size
  clickRadio() {
    let res: number = this.selectedSizeChart
    if (res === 1 || res === 2) {
      this.btnAddChartDisable = false;
    }
  }

  // Add chart in the dialog list
  addChart() {
    this.chartObj = this.selectedChart;
    this.chartObj.size = this.selectedSizeChart;
    this.dashObj.push(this.chartObj);
    if(this.dashObj.length > 0) {
      this.btnCreateDashboardDisable = false
    }

     /*  Reorder - Begin */
    //Create a previewObj to store multidimensional array
    this.previewObj = this.chartObj
    // Sum row size in dashboard
    this.rowElements = this.rowElements + this.previewObj.size
    this.createDashboardPreview();
    //If reorder happens flat previewDash; copy to dashObj; copy currentRow to dashOBj
    if(this.reorderDone) {
      this.dashObj = this.previewDash.flat()
      this.dashObj.push(this.currentRow[0])
    }
    /*  Reorder - End */
  
  }

  // Create a Dashboard
  addDashboard() {
    this.dynComponents.map(
      (vcr: ViewContainerRef, index: number) => {
        let compRef: any = vcr.createComponent(this.dashObj[index].code)
        //set size chart in viewContainerRef component
        if (this.dashObj[index].size === 2) {
          compRef.instance.sizeChart = 'double'
        }
        /* let compRef = vcr.createComponent(this.dashObj[index].code) */
        /* compRef.location.nativeElement.setAttribute("class", "item1") */
        /* this.renderer.addClass(compRef.location.nativeElement, 'item1') */
        /* vcr.element.nativeElement.previousSibling.setAttribute("class", "item1") */
      }
    )
  }

  // Get window width
  setWidth($event: any) {
    this.innerWidth = $event
  }

  /* Reorder Functions*/

  // Check if there any row with open status in preview dashboard
  checkOpenRow() {
    let openFounded = false;
    this.previewDash.map((row: any) => {
        openFounded = (row.status === 'open' ? true : false);
    })
    return openFounded;
  }

  // Try reorder a chart in rows with status open or add a new currentRow
  reorderOrAdd() {
    let elAdded: boolean = false;
      //Iterate over each row in previousDash
      this.previewDash.map((row: any) => {
        // Condition to check if element was added or reordered
        if(!elAdded) {  
          // Check in each row if status is 'open' to try to reorder
          if(row.status === 'open') {
            // Get the amount of size of each row
            const sum = row.reduce((accumulator: any, object: { size: number; }) => {
              return accumulator + object.size;
            }, 0);
            //Check if chart fit in this row: else create a new row 
            if (sum + this.previewObj.size === 3) {
                row.push(this.previewObj)
                row.status = 'closed'
                elAdded = true
                this.reorderDone = true
            } else {
                this.previewDash.push(this.currentRow)
                this.rowElements = 2
                this.currentRow = []
                this.currentRow.push(this.previewObj);
                this.currentRow.status = 'open'
                elAdded = true
            } 
          }
        }
      })
  }

  //Create a previewObj that simulates grids
  createDashboardPreview() {
    this.openRow = this.checkOpenRow();
    //Try reorder first if exist row with status open
    if (this.openRow) {
      this.reorderOrAdd();
    //If not exist open row execute default flow
    } else {
      //Check if row size is under 3 - add chart and status open
      if (this.rowElements <= 3) {
        this.currentRow.push(this.previewObj);
        this.currentRow.status = 'open'
        //Check if row size is equal 3 - add chart and status closed
        if (this.rowElements === 3) {
          this.currentRow.status = 'closed'
          this.previewDash.push(this.currentRow)
          this.rowElements = 0
          this.currentRow = []
        }
      //Check if row size more than 3 - push previous row to previousDash and add new currentRow both status are open
      } else {
        this.previewDash.push(this.currentRow)
        this.rowElements = 2
        this.currentRow = []
        /* this.testReorder(); */
        this.currentRow.push(this.previewObj);
        this.currentRow.status = 'open'
      }
    }
  }
}

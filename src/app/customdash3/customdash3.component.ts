import { AfterViewInit, Component, ContentChild, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-customdash3',
  templateUrl: './customdash3.component.html',
  styleUrls: ['./customdash3.component.scss']
})
export class Customdash3Component implements OnInit, AfterViewInit {

  @ViewChild('areaWidget') areaWidget:TemplateRef<any>;
  @ViewChild('barWidget') barWidget:TemplateRef<any>;
  @ViewChild('columnWidget') columnWidget:TemplateRef<any>;
  @ViewChild('donutWidget') donutWidget:TemplateRef<any>;
  @ViewChild('lineWidget') lineWidget:TemplateRef<any>;
  @ViewChild('pieWidget') pieWidget:TemplateRef<any>;
  @ViewChild('blankWidget') blankWidget:TemplateRef<any>;

  rdSimpleDisable: boolean = true;
  rdDoubleDisable: boolean = true;
  selectedSizeWidget: number = 0;
  btnAddWidgetDisable: boolean = true;
  innerWidth: any = '';
  dashObj: any = [];
  widgetOptions: any[] = []; 
  selectedWidget: any;
  listWidget: any[] = [];
  sizeChart: number = 2;

  constructor() { 

    console.log('innerWidth',window.innerWidth)

    this.widgetOptions = [
      {name: 'Area Widget', code: 'areaWidget', type:'flex'},
      {name: 'Bar Widget', code: 'barWidget', type:'flex'},
      {name: 'Column Widget', code: 'columnWidget', type:'double'},
      {name: 'Donut Widget', code: 'donutWidget', type:'simple'},
      {name: 'Line Widget', code: 'lineWidget', type:'flex'},
      {name: 'Pie Widget', code: 'pieWidget', type:'simple'},
    ];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.listWidget =  [
      {'component': this.getComponent('blankWidget'), 'size': 1, 'initial': true}
    ]
  }

  clickRadio() {
    let res: number = this.selectedSizeWidget
    if (res === 1 || res === 2) {
      this.btnAddWidgetDisable = false;
    }
  }

  checkSizeChart() {
    let type = this.selectedWidget.type
    if (type === 'flex') {
      this.rdSimpleDisable = false;
      this.rdDoubleDisable = false;
      this.selectedSizeWidget = 0;
      this.btnAddWidgetDisable = true;
    }

    if (type === 'simple') {
      this.rdSimpleDisable = true;
      this.rdDoubleDisable = true;
      this.selectedSizeWidget = 1;
      this.btnAddWidgetDisable = false;
    }

    if (type === 'double') {
      this.rdSimpleDisable = true;
      this.rdDoubleDisable = true;
      this.selectedSizeWidget = 2;
      this.btnAddWidgetDisable = false;
    }
  }

  addWidget() {
    if (this.listWidget[0] && this.listWidget[0].initial) {
      this.listWidget =  []
    }
    let widget = {'component': this.getComponent(this.selectedWidget.code), 'size': this.selectedSizeWidget}
    this.listWidget.push(widget)
  }

  getComponent(widget: string): any {
    switch (widget) {
      case 'areaWidget':
        return this.areaWidget
      case 'barWidget':
        return this.barWidget
      case 'columnWidget':
        return this.columnWidget  
      case 'donutWidget':
        return this.donutWidget  
      case 'lineWidget':
        return this.lineWidget  
      case 'pieWidget':
        return this.pieWidget  
      case 'blankWidget':
        return this.blankWidget
    }
  }

  

}

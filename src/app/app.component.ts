import { Component, OnInit, ViewContainerRef, TemplateRef } from "@angular/core";

interface IDashboard {
  name: string,
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Variables to define Dashboard in Dropdown
  modelsDash: IDashboard[];
  selectedDash: IDashboard;

  constructor() {
    this.modelsDash = [
      {name: 'Dashboard 01', code: 'D01'},
      {name: 'Dashboard 02', code: 'D02'},
      {name: 'Dashboard 03', code: 'D03'},
      {name: 'Dashboard 04', code: 'D04'},
    ];

    this.selectedDash = {name: 'Dashboard 01', code: 'D01'}
  }

  ngOnInit(): void {
  }

  getValue() {
    console.log('value', this.selectedDash)
  }
}

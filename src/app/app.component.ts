import { Component, OnInit } from '@angular/core';
import {DataService} from './service/data.service';

import {} from '../../src/assets/'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  id = 'chart1';
  width = 300;
  height = 300;
  type = 'column2d';
  dataFormat = 'json';
  dataSourceDemo;

  responseData: any;
  top5Data: Array<any>;
  teamImage: any;

constructor(private dataService: DataService){
this.top5Data = [];
this.teamImage = '../assets/circle.png';
}

ngOnInit(){
this.dataService.getDataFromApi().subscribe((response)=>{
  console.log(response);
this.responseData = response;
this.top5Data = this.responseData.splice(0, 5);
  console.log(this.top5Data);
  this.formChartData();
});

}

formChartData(){

const chartData = [];
let chartDataObject = {};
    for(let i=0; i<3;i++){
      chartDataObject={
        "label": this.top5Data[i].Efficiency,
        "value": this.top5Data[i].Achievement
      };
      chartData.push(chartDataObject);
    }
    this.dataSourceDemo = {
      "chart": {
          "caption": "Top 3 GROUPS",
          // "subCaption": "Top 5 stores in last month by revenue",
          "numberprefix": "",
          "theme": "fint"
      },
      "data": [chartData]
}

console.log(chartData);
}
}


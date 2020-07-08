import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {
  registro:any[]=[];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ["Usuarios", "Conductores", "Unidades"];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [0,0,0], label: 'Registros de la empresa' },
  ];

  constructor(public apis:ApisService) {
    this.apis.getUsersList().subscribe(
      data => {
        this.apis.getDriversList().subscribe(
          info => {
            this.apis.getUnitiesList().subscribe(
              size => {
                var counterData = 0;
                var counterInfo = 0;
                var counterSize = 0;

                Object.keys(data).forEach(function(key) {
                  counterData ++;
                });
                Object.keys(info).forEach(function(key) {
                  counterInfo ++;
                });
                Object.keys(size).forEach(function(key) {
                  counterSize ++;
                });
        
                this.barChartData = [
                  { data: [counterData, counterInfo, counterSize], label: 'Registros de la empresa' },
                ];
              },
              err => {
                console.log(err);
              }
              
            );
          },
          err => {
            console.log(err);
          }
          
        );
      },
      err => {
        console.log(err);
      }
      
    );
   }

  ngOnInit() {
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}

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
  public barChartLabels: Label[] = ['Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 60], label: 'Registros Mensuales' },
  ];

  constructor(public apis:ApisService) {
    this.apis.getUsers().subscribe(
      info => {
        this.barChartData = [
          { data: [info["enero"], info["febrero"], info["marzo"], info["abril"], info["mayo"], info["junio"], info["julio"]], label: 'Registros Mensuales' },
        ];
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

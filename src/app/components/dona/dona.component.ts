import { Component, Input, OnInit, signal } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css'],
})
export class DonaComponent implements OnInit {
  ngOnInit(): void {
    this.doughnutChartData.datasets[0].data = this.inputData;
    this.doughnutChartData.labels = this.doughnutChartLabels;
  }
  @Input() title: string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: string[] = [
    'Label 1',
    'Label 2',
    'Label 3',
  ];

  @Input('data') inputData = [350, 450, 100];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.inputData,
        backgroundColor: ['#6857e6', '#009fee', '#f02059'],
      },
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';
}

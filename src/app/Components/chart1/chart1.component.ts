import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component {
  chart: any;

  ngAfterViewInit() {
    const ctx = (document.getElementById('graphCanvas1') as HTMLCanvasElement)
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Performance',
            data: [20, 20, 30, 45, 35, 45, 30],
            fill: true,
            borderColor: 'blue',
            tension: 0.1,
            
            backgroundColor: 'rgba(75, 192, 192, 0.5)', // Fill color with transparency
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 0.8)'

          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

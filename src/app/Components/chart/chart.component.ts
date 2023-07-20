import { Component,OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  ngOnInit(): void {
    this.createLineChart();
  }
  createLineChart(): void {
    const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
    const lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Performance',
            data: [10, 20, 30, 25, 35, 40, 30],
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

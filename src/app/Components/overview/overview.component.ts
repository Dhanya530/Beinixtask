import { Component ,OnInit} from '@angular/core';
import { StockChart } from 'angular-highcharts';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
   ELEMENT_DATA?:any = [
    {pages: 1, clicks: 2133, },
    {pages: 2, clicks: 4533, },
    {pages: 3, clicks: 8988, },
  
  ];
  displayedColumns: string[] = ['pages', 'clicks'];
  dataSource = this.ELEMENT_DATA;
  stock?: StockChart;
  activeTabIndex = 0;

  onTabChanged(index: number) {
    this.activeTabIndex = index;
  }
  ngOnInit() {
    
  }
}
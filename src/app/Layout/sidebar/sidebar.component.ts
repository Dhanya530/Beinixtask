import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sideNavStatus:boolean=false
 list=[
  {
    name:'Get Started',
    icon:'fa-solid fa-arrow-trend-up',
    link:'/'
  },
  {
    name:'OverView',
    icon:'fa-sharp fa-regular fa-eye',
    link:'/overview'
  },
  {
    name:'Insights',
    icon:'fa-sharp fa-solid fa-city',
    link:'/'
  }
 ]
 
}

import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideBarToggle=new EventEmitter<boolean>();
  menuStatus:boolean=false
constructor(){}
  ngOnInit(){

  }
  sideBarNavToggle(){
    this.menuStatus=
!this.menuStatus
this.sideBarToggle.emit(this.menuStatus)
  }
}

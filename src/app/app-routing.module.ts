import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './Components/overview/overview.component';
import { GetStartedComponent } from './Components/get-started/get-started.component';


const routes: Routes = [
  { path: '', component: GetStartedComponent },
  { path: 'overview', component: OverviewComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

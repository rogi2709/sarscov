import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DisplaydataComponent}from './pages/displaydata/displaydata.component'
import{MapComponent}from'./pages/map/map.component'


const routes: Routes = [
  {path:'displaydata',component:DisplaydataComponent},
  {path:'map',component:MapComponent},
  { path: '**', redirectTo: 'displaydata'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

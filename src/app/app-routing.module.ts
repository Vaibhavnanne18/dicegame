import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';

const routes: Routes = [
{  path:'', component:HomeComponent},
{  path: 'history', component:HistoryComponent},
{  path: 'player/:id', component:PlayerdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

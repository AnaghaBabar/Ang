import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OSComponent } from './os/os.component';
import { PLComponent } from './pl/pl.component';
import { DBComponent } from './db/db.component';

const routes: Routes = [
  {path:'os', component:OSComponent},
  {path:'pl', component:PLComponent},
  {path:'db', component:DBComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

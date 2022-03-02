import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverwatchComponent } from './overwatch/overwatch.component';

const routes: Routes = [
  {path: 'overwatch', component: OverwatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

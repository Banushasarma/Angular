import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './master/employee/employee.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
  {
    path: 'master',
    loadChildren: () => import('./master/master.module').then(m => m.MasterModule)
    // loadChildren: './master/master.module#MasterModule'
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

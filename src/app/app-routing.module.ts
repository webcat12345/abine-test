import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: 'admin', loadChildren: './pages/admin/admin.module#AdminModule'},
      {path: 'operator', loadChildren: './pages/operator/operator.module#OperatorModule'},
      {path: 'account', loadChildren: './pages/account/account.module#AccountModule'},
      {path: '**', redirectTo: 'admin'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

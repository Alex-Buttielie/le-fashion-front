import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingStoreComponent } from './clothing-store.component';

const routes: Routes = [
  {
    path: '', component: ClothingStoreComponent,
    children: [
      {
        path: 'login-user',
        loadChildren: () => import('./login-user/login-user.module')
          .then(m => m.LoginUserModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login-user'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothingStoreRoutingModule { }

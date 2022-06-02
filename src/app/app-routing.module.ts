import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'clothing-store',
    loadChildren: () => import('./clothing-store/clothing-store.module')
      .then(m => m.ClothingStoreModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'clothing-store'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

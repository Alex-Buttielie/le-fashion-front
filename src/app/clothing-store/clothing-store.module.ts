import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotaoMenuModule } from '../shared/botao-menu';
import { ClothingStoreComponent } from './clothing-store.component';
import { AuthUserService, ClothingStoreGuardService, ClothingStoreService, LoginUserService } from './service';
import { CoreModule } from '../core/core.module';
import { ClothingStoreRoutingModule } from './clothing-store-routing.module';

@NgModule({
  declarations: [ClothingStoreComponent],
  imports: [
    CommonModule, 
    CoreModule,
    BotaoMenuModule, 
    ClothingStoreRoutingModule
  ], 
  providers: [
    AuthUserService,
    ClothingStoreGuardService,
    ClothingStoreService,
    LoginUserService
  ]
  
})
export class ClothingStoreModule { }

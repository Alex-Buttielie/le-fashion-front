import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { BotaoMenuModule } from 'src/app/shared/botao-menu';
import { ClothingStoreModule } from '../clothing-store.module';
import { LoginUserComponent } from './login-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginUserRoutingModule } from './login-user-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [LoginUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule, 
    LoginUserRoutingModule
  ], 
})
export class LoginUserModule { }

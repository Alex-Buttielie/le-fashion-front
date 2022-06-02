import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ParamService, LoadingService, SnackbarMessageService } from 'src/app/shared/service';
import { MatDialog } from '@angular/material/dialog';
import { AuthUserService, LoginUserService } from '../service';
import { environment } from 'src/environments/environment';
import { finalize, Observable } from 'rxjs';
import { LoadingSpinnerComponent } from 'src/app/core/loading-spinner/loading-spinner.component';
import { SucessDialogComponent } from 'src/app/core/sucess-dialog/sucess-dialog.component';
import { ErrorDialogComponent } from 'src/app/core/error-dialog/error-dialog.component';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})

export class LoginUserComponent implements OnInit {

  logo!: any;
  versao!: any;
  dadosEmpresa!: any;
  messageLoggingIn!: string;
  formGroup!: FormGroup;
  hide = true;

  constructor(
    formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private authUserService: AuthUserService,
    private dialog: MatDialog,
    private loginUserService: LoginUserService
  ) {
    this.versao = environment.version;

    if (environment.production) {
      this.logo = '/clothing-store/assets/LOGO-FUNDO-TRANSPARENTE.png';
    } else {
      this.logo = '../../assets/LOGO-FUNDO-TRANSPARENTE.png';
    }
    this.buildForm(formBuilder);
  }

  private buildForm(formBuilder: FormBuilder): void {
    this.formGroup = formBuilder.group({
      email: [],
      password: [],
      isRecoveryKey: [],
      emailRecovery: []
    });

    this.formGroup.get('isRecoveryKey');
    this.formGroup.get('emailRecovery');

    this.formGroup.patchValue({
      isRecoveryKey: false
    })
  }

  ngOnInit(): void {
    this.dadosEmpresa = { nomeEmpresa: 'Le Fashion' };
  }

  validateClothingStoreUser(): void {
    this.loadingService.addLoading();

    this.dialog.open(LoadingSpinnerComponent, {
      data: 'Realizando Login...'
    });

    this.loginUserService.validateLoginClothingStore(this.formGroup.getRawValue())
      .pipe(finalize(() => this.loadingService.removerLoading()))
      .subscribe(
        result => this.validateLogiClothingStoreResult(result),
        fault => this.validateLogiClothingStoreFault(fault)
      );
  }

  validateLogiClothingStoreResult(result: any): void {
    setTimeout(() => this.dialog.closeAll(), 2000);
    this.addDatainTheSection(result);
  }

  private addDatainTheSection(result: any): void {
    this.authUserService.email = result.name;
    this.authUserService.tokenUser = result.token;

  }

  validateLogiClothingStoreFault(fault: { error: any; }): void {
    const { error } = fault;
    this.dialog.closeAll()
    this.dialog.open(ErrorDialogComponent, {
      data: error?.message
    });

  }

  onRecoveryKey() {
    this.formGroup.patchValue({
      isRecoveryKey: true
    });
  }

  recoveryKey() {
    this.loadingService.addLoading();
    this.onSenddingEmail();

    this.loginUserService.recoveryKey(this.formGroup.getRawValue())
      .pipe(finalize(() => this.loadingService.removerLoading()))
      .subscribe(
        result => this.recoveryKeyResult(result),
        fault => this.recoveryKeyFault(fault)
      );

    this.comeBack();
  }
  onSenddingEmail(): void {
    this.dialog.open(LoadingSpinnerComponent, {
      data: 'Enviando nova senha para o e-mail'
    });
  }
  onNewKeyEmission(): void {
    this.dialog.closeAll();
    this.dialog.open(SucessDialogComponent, {
      data: 'Nova senha enviada para o e-mail de cadastro.'
    });
  }
  comeBack(): void {
    this.formGroup.patchValue({
      isRecoveryKey: false
    })
  }

  recoveryKeyResult(result: any): void {
    this.onNewKeyEmission();
  }

  recoveryKeyFault(result: any): void {
    this.formGroup.patchValue({
      isRecoveryKey: true
    })
    this.onErrorRecoveryKey(result);
  }

  onErrorRecoveryKey(result: any) {
    const { error } = result;
    this.dialog.closeAll();
    this.dialog.open(ErrorDialogComponent, {
      data: error?.message
    });
  }
}

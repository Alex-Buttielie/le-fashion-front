import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clothing-store',
  templateUrl: './clothing-store.component.html',
  styleUrls: ['./clothing-store.component.scss']
})
export class ClothingStoreComponent implements OnInit {

  dadosEmpresa: any;
  logo: any;

  constructor(
    private router: Router,
  ) { 
    if (environment.production) {
      this.logo = '/clothing-store/assets/LOGO-FUNDO-TRANSPARENTE.png';
    } else {
      this.logo = '../../assets/LOGO-FUNDO-TRANSPARENTE.png';
    }
  }

  ngOnInit(): void {
    
  }

}

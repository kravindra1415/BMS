import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import {CustomerloginComponent } from './customer-login/customerlogin.component';
import {AccountcreationComponent} from './account-creation/accountcreation.component';
import {FixedDepositComponent} from './fixed-deposit/fixed-deposit.component';
import {TransfermoneyComponent} from './transfer-money/transfermoney.component';


const routes: Routes = [
  {path:'customer-login',component:CustomerloginComponent},
  {path:'account-creation',component:AccountcreationComponent},
  {path:'fixed-deposit',component:FixedDepositComponent},
  {path:'transfer-money',component:TransfermoneyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

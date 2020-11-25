import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import {CustomerloginComponent } from './customer-login/customerlogin.component';
import {AccountcreationComponent} from './account-creation/accountcreation.component';
import {FixedDepositComponent} from './fixed-deposit/fixed-deposit.component';
import {TransfermoneyComponent} from './transfer-money/transfermoney.component';
import {WithdrawlComponent} from './withdrawl/withdrawl.component';
import {DepositComponent} from './deposit/deposit.component';
import {CashierComponent} from './cashier/cashier.component';
import {ClerkComponent} from './clerk/clerk.component';

const routes: Routes = [
  {path:'customer-login',component:CustomerloginComponent},
  {path:'account-creation',component:AccountcreationComponent},
  {path:'fixed-deposit',component:FixedDepositComponent},
  {path:'transfer-money',component:TransfermoneyComponent},
  {path:'withdrawl',component:WithdrawlComponent},
  {path:'deposit',component:DepositComponent},
  {path:'cashier',component:CashierComponent},
  {path:'clerk',component:ClerkComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

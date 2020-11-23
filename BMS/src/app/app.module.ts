import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerloginComponent } from './customer-login/customerlogin.component';
import { AccountcreationComponent } from './account-creation/accountcreation.component'
import { TransfermoneyComponent } from './transfer-money/transfermoney.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { CheckbookComponent } from './checkbook/checkbook.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerloginComponent,
    AccountcreationComponent,
    TransfermoneyComponent,
    InsuranceComponent,
    CheckbookComponent,
    FixedDepositComponent,
    ProfileUpdateComponent,
    TransactionHistoryComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

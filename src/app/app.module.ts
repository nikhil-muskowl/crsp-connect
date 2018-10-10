import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/who-we-are/about-us/about-us.component';
import { WorkCultureComponent } from './pages/who-we-are/work-culture/work-culture.component';
import { VisionAndMissionComponent } from './pages/who-we-are/vision-and-mission/vision-and-mission.component';
import { CsrComponent } from './pages/who-we-are/csr/csr.component';
import { OurGroupOfCompaniesComponent } from './pages/who-we-are/our-group-of-companies/our-group-of-companies.component';
import { KeyPeopleComponent } from './pages/who-we-are/key-people/key-people.component';
import { BookeepingComponent } from './pages/what-we-do/bookeeping/bookeeping.component';
import { AccountingComponent } from './pages/what-we-do/accounting/accounting.component';
import { TaxPreparationComponent } from './pages/what-we-do/tax-preparation/tax-preparation.component';
import { PayrollComponent } from './pages/what-we-do/payroll/payroll.component';
import { MedicalBillingComponent } from './pages/what-we-do/medical-billing/medical-billing.component';
import { InventoryManagementComponent } from './pages/what-we-do/inventory-management/inventory-management.component';
import { ItSolutionsComponent } from './pages/what-we-do/it-solutions/it-solutions.component';
import { AccountantComponent } from './pages/our-clients/accountant/accountant.component';
import { HealthcareComponent } from './pages/our-clients/healthcare/healthcare.component';
import { OtherBusinessesComponent } from './pages/our-clients/other-businesses/other-businesses.component';
import { ItProjectsComponent } from './pages/our-clients/it-projects/it-projects.component';
import { BenefitsComponent } from './pages/why-choose-us/benefits/benefits.component';
import { DataSecurityComponent } from './pages/why-choose-us/data-security/data-security.component';
import { WorkFlowProcessComponent } from './pages/why-choose-us/work-flow-process/work-flow-process.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent, WorkCultureComponent, VisionAndMissionComponent, CsrComponent, OurGroupOfCompaniesComponent, KeyPeopleComponent, BookeepingComponent, AccountingComponent, TaxPreparationComponent, PayrollComponent, MedicalBillingComponent, InventoryManagementComponent, ItSolutionsComponent, AccountantComponent, HealthcareComponent, OtherBusinessesComponent, ItProjectsComponent, BenefitsComponent, DataSecurityComponent, WorkFlowProcessComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

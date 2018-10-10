import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'who-we-are/about-us', component: AboutUsComponent },
  { path: 'who-we-are/work-culture', component: WorkCultureComponent },
  { path: 'who-we-are/vision-and-mission', component: VisionAndMissionComponent },
  { path: 'who-we-are/csr', component: CsrComponent },
  { path: 'who-we-are/our-group-of-companies', component: OurGroupOfCompaniesComponent },
  { path: 'who-we-are/key-people', component: KeyPeopleComponent },
  { path: 'what-we-do/bookeeping', component: BookeepingComponent },
  { path: 'what-we-do/accounting', component: AccountingComponent },
  { path: 'what-we-do/tax-preparation', component: TaxPreparationComponent },
  { path: 'what-we-do/payroll', component: PayrollComponent },
  { path: 'what-we-do/medical-billing', component: MedicalBillingComponent },
  { path: 'what-we-do/inventory-management', component: InventoryManagementComponent },
  { path: 'what-we-do/it-solutions', component: ItSolutionsComponent },
  { path: 'our-clients/accountant', component: AccountantComponent },
  { path: 'our-clients/healthcare', component: HealthcareComponent },
  { path: 'our-clients/other-businesses', component: OtherBusinessesComponent },
  { path: 'our-clients/it-projects', component: ItProjectsComponent },
  { path: 'why-choose-us/benefits', component: BenefitsComponent },
  { path: 'why-choose-us/data-security', component: DataSecurityComponent },
  { path: 'why-choose-us/work-fllow-process', component: WorkFlowProcessComponent },
  { path: 'contact-us', component: ContactComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

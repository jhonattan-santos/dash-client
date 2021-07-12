import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { ListCustomerComponent } from './pages/list-customer/list-customer.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DeleteCustomerComponent } from './pages/delete-customer/delete-customer.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    NewCustomerComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    DataTableComponent,
    DeleteCustomerComponent,
    CustomerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

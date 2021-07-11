import { DeleteCustomerComponent } from './pages/delete-customer/delete-customer.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { ListCustomerComponent } from './pages/list-customer/list-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'new',
    component: NewCustomerComponent,
  },
  {
    path: 'edit/:id',
    component: EditCustomerComponent,
  },
  {
    path: 'delete/:id',
    component: DeleteCustomerComponent,
  },
  {
    path: '',
    component: ListCustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

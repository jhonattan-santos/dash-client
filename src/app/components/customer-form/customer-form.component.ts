import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit, OnChanges {
  @Input() customer!: Customer;
  @Input() deleteMode!: boolean;
  @Input() editMode!: boolean;

  customerForm = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    age: new FormControl(null, [Validators.required, Validators.min(1)]),
    street: new FormControl('', Validators.required),
    neighborhood: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    province: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
  });

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.customer) {
      this.customerForm.patchValue(this.customer);
      this.customerForm.markAllAsTouched();
      this.customerForm.updateValueAndValidity();
    }
  }

  onSubmit() {
    debugger;
    if (this.customerForm.valid) {
      if (this.customerForm.get('id')) {
        this.updateCustomer();
      } else {
        this.createCustomer();
      }
    } else {
      Swal.fire({
        title: 'Ops!',
        text: 'Favor preencher os campos obrigatórios.',
        icon: 'error',
      });
    }
  }

  createCustomer() {
    this.customerService
      .createCustomer(this.customerForm.value)
      .pipe(take(1))
      .subscribe((resp) => {
        if (resp) {
          Swal.fire({
            title: 'Sucesso',
            text: 'Cliente cadastrado com sucesso',
          });
          this.router.navigateByUrl('/');
        } else {
          Swal.fire({
            title: 'Ops!',
            text: 'Ocorreu um erro ao salvar os dados do cliente.',
            icon: 'error',
          });
        }
      });
  }

  updateCustomer() {
    this.customerService
      .updateCustomer(this.customerForm.value)
      .pipe(take(1))
      .subscribe((resp) => {
        if (resp) {
          Swal.fire({
            title: 'Sucesso',
            text: 'Dados do cliente atualizados com sucesso',
          });
          this.router.navigateByUrl('/');
        } else {
          Swal.fire({
            title: 'Ops!',
            text: 'Ocorreu um erro ao atualizar os dados do cliente.',
            icon: 'error',
          });
        }
      });
  }

  deleteCustomer() {
    this.customerService
      .deleteCustomer(this.customerForm.get('id')?.value)
      .pipe(take(1))
      .subscribe((resp) => {
        if (resp) {
          Swal.fire({
            title: 'Sucesso',
            text: 'Dados do cliente deletados com sucesso',
          });
          this.router.navigateByUrl('/');
        } else {
          Swal.fire({
            title: 'Ops!',
            text: 'Ocorreu um erro ao deletar os dados do cliente.',
            icon: 'error',
          });
        }
      });
  }

  cancel() {
    this.router.navigateByUrl('/');
  }
}

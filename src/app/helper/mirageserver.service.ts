import { Injectable } from '@angular/core';
import { Server } from 'miragejs';

@Injectable({
  providedIn: 'root'
})
export class MirageserverService {

  constructor() { }

  public mirageServer(): Server {
    return new Server({
      routes(): void {
        this.namespace = 'api';

        this.get('/customers', () => {
          return [{
            firstName: 'Valmir',
            lastName: 'Cunha',
            age: 32,
            adress: {
              street: 'Av. Altino Pereira',
              neighborhood: 'Continental',
              city: 'Osasco',
              province: 'SP',
              zipCode: 322280-888,
            }
          }]
        })
      }
    });
  }
}

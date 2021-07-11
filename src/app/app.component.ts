import { MirageserverService } from './helper/mirageserver.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private mockServer: MirageserverService) {}

  ngOnInit(): void {
    this.mockServer.mirageServer();
  }
}

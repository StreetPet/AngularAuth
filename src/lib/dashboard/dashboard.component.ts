import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AuthService } from '../auth.service';
import { Visitante } from 'projects/entities/src';

export interface IDashboardComponent {
  visitante: Visitante;
  signOut(): Promise<void>;
}

@Component({
  selector: 'lib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements IDashboardComponent, OnInit {

  constructor(
    protected authService: AuthService) { }

  ngOnInit() {
  }

  public get visitante(): Visitante {
    return this.authService.visitante;
  }

  public signOut(): Promise<void> {
    return this.authService.signOut();
  }

}

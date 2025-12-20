import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login/login';
import { SHARED_IMPORTS } from '../../../shared';

@Component({
  selector: 'app-user-view',
  imports: [...SHARED_IMPORTS],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.scss',
})
export class UserViewComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {}
}

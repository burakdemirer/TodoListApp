import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/components/base-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(
    private injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  onLogout() {
    this.router.navigateByUrl('/login');
    this.toastr.success('Logged out successfully', 'LOGOUT');
    localStorage.removeItem('login');
  }

}

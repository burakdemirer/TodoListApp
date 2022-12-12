import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/components/base-component';
import { UserServiceProxy } from 'src/shared/service-proxies/user-service-proxy';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private injector: Injector,
    private userService: UserServiceProxy) {
    super(injector);
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe((response: any) => {
      if (response.success) {
        this.router.navigateByUrl('/home');
        localStorage.setItem('login', 'true');
        this.toastr.success(response.message, 'LOGIN');
      } else {
        this.toastr.error(response.message, 'LOGIN');
      }
    });
  }

}

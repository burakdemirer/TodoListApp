import { Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export abstract class BaseComponent {

    router: Router;
    toastr: ToastrService;
    formBuilder: FormBuilder;

    constructor(injector: Injector) {
        this.router = injector.get(Router);
        this.toastr = injector.get(ToastrService);
        this.formBuilder = injector.get(FormBuilder);
    }

}

import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from './base/base-http-service';
import { UserDto } from '../models/user-dto';

@Injectable()
export class UserServiceProxy extends BaseHttpService {
    constructor(httpClient: HttpClient, injector: Injector) {
        super(httpClient, injector);
    }

    login(dto: UserDto) {
        return this.post(dto, 'Users/Login');
    }
}

import { NgModule } from '@angular/core';
import { UserServiceProxy } from './user-service-proxy';
import { TodoServiceProxy } from './todo-service-proxy';

@NgModule({
    providers: [
        UserServiceProxy,
        TodoServiceProxy
    ]
})
export class ServiceProxyModule { }

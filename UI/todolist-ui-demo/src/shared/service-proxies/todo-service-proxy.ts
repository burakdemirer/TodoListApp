import { Injectable, Injector } from '@angular/core';
import { BaseCrudService } from './base/base-crud-service';
import { HttpClient } from '@angular/common/http';
import { TodoDto } from '../models/todo-dto';

@Injectable()
export class TodoServiceProxy extends BaseCrudService<TodoDto> {
    constructor(httpClient: HttpClient, injector: Injector) {
        super(
            httpClient,
            'Todos',
            injector
        );
    }
}

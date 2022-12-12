import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseDto } from '../../models/base-dto';
import { BaseHttpService } from './base-http-service';

export abstract class BaseCrudService<T extends BaseDto> extends BaseHttpService {
    constructor(
        httpClient: HttpClient,
        private endpoint: string,
        injector: Injector
    ) {
        super(httpClient, injector);
    }

    list(): Observable<any> {
        return this.get<T[]>(this.endpoint);
    }

    create(data: T): Observable<any> {
        return this.post(data, this.endpoint);
    }

    update(data: T): Observable<any> {
        return this.put(data, this.endpoint);
    }

    deleteById(id: number): Observable<any> {
        return this.delete(this.endpoint + '/' + id);
    }
}

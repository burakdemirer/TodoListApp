import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Injector } from '@angular/core';
import { environment } from 'src/environments/environment';

export class BaseHttpService {

    private apiBaseUrl = environment.apiBaseUrl;

    constructor(protected httpClient: HttpClient,
                protected injector: Injector) {
    }

    get<T>(endpoint: string): Observable<any> {
        const url = this.apiBaseUrl + endpoint;
        return this.httpClient
            .get(url, { observe: 'response' })
            .pipe(mergeMap((response: any) => {
                return of(response.body);
            }));
    }

    post(data: any, endpoint: string): Observable<any> {
        const url = this.apiBaseUrl + endpoint;
        return this.httpClient
            .post(url, data, { observe: 'response' })
            .pipe(mergeMap((response: any) => {
                return of(response.body);
            }));
    }

    put(data: any, endpoint: string): Observable<any> {
        const url = this.apiBaseUrl + endpoint;
        return this.httpClient
            .put(url, data, { observe: 'response' })
            .pipe(mergeMap((response: any) => {
                return of(response.body);
            }));
    }

    delete(endpoint: string): Observable<any> {
        const url = this.apiBaseUrl + endpoint;
        return this.httpClient
            .delete(url, { observe: 'response' })
            .pipe(mergeMap((response: any) => {
                return of(response.body);
            }));
    }

}

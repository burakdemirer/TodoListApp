import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServiceProxyModule } from './service-proxies/service-proxy.module';

@NgModule({
    imports: [
        HttpClientModule,
        ServiceProxyModule
    ]
})
export class SharedModule { }

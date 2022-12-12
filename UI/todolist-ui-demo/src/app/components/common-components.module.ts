import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { StatusRendererComponent } from './renderers/status-renderer/status-renderer.component';

@NgModule({
    declarations: [
        StatusRendererComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
            progressBar: true,
            positionClass: 'toast-bottom-right',
            closeButton: true
        })
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StatusRendererComponent
    ]
})
export class CommonComponentsModule { }

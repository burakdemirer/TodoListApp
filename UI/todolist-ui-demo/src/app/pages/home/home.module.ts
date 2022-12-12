import { NgModule } from '@angular/core';
import { CommonComponentsModule } from 'src/app/components/common-components.module';
import { ModalTodoComponent } from './todo/modal-todo/modal-todo.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
    declarations: [
      TodoComponent,
      ModalTodoComponent
    ],
    imports: [
      CommonComponentsModule
    ],
    exports: [
      CommonComponentsModule,
      TodoComponent,
      ModalTodoComponent
    ]
  })
export class HomeModule { }

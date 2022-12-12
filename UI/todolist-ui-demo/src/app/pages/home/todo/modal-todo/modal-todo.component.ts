import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from 'src/app/components/base-component';
import { UserDto } from 'src/shared/models/user-dto';
import { TodoServiceProxy } from 'src/shared/service-proxies/todo-service-proxy';

@Component({
  selector: 'app-modal-todo',
  templateUrl: './modal-todo.component.html',
  styleUrls: ['./modal-todo.component.css']
})
export class ModalTodoComponent extends BaseComponent implements OnInit {

  @Input() dto: UserDto;
  @Output() refreshListEvent: EventEmitter<any> = new EventEmitter();

  modalTodoForm: FormGroup;

  constructor(
    private injector: Injector,
    public activeModal: NgbActiveModal,
    private todoService: TodoServiceProxy) {
    super(injector);
  }

  ngOnInit() {
    this.buildForm();
    this.modalTodoForm.patchValue(this.dto);
  }

  buildForm() {
    this.modalTodoForm = this.formBuilder.group({
      id: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      isCompleted: new FormControl('')
    });
  }

  save() {
    this.todoService.update(this.modalTodoForm.value).subscribe((response: any) => {
      if (response.success) {
        this.toastr.success(response.message, 'UPDATE');
        this.refreshListEvent.emit();
        this.modalTodoForm.reset();
      } else {
        this.toastr.error(response.message, 'UPDATE');
      }
    });
  }

  close() {
    this.activeModal.dismiss();
  }

}

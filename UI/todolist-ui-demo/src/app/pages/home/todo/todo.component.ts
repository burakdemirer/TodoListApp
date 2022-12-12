import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from 'src/app/components/base-component';
import { TodoDto } from 'src/shared/models/todo-dto';
import { TodoServiceProxy } from 'src/shared/service-proxies/todo-service-proxy';
import { ModalTodoComponent } from './modal-todo/modal-todo.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent extends BaseComponent implements OnInit {

  todoForm: FormGroup;
  todoDtoList: TodoDto[] = [];

  constructor(
    private injector: Injector,
    private modalService: NgbModal,
    private todoService: TodoServiceProxy) {
    super(injector);
  }

  ngOnInit() {
    this.buildForm();
    this.list();
  }

  buildForm() {
    this.todoForm = this.formBuilder.group({
      description: new FormControl('', [Validators.required]),
      isCompleted: new FormControl('')
    });
  }

  list() {
    this.todoService.list().subscribe((response: any) => {
      this.todoDtoList = response;
    });
  }

  onLogout() {
    this.router.navigateByUrl('/login');
    this.toastr.success('Logged out successfully', 'LOGOUT');
    localStorage.removeItem('login');
  }

  onCreate() {
    this.todoForm.value.isCompleted = false;
    this.todoService.create(this.todoForm.value).subscribe((response: any) => {
      if (response.success) {
        this.toastr.success(response.message, 'CREATE');
        this.list();
        this.todoForm.reset();
      } else {
        this.toastr.error(response.message, 'CREATE');
      }
    });
  }

  onCheck(dto: TodoDto) {
    dto.isCompleted = !dto.isCompleted;
    this.todoService.update(dto).subscribe((response: any) => {
      if (response.success) {
        this.toastr.success(response.message, 'UPDATE');
        this.list();
      } else {
        this.toastr.error(response.message, 'UPDATE');
      }
    });
  }

  onDelete(id: number) {
    this.todoService.deleteById(id).subscribe((response: any) => {
      if (response.success) {
        this.toastr.success(response.message, 'DELETE');
        this.list();
      } else {
        this.toastr.error(response.message, 'DELETE');
      }
    });
  }

  showModal(dto: TodoDto) {
    const modalRef = this.modalService.open(ModalTodoComponent, {centered: true, size: 'lg', scrollable: true});
    modalRef.componentInstance.dto = dto;
    modalRef.componentInstance.refreshListEvent.subscribe(() => {
      modalRef.close();
      this.list();
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { UserDto } from 'src/shared/models/user-dto';

@Component({
  selector: 'app-status-renderer',
  templateUrl: './status-renderer.component.html',
  styleUrls: ['./status-renderer.component.css']
})
export class StatusRendererComponent implements OnInit {

  @Input() dto: UserDto;

  constructor() { }

  ngOnInit() {
  }

}

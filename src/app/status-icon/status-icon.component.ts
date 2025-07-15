import {Component, Input} from '@angular/core';
import {ResourceStatus} from "../model/resource-status";

@Component({
  selector: 'status-icon',
  templateUrl: './status-icon.component.html',
  styleUrl: './status-icon.component.scss',
  standalone: false
})
export class StatusIconComponent {

  protected readonly ResourceStatus = ResourceStatus;

  @Input()
  status: ResourceStatus;
  @Input()
  text: String;

}
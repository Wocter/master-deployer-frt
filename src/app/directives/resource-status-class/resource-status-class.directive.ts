import {Directive, ElementRef, Input, OnChanges, Renderer2} from '@angular/core';
import {ResourceStatus} from "../../model/resource-status";

@Directive({
  selector: '[resourceStatusClass]',
  standalone: false
})
export class StatusClassDirective implements OnChanges {
  @Input('resourceStatusClass') status!: ResourceStatus;

  private NO_CLASS = '';

  private statusClassMap: Map<ResourceStatus, string> = new Map<ResourceStatus, string>([
    [ResourceStatus.HEALTHY, 'healthy'],
    [ResourceStatus.UNHEALTHY, 'unhealthy'],
    [ResourceStatus.SYNCING, 'syncing'],
    [ResourceStatus.OUT_OF_SYNC, 'out-of-sync']
  ]);

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    const className: string = this.statusClassMap.get(this.status) ?? this.NO_CLASS;

    for (const className of this.statusClassMap.values()) {
      this.renderer.removeClass(this.elementRef.nativeElement, className);
    }

    if (className) {
      this.renderer.addClass(this.elementRef.nativeElement, className);
    }
  }
}
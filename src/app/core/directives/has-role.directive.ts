import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {

  @Input() appHasRole!: any[];

  stop$ = new Subject();

  isVisible = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) {
  }

  ngOnInit(): void {
    // this.authStore.roles$.pipe(
    //   takeUntil(this.stop$)
    // ).subscribe(roles => {
    //   if (!roles) {
    //     this.viewContainerRef.clear();
    //   }
    //   if (roles.some(val => this.appHasRole.includes(val))) {
    //     if (!this.isVisible) {
    //       this.isVisible = true;
    //       this.viewContainerRef.createEmbeddedView(this.templateRef);
    //     }
    //   } else if (this.appHasRole.length === 0) {
    //     this.isVisible = true;
    //     this.viewContainerRef.createEmbeddedView(this.templateRef);
    //   } else {
    //     this.isVisible = false;
    //     this.viewContainerRef.clear();
    //   }
    // });
  }

  ngOnDestroy(): void {
    this.stop$.next();
  }
}

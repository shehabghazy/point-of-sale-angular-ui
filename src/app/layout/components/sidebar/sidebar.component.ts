import {ChangeDetectorRef, Component, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {LayoutService} from '../../services/layout.service';
import {AuthStore} from '../../../store/auth.store';
import {Router} from '@angular/router';
import {AuthCookieService} from '../../../core/services/auth-cookie.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private readonly mobileQueryListener: () => void;
  isOpen = false;
  drawerToggle$ = this.layoutService.drawerToggle$.subscribe(res => this.isOpen = res);
  navItems = this.layoutService.navItems;
  @Output() logoutEvent = new EventEmitter<boolean>();

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private layoutService: LayoutService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {

  }

  toggle(): void {
    this.layoutService.toggle();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
    this.drawerToggle$.unsubscribe();
  }

}

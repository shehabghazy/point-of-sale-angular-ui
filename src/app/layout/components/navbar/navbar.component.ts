import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LayoutService} from '../../services/layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  navItems = this.layoutService.navItems;

  constructor(private layoutService: LayoutService) {}

  toggle(): void {
    this.layoutService.toggle();
  }

}

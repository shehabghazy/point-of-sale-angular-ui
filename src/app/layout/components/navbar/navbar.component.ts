import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {LayoutService} from '../../services/layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() username!: string;

  @Output() logoutEvent = new EventEmitter<boolean>();
  constructor(private layoutService: LayoutService) {
  }

  toggle(): void {
    this.layoutService.toggle();
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abine-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  logout() {

  }

}

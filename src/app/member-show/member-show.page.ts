import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-show',
  templateUrl: './member-show.page.html',
  styleUrls: ['./member-show.page.scss'],
})
export class MemberShowPage implements OnInit {
  id = 1;
  name = "สมชายฤฤฤฤ";
  sname = "สมดี";
  phone = "0123456789";
  constructor() { }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-member-show',
  templateUrl: './member-show.page.html',
  styleUrls: ['./member-show.page.scss'],
})
export class MemberShowPage implements OnInit {
  id = "";
  name = "";
  sname = "";
  phone = "";
  constructor(
    private route: ActivatedRoute,
    public session: SessionService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "member-show.php", {
      member_id: this.id
    }, true).then((res: any) => {
      this.id = res.data.member_id;
      this.name = res.data.member_name;
      this.sname = res.data.member_sname;
      this.phone = res.data.member_phone;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}

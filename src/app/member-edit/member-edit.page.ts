import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.page.html',
  styleUrls: ['./member-edit.page.scss'],
})
export class MemberEditPage implements OnInit {
  id = "";
  name = "";
  sname = "";
  phone = "";
  constructor(
    private route: ActivatedRoute,
    public session: SessionService,
    private router: Router,
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
  edit() {
    this.session.ajax(this.session.api + "member-edit.php", {
      member_id: this.id,
      member_name: this.name,
      member_sname: this.sname,
      member_phone: this.phone
    }, true).then((res: any) => {
      this.session.showAlert(res.msg).then(rs => {
        this.router.navigateByUrl('/member');
      });
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.page.html',
  styleUrls: ['./member-add.page.scss'],
})
export class MemberAddPage implements OnInit {
  name = "";
  sname = "";
  phone = "";
  constructor(
    private router: Router,
    public session: SessionService
  ) { }

  ngOnInit() {
  }
  async save() {
    // เอาข้อมูลบันทึกลงฐานข้อมูล
    this.session.ajax(this.session.api + "member-add.php", {
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

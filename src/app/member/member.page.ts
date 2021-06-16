import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  users = [];
  constructor(
    public alertController: AlertController,
    public session: SessionService
  ) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "member.php", {}, true).then((res: any) => {
      //console.log(res);
      this.users = res.datas;
    });
  }
  async del(id) {
    //alert(id);
    const alert = await this.alertController.create({
      header: 'แจ้งคำยืนยันการลบ',
      message: 'คุณแน่ใจต้องการลบข้อมูลนี้ใช่หรือไม่ ?',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: (blah) => { }
        }, {
          text: 'ลบ',
          handler: () => {
            // เขียนโปรแกรมไปลบข้อมูลฐานข้อมูล
          }
        }
      ]
    });
    await alert.present();
  }
}

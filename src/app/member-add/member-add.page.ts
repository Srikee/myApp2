import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }
  async save() {
    // alert(this.name);
    // alert(this.sname);
    // alert(this.phone);
    // เอาข้อมูลบันทึกลงฐานข้อมูล

    const alert = await this.alertController.create({
      header: 'แจ้งผลการบันทึก',
      message: 'ระบบได้ทำการบันทึกข้อมูลเรียบร้อยแล้ว',
      buttons: [
        {
          text: 'ตกลง',
          handler: () => {
            this.router.navigateByUrl('/member');
          }
        }
      ]
    });
    await alert.present();
  }
}

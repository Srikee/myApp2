import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
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
            this.router.navigateByUrl('/page2');
          }
        }
      ]
    });
    await alert.present();
  }

}

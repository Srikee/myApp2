import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  users = [
    {
      id: 1,
      name: "สมชาย",
      sname: "สมดี",
      phone: "0123456789"
    },
    {
      id: 2,
      name: "สมดี",
      sname: "สมใจ",
      phone: "0987654321"
    },
    {
      id: 3,
      name: "สมบัติ",
      sname: "สมดุล",
      phone: "1234785692"
    },
  ];
  constructor(public alertController: AlertController) { }

  ngOnInit() {
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

import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-books-top',
  templateUrl: './books-top.page.html',
  styleUrls: ['./books-top.page.scss'],
})
export class BooksTopPage implements OnInit {
  top_libros: any; 

  constructor(
    private libraryService: LibraryService,
    private storage: Storage,
    private alertController: AlertController
    ) { }

  async ngOnInit() {
    this.libraryService.getBooksTop().subscribe((data:any) =>{
      this.top_libros = data
    },
    (error) => 
      this.presentAlert("Opps", "hubo un error", error)
    )
  }

  async presentAlert(header: any, subHeader: any, message: any) {
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['Ok']
      }
    );
    await alert.present();
  }

}

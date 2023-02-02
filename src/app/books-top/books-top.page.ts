import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController, ModalController } from '@ionic/angular';
import { BookDetailModalPage } from '../book-detail-modal/book-detail-modal.page';

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
    private modalController: ModalController,
    private alertController: AlertController
    ) { }

    
  async showBook(book: any) {
    const modal = await this.modalController.create({
      component: BookDetailModalPage,
      componentProps: {
        book: book
      }
    });
    return await modal.present();
  }

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

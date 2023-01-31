import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-authors-detail-modal',
  templateUrl: './authors-detail-modal.page.html',
  styleUrls: ['./authors-detail-modal.page.scss'],
})
export class AuthorsDetailModalPage implements OnInit {

  author: any;

  constructor( 
    private navParams: NavParams,
    private modalController: ModalController,
    private storage: Storage,
    private libraryService: LibraryService
     ) { }

  ngOnInit() {
    this.author = this.navParams.get("author");
    console.log(this.author)
  }

  closeModal(){
    this.modalController.dismiss();
  }

}

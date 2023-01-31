import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      title: "Biblioteca Capital",
      desc: "Bogota DC, Cra 12 #34-56",
      subtitle: "Instalaciones",
      img: "https://i0.wp.com/bibliotecasmedellin.gov.co/wp-content/uploads/2021/05/P1460649-1200x700.jpg",
      description: "Una biblioteca del pueblo y para el pueblo"
    },
    {
      title: "Registro de Usuarios",
      desc: "",
      subtitle: "Sistematizado",
      img: "https://administracion.uniandes.edu.co/wp-content/uploads/2022/04/biblioteca-fac-administracion-1024x683.jpeg",
      description: "Registro de usuarios sistematizado."
    },
    {
      title: "Ambiente",
      desc: null,
      subtitle: "Climatización",
      img: "https://www.uniminuto.edu/sites/default/files/2021-02/img-desktop3.jpg",
      description: "Entorno de estudio idoneo."
    },
    {
      title: "Todos los Libros",
      desc: null,
      subtitle: "Temas y tipos",
      img: "https://www.uniminuto.edu/sites/default/files/2021-03/dsk-biblioteca1.jpg",
      description: "Todos los temas y diferentes tipos de libros."
    }
  ]

  constructor(private router: Router, private storage: Storage) { 
  }

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/menu/home");
  }
  ngOnInit() {
  }

}

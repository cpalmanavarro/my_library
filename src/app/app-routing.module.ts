import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { LoginGuard } from './guards/login.guard';
import { ValidarGuard } from './guards/validar.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule), canActivate: [ValidarGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule), canActivate: [IntroGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule), canActivate: [LoginGuard]
  },
  {
    path: 'books-modal',
    loadChildren: () => import('./books-modal/books-modal.module').then( m => m.BooksModalPageModule)
  },
  {
    path: 'book-detail-modal',
    loadChildren: () => import('./book-detail-modal/book-detail-modal.module').then( m => m.BookDetailModalPageModule)
  },
  {
    path: 'books-top',
    loadChildren: () => import('./books-top/books-top.module').then( m => m.BooksTopPageModule)
  },
  {
    path: 'authors-detail-modal',
    loadChildren: () => import('./authors-detail-modal/authors-detail-modal.module').then( m => m.AuthorsDetailModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

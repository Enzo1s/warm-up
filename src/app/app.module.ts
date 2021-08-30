import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './auth/register/register.component';
import { PostComponent } from './components/post/post.component';
import { AlbumComponent } from './components/list-albums/album/album.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DetailUserComponent } from './components/user/detail-user/detail-user.component';
import { PostUserComponent } from './components/user/post-user/post-user.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { MyPostComponent } from './components/profile/my-post/my-post.component';
import { MyAlbumComponent } from './components/profile/my-album/my-album.component';
import { MyToDoComponent } from './components/profile/my-to-do/my-to-do.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { GaleryComponent } from './components/list-albums/galery/galery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    UserComponent,
    RegisterComponent,
    PostComponent,
    AlbumComponent,
    ToDoComponent,
    CommentsComponent,
    DetailUserComponent,
    PostUserComponent,
    FormUserComponent,
    MyPostComponent,
    MyAlbumComponent,
    MyToDoComponent,
    ListAlbumsComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

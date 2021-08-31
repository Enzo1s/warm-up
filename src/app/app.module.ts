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
import { ToDoComponent } from './components/list-to-do/to-do/to-do.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DetailUserComponent } from './components/user/detail-user/detail-user.component';
import { PostUserComponent } from './components/user/post-user/post-user.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { MyPostComponent } from './components/profile/my-post/my-post.component';
import { MyAlbumComponent } from './components/profile/my-album/my-album.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { GaleryComponent } from './components/list-albums/galery/galery.component';
import { ListToDoComponent } from './components/list-to-do/list-to-do.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewAlbumComponent } from './components/profile/new-album/new-album.component';
import { NewPostComponent } from './components/profile/new-post/new-post.component';
import { NewToDoComponent } from './components/profile/new-to-do/new-to-do.component';

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
    ToDoComponent,
    CommentsComponent,
    DetailUserComponent,
    PostUserComponent,
    FormUserComponent,
    MyPostComponent,
    MyAlbumComponent,
    ListAlbumsComponent,
    GaleryComponent,
    ListToDoComponent,
    FooterComponent,
    NewAlbumComponent,
    NewPostComponent,
    NewToDoComponent
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

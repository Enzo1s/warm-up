import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AlbumComponent } from './components/list-albums/album/album.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { PostUserComponent } from './components/user/post-user/post-user.component';
import { UserComponent } from './components/user/user.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/posts', component: PostComponent },
  { path: 'profile/posts/:id/comments', component: CommentsComponent},
  { path: 'profile/users', component: UserComponent },
  { path: 'profile/albums', component: ListAlbumsComponent },
  { path: 'profile/TO-DOs', component: ToDoComponent },
  { path: 'users/:id/posts', component: PostUserComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostUserComponent } from './components/user/post-user/post-user.component';
import { UserComponent } from './components/user/user.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { ListToDoComponent } from './components/list-to-do/list-to-do.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [UserGuard] },
  { path: 'profile/posts', component: PostComponent, canActivate: [UserGuard] },
  { path: 'profile/posts/:id/comments', component: CommentsComponent, canActivate: [UserGuard]},
  { path: 'profile/users', component: UserComponent, canActivate: [UserGuard] },
  { path: 'profile/albums', component: ListAlbumsComponent, canActivate: [UserGuard] },
  { path: 'profile/TO-DOs', component: ListToDoComponent, canActivate: [UserGuard] },
  { path: 'users/:id/posts', component: PostUserComponent, canActivate: [UserGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'userDetails/:id',
    component: UserDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

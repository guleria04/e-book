import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './account/register/register.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './account/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent,
  },
  { path: '**',  component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

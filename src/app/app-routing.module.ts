import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CounselorComponent } from './components/counselor/counselor.component'
import { ResetPassWordComponent } from './components/reset-pass-word/reset-pass-word.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'counselor', component: CounselorComponent },
  { path: 'resetPassword', component: ResetPassWordComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

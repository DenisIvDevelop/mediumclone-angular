import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ReqisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: 'register',
    component: ReqisterComponent,
  },
];

@NgModule({
  declarations: [ReqisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, StoreModule.forFeature('auth', reducer)],
  providers: [AuthService],
})
export class AuthModule {}

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ReqisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/reducer';
import { AuthService } from './services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorMessageModule } from '../shared/modules/backendErrorMessages';

const routes: Routes = [
  {
    path: 'register',
    component: ReqisterComponent,
  },
];

@NgModule({
  declarations: [ReqisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessageModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ReqisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: ReqisterComponent,
  },
];

@NgModule({
  declarations: [ReqisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class AuthModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule],
  declarations: [GlobalFeedComponent],
  exports: [GlobalFeedComponent],
})
export class GlobalFeedModule {}

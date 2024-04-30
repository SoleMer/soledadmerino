import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { CalendarComponent } from '../pages/calendar/calendar.component';
import { TechCornerComponent } from '../pages/tech-corner/tech-corner.component';
import { PostComponent } from '../pages/post/post.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
      title: 'Home | Soledad Merino'
  },
  {
      path: 'calendar',
      component: CalendarComponent,
      title: 'Calendar | Soledad Merino'
  },
  {
      path: 'tech-corner',
      component: TechCornerComponent,
      title: 'Tech Corner | Soledad Merino'
  },
  {
      path: 'tech-corner/1',
      component: PostComponent,
      title: 'Post | Soledad Merino'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { CalendarComponent } from '../pages/calendar/calendar.component';
import { TechHubComponent } from '../pages/tech-hub/tech-hub.component';
import { PostComponent } from '../pages/post/post.component';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseComponent } from '../pages/course/course.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
      title: 'Home | Sole 2.0'
  },
  {
      path: 'contacto',
      component: ContactoComponent,
      title: 'Contacto | Sole 2.0'
  },
  {
      path: 'tech-hub',
      component: TechHubComponent,
      title: 'Tech Hub 2.0 | Sole 2.0'
  },
  {
      path: 'tech-hub/post/:postId',
      component: PostComponent,
      title: 'Post | Sole 2.0'
  },
  {
      path: 'tech-hub/course/:courseId',
      component: CourseComponent,
      title: 'Course | Sole 2.0'
  },
  {
    path: '**',
    component: ErrorPageComponent,
    title: '404 | Sole 2.0'
},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes), 
    FormsModule,
    ContactoComponent,
    NgFor, NgIf
],
    exports: [RouterModule, FormsModule, NgForm]
})
export class AppRoutingModule { }

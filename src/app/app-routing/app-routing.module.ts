import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { CalendarComponent } from '../pages/calendar/calendar.component';
import { TechHubComponent } from '../pages/tech-hub/tech-hub.component';
import { PostComponent } from '../pages/post/post.component';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { FormsModule, NgForm } from '@angular/forms';

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
      path: 'tech-hub/1',
      component: PostComponent,
      title: 'Post | Sole 2.0'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes), 
    FormsModule,
    ContactoComponent],
    exports: [RouterModule, FormsModule, NgForm]
})
export class AppRoutingModule { }

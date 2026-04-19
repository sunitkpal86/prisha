import { Routes } from '@angular/router';
import { Courselist } from './components/courselist/courselist';
import { Coursedetail } from './components/coursedetail/coursedetail';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Blog } from './components/blog/blog';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title:'Home' },
  { path: 'course', component: Courselist, title:'Course' },
  { path: 'about', component: AboutUs, title:'About Us' },
  { path: 'coursedetails/:id', component: Coursedetail, title:'Course Details' },
  { path: 'blog', component: Blog, title:'Blog' },
  { path: 'contact', component: Contact, title:'Contact' }
];

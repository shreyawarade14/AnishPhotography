import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {BlogComponent} from './blog/blog.component'
import {ContactComponent} from './contact/contact.component'
import {FilmsComponent} from './films/films.component'
import {StoriesComponent} from './stories/stories.component'
import { AboutComponent } from './about/about.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { BlognewComponent } from './blognew/blognew.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'blog',
    pathMatch: 'full',
    component: BlogComponent
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent
  },
  {
    path: 'films',
    pathMatch: 'full',
    component: FilmsComponent
  },
  {
    path: 'stories',
    pathMatch: 'full',
    component: StoriesComponent
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent
  },
  {
    path: 'blog/:id',
    pathMatch: 'full',
    component: BlogpageComponent
  },
  {
    path: 'blognew',
    pathMatch: 'full',
    component: BlognewComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

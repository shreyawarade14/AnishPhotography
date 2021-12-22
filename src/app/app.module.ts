import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { StoriesComponent } from './stories/stories.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LightboxModule } from 'ngx-lightbox';
import { BlognewComponent } from './blognew/blognew.component';
import { BlogpageComponent } from './blogpage/blogpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FilmsComponent,
    StoriesComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    BlognewComponent,
    BlogpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

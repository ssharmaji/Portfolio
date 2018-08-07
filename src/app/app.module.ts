import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PhotoComponent } from './photo/photo.component';
import { VideoComponent } from './video/video.component';
import { FooterComponent } from './partials/footer/footer.component';
import { SliderPhotoComponent } from './partials/slider-photo/slider-photo.component';
import { SliderVideoComponent } from './partials/slider-video/slider-video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PhotoComponent,
    VideoComponent,
    FooterComponent,
    SliderPhotoComponent,
    SliderVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

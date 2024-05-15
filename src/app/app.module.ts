import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {CarouselModule} from "ngx-bootstrap/carousel";
import {HttpClientModule} from "@angular/common/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {NgxEchartsDirective, NgxEchartsModule} from "ngx-echarts";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";

@NgModule({
  declarations: [
    AppComponent,
    DetailPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatSlideToggleModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatCardImage,
    NgOptimizedImage,
    MatButton,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    CarouselModule,
    FormsModule,
    MatInput,
    NgxEchartsDirective,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MatSlider,
    MatSliderThumb
  ],
  providers: [
    provideAnimationsAsync()
  ],
  exports: [
    HomePageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleCardsComponent } from './components/home/article-cards/article-cards.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { LocationStoryComponent } from './components/home/location-story/location-story.component';
import { HeadphonesComponent } from './components/headphones/headphones.component';
import { EarphonesComponent } from './components/earphones/earphones.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleComponent } from './components/article/article.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FilterPipe } from './components/search/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleCardsComponent,
    FooterComponent,
    LocationStoryComponent,
    HeadphonesComponent,
    EarphonesComponent,
    SpeakersComponent,
    LogInComponent,
    SearchComponent,
    ArticleComponent,
    CheckoutComponent,
    HeaderComponent,
    NotFoundComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

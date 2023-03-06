import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { environment } from '../environments/environment';
//import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
//import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    //provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

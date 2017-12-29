import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WikiPage } from '../pages/wiki/wiki';
import { ForumPage } from '../pages/forum/forum';
import { HomePage } from '../pages/home/home';
import { TopicPage } from '../pages/topic/topic';
import { GalleryPage } from '../pages/gallery/gallery';
import { AngularTab } from '../app/angular-tab/angular-tab';
import { TopicService } from '../app/topic/topic.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WikiPage,
    ForumPage,
    TopicPage,
    HomePage,
    GalleryPage,
    AngularTab
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WikiPage,
    ForumPage,
    HomePage,
    TopicPage,
    GalleryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TopicService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

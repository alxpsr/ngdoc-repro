import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  NgDocDefaultSearchEngine,
  NgDocNavbarComponent,
  NgDocRootComponent,
  NgDocSidebarComponent,
  provideNgDocApp,
  provideMainPageProcessor,
  providePageSkeleton,
  provideSearchEngine,
} from '@ng-doc/app';
import { NG_DOC_ROUTING, provideNgDocContext } from '@ng-doc/generated';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // To enable animations ( import NoopAnimationsModule if you don't like animations :( )
    NoopAnimationsModule,
    // Add generated routes to the application
    RouterModule.forRoot(NG_DOC_ROUTING, {
      // Enable anchor scrolling
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 70],
    }),
    // Import NgDocRootComponent to display the documentation
    NgDocRootComponent,
    // Import NavBar, Sidebar components
    NgDocNavbarComponent,
    NgDocSidebarComponent,
  ],
  providers: [
    // Provide context of the generated documentation
    provideNgDocContext(),
    // Provide default configuration for the documentation app
    provideNgDocApp(),
    provideSearchEngine(NgDocDefaultSearchEngine),
    providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
    provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

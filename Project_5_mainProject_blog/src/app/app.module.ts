import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { NavBarComponent } from './Layout/nav-bar/nav-bar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './Page/home/home.component';
import { SingleCategoryComponent } from './Page/single-category/single-category.component';
import { SinglePostComponent } from './Page/single-post/single-post.component';
import { TermsAndConditionsComponent } from './Page/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './Page/contact-us/contact-us.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { CommentFormComponent } from './Comment/comment-form/comment-form.component';
import { CommentListComponent } from './Comment/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionsComponent,
    ContactUsComponent,
    SubscriptionComponent,
    CommentFormComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { FavortieDirective } from "./favorite.directives";
import { CategoryListPipe } from "./category-list.pipe";
import { MediaItemFormComponent } from "./media-item-form.component";

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavortieDirective,
    CategoryListPipe,
    MediaItemFormComponent,
  ],
  bootstrap: [AppComponent],
  // create a new service and provide it to the service
})
export class AppModule {}

import { Component } from "@angular/core";

@Component({
  selector: "mw-app",
  // template: "<h1>My app</h1>",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false,
  };

  // to delete a media
  onMediaItemDelete(mediaItem) {}
}

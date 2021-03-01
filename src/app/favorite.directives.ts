import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "[mwFavorite]",
})
export class FavortieDirective {
  @HostBinding("class.is-favorite") isFavorite = true;
}

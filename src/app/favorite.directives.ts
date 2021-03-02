import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[mwFavorite]",
})
export class FavortieDirective {
  @HostBinding("class.is-favorite") isFavorite = true;
  // use input decorator to decorate a class setter method
  // a setter method is called when a property with the same name
  // the setter method will receive a value

  @Input() set mwFavorite(value) {
    //   value is a boolean
    this.isFavorite = value;
  }
}

import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[mwFavorite]",
})
export class FavortieDirective {
  @HostBinding("class.is-favorite") isFavorite = true;
  @HostBinding("class.is-favorite-hovering") hovering = false;
  // we don't need the event emit argument for now
  // Angular works with the native events without the on prefix
  @HostListener("mouseenter") onMouseEnter() {
    this.hovering = true;
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.hovering = false;
  }

  // use input decorator to decorate a class setter method
  // a setter method is called when a property with the same name
  // the setter method will receive a value
  // must use the same name as the selector
  //   The getter and setter should have the same name, as they are just another way to define a property
  @Input()
  set mwFavorite(value) {
    //   value is a boolean
    this.isFavorite = value;
  }
}

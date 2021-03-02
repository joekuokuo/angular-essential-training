import { Pipe, PipeTransform } from "@angular/core";

// pure: the pipe will take in the data and will return data w/o any side effects - like pure functions
// Pipes are pure or stateless by default
// pure is optional argument
@Pipe({
  name: "categoryList",
  pure: true,
})
export class CategoryListPipe implements PipeTransform {
  // create a class method - this name should be exact "transform"
  transform(mediaItems) {
    const categories = [];
    mediaItems.forEach((mediaItem) => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    // the string return type is not forced
    return categories.join(", ");
  }
}

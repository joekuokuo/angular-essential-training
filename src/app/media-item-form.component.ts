import { Component, OnInit, Inject } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validator,
  Validators,
  FormBuilder,
} from "@angular/forms";

import { MediaItemService } from "./media-item.services";
import { lookupListToken } from "./provider";

@Component({
  selector: "mw-media-item-form",
  templateUrl: "./media-item-form.component.html",
  styleUrls: ["./media-item-form.component.css"],
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  // To use the property in the constructer, add a private in front of the argument
  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control("Movies"),
      name: this.formBuilder.control(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[\\w\\-\\s\\/]+"),
        ])
      ),
      category: this.formBuilder.control(""),
      // set a validator as reference as second input
      year: this.formBuilder.control("", this.yearValidator),
    });
  }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1800;
    const maxYear = 2500;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        year: {
          min: minYear,
          max: maxYear,
        },
      };
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem);
  }
}

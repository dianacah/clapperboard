import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-popup-new-fav",
  templateUrl: "./popup-new-fav.component.html",
  styleUrls: ["./popup-new-fav.component.css"]
})
export class PopupNewFavComponent implements OnInit {
  constructor(private builder: FormBuilder) {}
  favForm: FormGroup = this.builder.group({
    title: ["", Validators.required],
    genre: ["", Validators.required]
  });
  ngOnInit() {}
}

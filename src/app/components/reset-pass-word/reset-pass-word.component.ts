import { Component, OnInit } from '@angular/core';
import { Auth } from "../../auth";

@Component({
  selector: 'app-reset-pass-word',
  templateUrl: './reset-pass-word.component.html',
  styleUrls: ['./reset-pass-word.component.css']
})
export class ResetPassWordComponent implements OnInit {
  auth: Auth = {
    id: "",
    email: "yoshihiro_sasaki@teneocto.io",
    password: null,
    newPassword: null
  };
  constructor() { }
  handleSubmit() {

  }
  ngOnInit(): void {
  }

}

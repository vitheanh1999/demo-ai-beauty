import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Auth } from "../../auth";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @Output("email") onHandleFullName = new EventEmitter<string>();
  auth: Auth = {
    id: "",
    email: "",
    password: null,
    newPassword:null
  };
  constructor(private router: Router) { }
  isDisabled = false;
  onSelected() {
    this.router.navigate(['resetPassword']);
  }
  handleSubmit() {
    this.onHandleFullName.emit(this.auth.email);
    this.isDisabled = true;
  }

  ngOnInit(): void { }
}

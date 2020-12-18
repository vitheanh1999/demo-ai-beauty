import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  exports: [MatCardModule, MatInputModule, FormsModule, ReactiveFormsModule],
})
export class CustomMaterialModule { }

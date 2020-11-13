import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { InputComponent } from "./input.component";

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputComponent],
  providers: [],
})
export class InputModule {}

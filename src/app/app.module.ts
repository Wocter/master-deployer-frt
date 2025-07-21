import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {provideHttpClient} from "@angular/common/http";
import {
  CircleAlert,
  CircleQuestionMark,
  Heart,
  HeartCrack,
  LucideAngularModule,
  RefreshCw
} from "lucide-angular";
import {StatusIconComponent} from "./status-icon/status-icon.component";
import {
  StatusClassDirective
} from "./directives/resource-status-class/resource-status-class.directive";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    StatusIconComponent,
    StatusClassDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LucideAngularModule.pick({Heart, HeartCrack, RefreshCw, CircleAlert, CircleQuestionMark}),
    NgbModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
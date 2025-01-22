import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {provideHttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
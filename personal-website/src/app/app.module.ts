import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ContentComponent } from "./content/content.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MainComponent } from "./main/main.component";
import { MatGridList, MatGridTile } from "@angular/material/grid-list"
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"

@NgModule({
    declarations: [AppComponent, ContentComponent, MainComponent],
    imports: [BrowserModule, MatToolbarModule, MatGridList, MatGridTile, MatCardModule, MatButtonModule],
    providers: [
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent]
})
export class AppModule{

}
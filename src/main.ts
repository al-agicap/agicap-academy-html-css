import { provideFlipperDateAdapter } from "@agicap/flipper/datetime";
import { FLIPPER_ICONS_INITIALIZER } from "@agicap/flipper/icons";
import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import "zone.js";
import { provideAnimations } from "@angular/platform-browser/animations";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), importProvidersFrom(HttpClientModule), FLIPPER_ICONS_INITIALIZER, provideFlipperDateAdapter()]
});

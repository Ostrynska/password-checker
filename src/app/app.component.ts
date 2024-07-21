import { Component } from '@angular/core';

import { ImageContainerComponent } from "./image-container/image-container.component";
import { PasswordCheckerComponent } from "./checker-container/checker-container.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ImageContainerComponent, FooterComponent, PasswordCheckerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {}

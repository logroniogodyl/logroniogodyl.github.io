import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // MENU LASAGNA
  showLasagna: boolean = false;

  openLasagna() {
    this.showLasagna = true;
  }

  closeLasagna() {
    this.showLasagna = false;
  }

  // MENU LINGUINE
  showLinguine: boolean = false;

  openLinguine() {
    this.showLinguine = true;
  }

  closeLinguine() {
    this.showLinguine = false;
  }

  // MENU PASTA

  showPasta: boolean = false;

  openPasta() {
    this.showPasta = true;
  }

  closePasta() {
    this.showPasta = false;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RistoranteTemplate01';

  ngOnInit() {
    // Your TypeScript code for smooth scrolling here
    const navLinks = document.querySelectorAll("#navbar a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId) as HTMLElement;
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      });
    });

    const bottonePrenota = document.querySelector("#bottonePrenota") as HTMLButtonElement;

    bottonePrenota.addEventListener("click", (event: MouseEvent) => {
      event.preventDefault();
      const targetId = "#contatti";
      const targetElement = document.querySelector(targetId) as HTMLElement;
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });

  }

}

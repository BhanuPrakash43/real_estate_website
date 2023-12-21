import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    this.getYear();
  }

  getYear() {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
  }

  // Define properties to be used in the HTML template
  currentYear!: number;

  submitNewsLetter(){
    const popupMessage = "Thank You for Subscribing.";
    alert(popupMessage);
  }
}

import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private elementRef: ElementRef) { }

  // Define properties to be used in the HTML template with initial values
  menuWidth: boolean = false;
  menuBtnStyle: boolean = false;

  toggleNav() {
    this.menuWidth = !this.menuWidth;
    this.menuBtnStyle = !this.menuBtnStyle;
    
    // Get the DOM elements by class name and toggle the classes
    const myNav = this.elementRef.nativeElement.querySelector('.slider');
    myNav.classList.toggle('menu_width');
    const customMenuBtn = this.elementRef.nativeElement.querySelector('.custom_menu-btn');
    customMenuBtn.classList.toggle('menu_btn-style');
  }


  closeSlider() {
    this.menuWidth = false;
    this.menuBtnStyle = false;
    
    // Optionally, you can also toggle the classes to handle the styling
    const myNav = this.elementRef.nativeElement.querySelector('.slider');
    myNav.classList.remove('menu_width');
    const customMenuBtn = this.elementRef.nativeElement.querySelector('.custom_menu-btn');
    customMenuBtn.classList.remove('menu_btn-style');
  }


  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Determine the scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    // Set isSticky to true if scrollPosition is greater than a certain value
    this.isSticky = scrollPosition > 100; // Adjust 100 to your preferred scroll position
  }

}

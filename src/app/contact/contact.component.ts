import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submitForm() {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const messageInput = document.getElementById("message") as HTMLInputElement;

    if(nameInput && messageInput){
      const name = nameInput.value;

      const popupMessage = `Thank You ${name}! \n We have received your message.`;
      alert(popupMessage)
    }
  }
}

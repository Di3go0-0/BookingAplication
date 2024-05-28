import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingData: any = [];
  constructor(private service:AuthService) {

    this.getBookings();
   }

   getBookings(){
    this.service.getBookings().subscribe(
      response => {
        this.bookingData = response;
        
        console.log(response); // Imprime las reservas
      },
      error => console.error(error)
    );
  }


}

import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  toastButtons = [
    {
      side: 'start',
      icon: 'star',
      text: 'Favorite',
      handler: () => {
        console.log('Favorite clicked');
      }
    },
    {
      text: 'Done',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }
  ];

  /**
     * Host binding for component classes
     */
  @HostBinding('class') get classList(): any
  {
    return {
      
    }
  }
}

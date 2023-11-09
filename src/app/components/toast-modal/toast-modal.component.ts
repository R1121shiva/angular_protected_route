import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-toast-modal',
  templateUrl: './toast-modal.component.html',
  styleUrls: ['./toast-modal.component.css']
})
export class ToastModalComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  show: boolean = false;

  showToast() {
    this.show = true;
  }

  hideToast() {
    this.show = false;
  }
}

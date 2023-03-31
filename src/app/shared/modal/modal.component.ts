import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input()
  isVisible:boolean = false;
  @Output()
  isVisibleChange = new EventEmitter<boolean>()
  onClose():void{
    // this.isVisible = false;
    this.isVisibleChange.emit(false);
  }
}

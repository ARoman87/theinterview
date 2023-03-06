import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'label-key-card',
  templateUrl: './label-key-card.component.html',
  styleUrls: ['./label-key-card.component.scss'],
})
export class LabelKeyCardComponent {
  @Input() information: any; 
  @Output() selectedCard: EventEmitter<string> = new EventEmitter();



  notifyParent(label: string) { 
    this.selectedCard.emit(label)
  }
}

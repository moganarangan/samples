import { Component, AfterViewChecked, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements AfterViewChecked {

  constructor(private renderer: Renderer2) { }

  ngAfterViewChecked() {
    this.setCardStyle();
  }

  setCardStyle = () => {
    const card = document.getElementById('mdb_card_wider').firstChild;
    this.renderer.setStyle(card, 'box-shadow', 'none');
  }

}

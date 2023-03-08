import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { TestFeatureBaseComponent, selectSelectedFeatureLabels } from '@theinterview/xplat/features';

@Component({
  selector: 'theinterview-test-feature',
  templateUrl: 'test-feature.component.html',
})
export class TestFeatureComponent extends TestFeatureBaseComponent {
  selected_card_label:string|undefined;
  data!: { label: string; key: string; }[];

  constructor(private store: Store) {
    super(store);
    this.store.select(selectSelectedFeatureLabels).subscribe(labels => {
        this.data = labels
    })

  }
  actOnOutput(event:string){ 
    this.selected_card_label = event
  }

}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlutoniumStore } from '../plutonium-store';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-plutonium-store',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  // templateUrl: './plutonium-store.component.html',
  template: `
    <section class="listing">
      <!-- <p>{{ plutoniumStore.id }}</p> -->
      <h2 class="listing-heading">{{ plutoniumStore.name }}</h2>
      <p class="item-description">{{ plutoniumStore.description }}</p>
      <p class="item-data">{{ plutoniumStore.availableUnits }}</p>

      <p-button label="Submit"></p-button>
    </section>
  `,
  styleUrls: ['./plutonium-store.component.scss']
})
export class PlutoniumStoreComponent {
  @Input() plutoniumStore!:PlutoniumStore;
}

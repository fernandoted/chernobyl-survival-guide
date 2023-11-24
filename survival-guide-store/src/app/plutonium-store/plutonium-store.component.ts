import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlutoniumStore } from '../plutonium-store';

@Component({
  selector: 'app-plutonium-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plutonium-store.component.html',
  styleUrl: './plutonium-store.component.scss'
})
export class PlutoniumStoreComponent {
  @Input() plutoniumStore!: PlutoniumStore;

}

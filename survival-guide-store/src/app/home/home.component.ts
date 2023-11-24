import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { PlutoniumStoreComponent } from '../plutonium-store/plutonium-store.component';
import { PlutoniumStore } from '../plutonium-store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    PlutoniumStoreComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  plutoniumStore: PlutoniumStore = {
    id: 9999,
    name: 'Survival Guide',
    photo: 'test image',
    availableUnits: 99,
  };
}

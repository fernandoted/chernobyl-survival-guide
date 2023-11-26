import { Component, Input } from '@angular/core';
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
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  plutoniumStoreList: PlutoniumStore []= [
    {
      id: 0,
      name: 'nome 1',
      description: 'description 1',
      photo: 'photo 1',
      availableUnits: 3,
    },
    {
      id: 1,
      name: 'nome 2',
      description: 'description 2',
      photo: 'photo 2',
      availableUnits: 18,
    },
  ];
}

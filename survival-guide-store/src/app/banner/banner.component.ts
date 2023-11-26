import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedDialModule } from 'primeng/speeddial';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, SpeedDialModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

}

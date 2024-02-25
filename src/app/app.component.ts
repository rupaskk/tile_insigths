import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TileComponent } from './tile/tile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,TileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tile_insigths';
}

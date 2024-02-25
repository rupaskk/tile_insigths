// tile.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tile',
  imports : [CommonModule],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
  standalone: true
})
export class TileComponent {
  tiles = [
    { thumbprint: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Starry Expanse', details: 'A million diamonds scattered across a velvet canvas, the Milky Way stretches across the night sky.' },
    
    { thumbprint: 'https://plus.unsplash.com/premium_photo-1673002094173-b16f2b946780?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Desert Bloom', details: 'The image is simple and elegant. The white rose is a symbol of purity and innocence.' },
    { thumbprint: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Whispering Pines', details: 'Sunlight filters through the canopy of towering pines, casting dappled shadows on the forest floor.'
   },
    { thumbprint: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Sunrise Symphony', details: 'Golden hues dance across the horizon, painting the clouds with fiery strokes' },
    { thumbprint: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Lonely Lighthouse', details: 'A solitary lighthouse stands tall against the crashing waves' },
    { thumbprint: 'https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Hidden Meadow', details: 'Nestled amidst towering mountains, a hidden meadow unfolds' },
  ];

  selectedTile: any;
  tileSize = 120; 
  expandedTileSize = 220; 

  onTileClick(tile: any): void {
    if (this.selectedTile === tile) {
      // Toggle expansion
      this.selectedTile = null;
      this.tileSize = 100;
    } else {
      this.selectedTile = tile;
      this.tileSize = 70;
    }
  }
}


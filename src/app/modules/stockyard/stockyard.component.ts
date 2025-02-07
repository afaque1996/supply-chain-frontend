import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-stockyard',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Ensure RouterModule is imported
  templateUrl: './stockyard.component.html',
  styleUrls: ['./stockyard.component.scss']
})
export class StockyardComponent {}

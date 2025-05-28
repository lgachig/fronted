import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-recursos',
  imports: [MatCardModule, MatButtonModule, MatListModule, NgIf],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.css'
})
export class RecursosComponent {

}

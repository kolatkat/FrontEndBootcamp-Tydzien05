import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlists-list',
  template: `
    <table class="table table-striped">
      <thead>
        <tr>
          <th> # </th>
          <th> Nazwa </th>
          <th> Utworów </th>
          <th> Ulubiona </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let playlist of playlists; let i = index" class="playlist-row" 
          [ngClass]="{'table-active': selected == playlist}"
          [ngStyle]="{ borderBottomColor:playlist.color, 
            'fontSize.%': playlist == active? 120 : 100,
            color: playlist == active? playlist.color : '' }" 

          (mouseenter) = "active = playlist"
          (mouseleave) = "active = false"

          (click)="select(playlist)">
          <td> {{ i + 1 }}. </td>
          <td> {{ playlist.name }} </td>
          <td> {{ playlist.tracks }} </td>
          <td>
            <label (click)="$event.stopPropagation();"><input type="checkbox" [(ngModel)]="playlist.favourite" > 
              Ulubiona</label>
          </td>
           <td>
            <button (click)="remove(playlist);">&times;</button> 
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    .playlist-row {
        border-bottom: 2px solid transparent;
    }
  `]
})
export class PlaylistsListComponent implements OnInit {

  @Output('selected')
  onSelected = new EventEmitter()

  @Input()
  playlists;

  @Input()
  selected;

  @Output('removed')
  onRemoved = new EventEmitter()

  remove(playlist){
    this.onRemoved.emit(playlist);
  }

  select(playlist){
    this.onSelected.emit(playlist);
  }

  constructor() { }

  ngOnInit() {
  }

}

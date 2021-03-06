import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlaylistsComponent } from './playlists.component';
import { ContentCardComponent } from './content-card.component';
import { PlaylistFormComponent } from './playlist-form.component';
import { PlaylistsListComponent } from './playlists-list.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { PlaylistsService } from './playlists.service'

import playlistsData from './playlists.data'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    PlaylistsComponent,
    ContentCardComponent,
    PlaylistFormComponent,
    PlaylistsListComponent,
    PlaylistDetailComponent
  ],
  exports:[
    PlaylistsComponent
  ],
  providers:[
    //{provide: PlaylistsService, useClass: ExtendedPlaylistsService }
    PlaylistsService,
    { provide: 'PlaylistsData', useValue: playlistsData },
    // { provide: 'PlaylistsData', useFactory: (data)=>{
    //    data.push({id: 123, name:"Test", color:'red', favourite:false, tracks:2})
    //    return data;
    // }, deps:['PlaylistsExampleData']}
  ]
})
export class PlaylistsModule { }

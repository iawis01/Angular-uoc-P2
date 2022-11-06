import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Song } from '../song-detail/models/Song';
import { SONGS } from 'src/assets/dummyData';
import { SongServiceService } from 'src/app/services/song-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  songs: Song[] = new SONGS().songsList;
  @Output() searchString: string;
  @Output() filteredSongs: Array<Song> = [];
  // Emit search information to parent container
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private songService: SongServiceService) {}

  ngOnInit(): void {
    this.songs = this.songService.getSongs();
  }

  filterSongs() {
    this.search.emit(this.searchString);
  }
}

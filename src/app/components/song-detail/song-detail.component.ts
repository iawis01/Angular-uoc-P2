import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SongServiceService } from 'src/app/services/song-service.service';
import { Song } from '../song-detail/models/Song';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss'],
})
export class SongComponent implements OnInit {
  public songTitle: string = '';
  @Input() song: Song;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private songService: SongServiceService
  ) {}

  ngOnInit(): void {
    this.getActivatedRoute();
  }

  // get song title from active route
  public getActivatedRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.songTitle = params['id'];
      console.log('Activated Route Id', params['id']);
    });
  }
}

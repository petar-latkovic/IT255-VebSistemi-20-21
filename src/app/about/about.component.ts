import { YoutubeService } from './../services/youtube.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  channels: any;
  constructor(private _youtubeService: YoutubeService) { }

  ngOnInit(): void {
    
  }
  getChannelData(channelName: HTMLInputElement){
    this._youtubeService.getChannels(channelName.value).subscribe((data) => {
      console.log(data);
      this.channels = data.items;
    })
  }

}

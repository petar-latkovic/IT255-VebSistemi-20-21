import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  
  constructor(private http: HttpClient) { }

    getChannels(channelName:string): Observable<any>{
      const API_KEY = "AIzaSyBncNuMHn795hM0K9cr9np5SqqbZHzM3kY";
      const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+channelName+"&type=channel&key="+API_KEY+"&maxResults=25";
      return this.http.get<any>(url);
   }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

  const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class PostService {

  public paginasPost = 0;

  constructor( private http: HttpClient ) {
    // code
  }


  getPost(){
    this.paginasPost++;
    return this.http.get(`${URL}/post/paginas/=${this.paginasPost}`);
  }

}

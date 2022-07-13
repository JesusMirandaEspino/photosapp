import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public posts: Post[] = [];
  public habilitado = true;

  constructor( private postServices: PostService  ) {
    // code
  }

  ngOnInit(){
    this.siguientes();
      this.posts = [];
      this.habilitado = true;
  }

  siguientes(ev?: any, pull: boolean = false){

      this.postServices.getPost( pull ).subscribe( resp => {
        console.log(resp);
        this.posts.push( ...resp.posts );

        if( ev ){
          ev.target.complete();
          if( resp.posts.length == 0 ){
            ev.target.disable = true;
            this.habilitado = false;
          }
        }
      });
  }

  recargar( ev: any ){
    this.siguientes( ev, true );
  }

}

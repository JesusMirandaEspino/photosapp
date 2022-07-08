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

  constructor( private postServices: PostService  ) {
    // code
  }

  ngOnInit(){
    this.postServices.getPost().subscribe( resp => {
      console.log(resp);
      this.posts.push( ...resp.posts );
    });
  }

}

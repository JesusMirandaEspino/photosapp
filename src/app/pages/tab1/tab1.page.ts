import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor( private postServices: PostService  ) {
    // code
  }

  ngOnInit(){
    this.postServices.getPost().subscribe( resp => {
      console.log(resp);
    });
  }

}

import { Component } from '@angular/core';
import { fakeDB } from 'src/assets/fakeDB';
import { Post } from './model/Post';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Cheat Sheet';
  posts:Post[] = [];

  constructor(private postService:PostService) {
    this.obterPosts();
  }

  obterPosts(){
    this.postService.obterTodos()
      .then(res => this.posts = res)
      .catch(console.error);
  }
}
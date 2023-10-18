import { Component } from '@angular/core';
import { fakeDB } from 'src/assets/fakeDB';

interface Posts {
  id: number;
  img: string;
  postDate: string;
  title: string;
  headline: string;
  tags: Tag[];
  text: string;
}

interface Tag {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Cheat Sheet';
  posts:Posts[] = getPosts();
}

function getPosts():Posts[] {
  let postsToShow:Posts[] = fakeDB;
  try {
    fetch('https://dio-api-angular-blog-production.up.railway.app/posts')
      .then(res => res.json())
      .then(res => postsToShow = res)
  } catch (error) {
    console.error(error);
    postsToShow = fakeDB;
  }
  return postsToShow;
}

export default Tag;
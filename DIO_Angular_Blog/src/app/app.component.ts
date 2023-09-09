import { Component } from '@angular/core';
import { fakeDB } from 'src/assets/fakeDB';

interface Posts {
  img: string;
  postDate: string;
  title: string;
  chamada: string;
  tags: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Cheat Sheet';
  posts:Posts[] = fakeDB;
}

import { Component } from '@angular/core';
import { Input } from '@angular/core'
import { Tag } from 'src/app/model/Tag';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() img!:string;
  @Input() postDate!:string;
  @Input() title!:string;
  @Input() chamada!:string;
  @Input() tags!:Tag[];
}

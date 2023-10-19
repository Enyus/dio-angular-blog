import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  obterTodos(){
    return firstValueFrom(this.httpClient.get<Post[]>(`${API_URL}/posts`));
  }
}

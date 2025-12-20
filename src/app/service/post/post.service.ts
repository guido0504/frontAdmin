import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  PostDataResponseDto,
  PostRequestDto,
  PostResponseDto,
} from '../../model/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = environment.urlApi;

  constructor(private http: HttpClient) {}

  createPost(post: PostRequestDto): Observable<PostResponseDto> {
    return this.http.post<PostResponseDto>(`${this.apiUrl}/post/create`, post);
  }

  getAll(): Observable<PostDataResponseDto> {
    return this.http.get<PostDataResponseDto>(`${this.apiUrl}/post/findAll`);
  }

  getById(id: number): Observable<PostDataResponseDto> {
    return this.http.get<PostDataResponseDto>(
      `${this.apiUrl}/post/findById/${id}`
    );
  }

  update(id: number, post: PostRequestDto): Observable<PostDataResponseDto> {
    return this.http.put<PostDataResponseDto>(
      `${this.apiUrl}/post/update/${id}`,
      post
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/post/delete/${id}`);
  }
}

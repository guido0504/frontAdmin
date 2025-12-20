import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Image } from '../../model/image';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = environment.urlApi;

  constructor(private http: HttpClient) {}

  createImage(file: File): Observable<Image> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<Image>(`${this.apiUrl}/images`, fd);
  }
}

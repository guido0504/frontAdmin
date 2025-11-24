import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TipoEvento } from '../../model/tipo-evento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TipoEventoService {
  private apiUrl = environment.urlApi;

  constructor(private http: HttpClient) {}

  getTipoEventos(): Observable<TipoEvento[]> {
    return this.http.get<TipoEvento[]>(this.apiUrl + '/tipo-evento/getAll');
  }

  getTipoEvento(id: number): Observable<TipoEvento> {
    return this.http.get<TipoEvento>(
      this.apiUrl + '/tipo-evento/getById/' + id
    );
  }

  createTipoEvento(tipoEvento: TipoEvento): Observable<TipoEvento> {
    return this.http.post<TipoEvento>(
      this.apiUrl + '/tipo-evento/create',
      tipoEvento
    );
  }

  updateTipoEvento(id: number, tipoEvento: TipoEvento): Observable<TipoEvento> {
    return this.http.put<TipoEvento>(
      this.apiUrl + '/tipo-evento/update/' + id,
      tipoEvento
    );
  }

  deleteTipoEvento(id: number) {
    return this.http.delete(this.apiUrl + '/tipo-evento/delete/' + id);
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TipoEvento } from '../../model/tipo-evento';
import { Observable } from 'rxjs';
import { TipoEventoResponse } from '../../model/tipo-evento-response';

@Injectable({
  providedIn: 'root',
})
export class TipoEventoService {
  private apiUrl = environment.urlApi;

  constructor(private http: HttpClient) {}

  getTipoEventos(): Observable<TipoEventoResponse> {
    return this.http.get<TipoEventoResponse>(
      this.apiUrl + '/tipo-evento/getAll'
    );
  }

  getTipoEvento(id: number): Observable<TipoEvento> {
    return this.http.get<TipoEvento>(
      this.apiUrl + '/tipo-evento/getById/' + id
    );
  }

  createTipoEvento(tipoEventoRequestDto: TipoEvento): Observable<TipoEvento> {
    return this.http.post<TipoEvento>(
      this.apiUrl + '/tipo-evento/create',
      tipoEventoRequestDto
    );
  }

  updateTipoEvento(tipoEvento: TipoEvento): Observable<TipoEvento> {
    return this.http.put<TipoEvento>(
      this.apiUrl + '/tipo-evento/update',
      tipoEvento
    );
  }

  deleteTipoEvento(id: number) {
    return this.http.delete(this.apiUrl + '/tipo-evento/delete/' + id);
  }
}

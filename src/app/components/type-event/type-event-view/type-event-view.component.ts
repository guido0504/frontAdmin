import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared';
import { TipoEventoService } from '../../../service/tipo-evento/tipo-evento.service';
import { TipoEvento } from '../../../model/tipo-evento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-event-view',
  imports: [...SHARED_IMPORTS],
  templateUrl: './type-event-view.component.html',
  styleUrl: './type-event-view.component.scss',
})
export class TypeEventViewComponent implements OnInit {
  public tipoEventos: TipoEvento[] = [];

  constructor(
    private tipoEventoService: TipoEventoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTipoEventos();
  }

  getTipoEventos() {
    this.tipoEventoService.getTipoEventos().subscribe((data) => {
      this.tipoEventos = data.data;
    });
  }

  createTypeEvent() {
    this.router.navigate(['/type-event/create']);
  }

  editTypeEvent(tipoEvento: TipoEvento) {
    this.router.navigate(['/type-event/edit', tipoEvento.id]);
  }

  deleteTypeEvent(tipoEvento: TipoEvento) {
    this.tipoEventoService.deleteTipoEvento(tipoEvento.id).subscribe(() => {
      this.getTipoEventos();
    });
  }
}

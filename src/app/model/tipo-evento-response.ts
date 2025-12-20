import { TipoEvento } from './tipo-evento';

export class TipoEventoResponse {
  data: TipoEvento[];

  constructor() {
    this.data = [];
  }
}

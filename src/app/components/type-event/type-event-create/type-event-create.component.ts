import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoEventoService } from '../../../service/tipo-evento/tipo-evento.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ToastService } from '../../../service/toast/toast';
import { SHARED_IMPORTS } from '../../../shared';
@Component({
  selector: 'app-type-event-create',
  imports: [...SHARED_IMPORTS],
  templateUrl: './type-event-create.component.html',
  styleUrl: './type-event-create.component.scss',
})
export class TypeEventCreateComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private tipoEventoService: TipoEventoService,
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.createTypeEventForm();
  }

  createTypeEventForm() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.tipoEventoService.createTipoEvento(this.form.value).subscribe(
        () => {
          this.toastService.showSuccess('Tipo de evento creado correctamente');
          this.router.navigate(['/type-event/view']);
        },
        (error) => {
          this.toastService.showError(error.error.message);
        }
      );
    }
  }
}

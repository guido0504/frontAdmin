import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoEventoService } from '../../../service/tipo-evento/tipo-evento.service';
import { ToastService } from '../../../service/toast/toast';
import { SHARED_IMPORTS } from '../../../shared';

@Component({
  selector: 'app-type-event-edit',
  imports: [...SHARED_IMPORTS],
  templateUrl: './type-event-edit.component.html',
  styleUrl: './type-event-edit.component.scss',
})
export class TypeEventEditComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public id: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tipoEventoService: TipoEventoService,
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadTypeEvent();
    this.createTypeEventForm();
  }

  private loadTypeEvent() {
    this.tipoEventoService.getTipoEvento(parseInt(this.id)).subscribe(
      (data) => {
        this.form.patchValue(data);
      },
      (error) => {
        this.toastService.showError(error.error.message);
      }
    );
  }

  createTypeEventForm() {
    this.form = this.formBuilder.group({
      id: [parseInt(this.id), Validators.required],
      nombre: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.tipoEventoService.updateTipoEvento(this.form.value).subscribe(
        () => {
          this.toastService.showSuccess(
            'Tipo de evento actualizado correctamente'
          );
          this.router.navigate(['/type-event/view']);
        },
        (error) => {
          this.toastService.showError(error.error.message);
        }
      );
    }
  }
}

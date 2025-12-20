import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SHARED_IMPORTS } from '../../../shared';
import { ToastService } from '../../../service/toast/toast';
import { PostService } from '../../../service/post/post.service';
import { Router } from '@angular/router';
import { ImageService } from '../../../service/image/image.service';
import { TipoEventoService } from '../../../service/tipo-evento/tipo-evento.service';
import { TipoEvento } from '../../../model/tipo-evento';

@Component({
  selector: 'app-post-create',
  imports: [...SHARED_IMPORTS],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss',
})
export class PostCreateComponent implements OnInit {
  form: FormGroup;
  selectedFile: File | null = null;
  public tipoEventos: TipoEvento[] = [];

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private toast: ToastService,
    private router: Router,
    private imageService: ImageService,
    private tipoEventoService: TipoEventoService
  ) {
    this.form = this.fb.group({
      title: [''],
      body: [''],
      tipoEvento: [0],
      fechaHora: [''],
      image: [''],
    });
  }

  ngOnInit(): void {
    this.getAllTipoEvento();
  }

  onSelectImage(event: any) {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;
  }

  addImage() {
    if (!this.selectedFile) return;
    this.imageService.createImage(this.selectedFile).subscribe(
      (res) => {
        this.toast.showSuccess('Imagen subida correctamente');
        this.form.get('image')?.setValue(res.id!);
      },
      (err) => {
        this.toast.showError('Fallo al subir la imagen');
      }
    );
  }

  onSubmit() {
    if (
      this.form.get('image')?.value == null ||
      this.form.get('image')?.value == ''
    ) {
      this.toast.showError('Debe guardar una imagen');
      return;
    }

    this.postService.createPost(this.form.value).subscribe(
      (res) => {
        this.toast.showSuccess('Post creado correctamente');
        this.router.navigate(['/post/view']);
      },
      (err) => {
        this.toast.showError('Fallo al crear el post');
      }
    );
  }

  getAllTipoEvento() {
    this.tipoEventoService.getTipoEventos().subscribe((res) => {
      this.tipoEventos = res.data;
    });
  }
}

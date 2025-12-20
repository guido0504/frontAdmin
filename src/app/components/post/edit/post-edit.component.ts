import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../../../service/post/post.service';
import { ToastService } from '../../../service/toast/toast';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../../service/image/image.service';
import { TipoEventoService } from '../../../service/tipo-evento/tipo-evento.service';
import { TipoEvento } from '../../../model/tipo-evento';
import { PostResponseDto } from '../../../model/post';
import { DateUtils } from '../../../util/dateUtils';

@Component({
  selector: 'app-post-edit',
  imports: [...SHARED_IMPORTS],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss',
})
export class PostEditComponent implements OnInit {
  form: FormGroup;
  selectedFile: File | null = null;
  public tipoEventos: TipoEvento[] = [];
  selectedFileName: string | null = null;
  id: number = 0;
  imageUrl: any;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private toast: ToastService,
    private router: Router,
    private imageService: ImageService,
    private tipoEventoService: TipoEventoService,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      title: [''],
      body: [''],
      tipoEvento: [0],
      fechaHora: [''],
      image: [''],
    });

    this.id = parseInt(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.getAllTipoEvento();
    this.getPost();
  }

  getPost() {
    this.postService
      .getById(this.route.snapshot.params['id'])
      .subscribe((post: any) => {
        this.form.patchValue({
          title: post.data?.title,
          body: post.data?.body,
          tipoEvento: post.data?.tipoEvento.id,
          fechaHora: DateUtils.parseDMY_HM(post.data?.fechaHora),
          image: post.data?.idImage,
        });
        this.imageUrl = post.data?.imageUrl;
      });
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

  onSelectImage(event: any) {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;
  }
  onSubmit() {
    if (
      this.form.get('image')?.value == null ||
      this.form.get('image')?.value == ''
    ) {
      this.toast.showError('Debe guardar una imagen');
      return;
    }

    this.postService.update(this.id, this.form.value).subscribe(
      (res) => {
        this.toast.showSuccess('Post actualizado correctamente');
        this.router.navigate(['/post/view']);
      },
      (err) => {
        this.toast.showError('Fallo al actualizar el post');
      }
    );
  }

  getAllTipoEvento() {
    this.tipoEventoService.getTipoEventos().subscribe((res) => {
      this.tipoEventos = res.data;
    });
  }
}

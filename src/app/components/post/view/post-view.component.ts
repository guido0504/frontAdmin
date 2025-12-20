import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared';
import { PostService } from '../../../service/post/post.service';
import { Router } from '@angular/router';
import { PostResponseDto } from '../../../model/post';
import { ToastService } from '../../../service/toast/toast';

@Component({
  selector: 'app-post-view',
  imports: [...SHARED_IMPORTS],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.scss',
})
export class PostViewComponent implements OnInit {
  posts: PostResponseDto[] = [];

  constructor(
    private postService: PostService,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.postService.getAll().subscribe((posts) => {
      this.posts = posts.data;
    });
  }

  createPost() {
    this.router.navigate(['/post/create']);
  }

  editPost(post: PostResponseDto) {
    this.router.navigate(['/post/edit', post.id]);
  }

  deletePost(post: PostResponseDto) {
    this.postService.delete(post.id).subscribe(
      () => {
        this.posts = this.posts.filter((p) => p.id !== post.id);
        this.toast.showSuccess('Post eliminado correctamente');
      },
      (err) => {
        this.toast.showError('Fallo al eliminar el post');
      }
    );
  }
}

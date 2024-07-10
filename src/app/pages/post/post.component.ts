import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { Post } from '../../models/post';
import { LogoEnlaceComponent } from '../../common/logo-enlace/logo-enlace.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { NgFor, NgIf } from '@angular/common';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [LogoEnlaceComponent , ErrorPageComponent, LogoEnlaceComponent, NgFor, NgIf],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{

  private activatedRoute: any = inject(ActivatedRoute);
  postId: string = this.activatedRoute.snapshot.params['postId'];
    post: Post = {
      id: 0,
      title: "",
      resume: "",
      pdf: "",
      url: "",
      sections: []
    }

  constructor(private service: PostService, private renderer: Renderer2) {  }

  ngOnInit(): void {
    this.post = this.service.getPostById(parseInt(this.postId));
    this.renderer.removeClass(document.body, 'ovf-hidden');
    this.renderer.addClass(document.body, 'ovf-auto');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'ovf-auto');
    this.renderer.addClass(document.body, 'ovf-hidden');
  }

  isValidPost(): boolean {
    return this.post.id != 0;
  }

}

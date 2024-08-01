import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit, OnDestroy, Renderer2  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogoEnlaceComponent } from '../../common/logo-enlace/logo-enlace.component';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-course',
  standalone: true,
  imports: [ErrorPageComponent, LogoEnlaceComponent, NgFor, NgIf],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent implements OnInit, PipeTransform {

  @Pipe({
    name: 'safe'
  })

  private activatedRoute: any = inject(ActivatedRoute);
  courseId: string = this.activatedRoute.snapshot.params['courseId'];
  course: Course = {
    id: 0,
    title: "",
    resume: "",
    aditionals: "",
    support: "",
    description: "",
    goals: [""],
    requirements: [""],
    videoUrl: "",
    price: "",
    launchPrice: "",
  };
  urlVideo: SafeResourceUrl = "";

  constructor(private service: CourseService, protected sanitizer: DomSanitizer, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.course = this.service.getCourseById(parseInt(this.courseId));
    this.urlVideo = this.transform(this.course.videoUrl);
    this.renderer.removeClass(document.body, 'ovf-hidden');
    this.renderer.addClass(document.body, 'ovf-auto');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'ovf-auto');
    this.renderer.addClass(document.body, 'ovf-hidden');
  }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  videoURL(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.course.videoUrl);
  }

  isValidCourse(): boolean {
    this.urlVideo = this.transform(this.course.videoUrl);
    return this.course.id != 0;
  }

  manageClases(): void {
    this.renderer.removeClass(document.body, 'ovf-hidden');
    this.renderer.addClass(document.body, 'ovf-auto');
  }

  samePrice(): boolean {
    return this.course.price == this.course.launchPrice;
  }



}

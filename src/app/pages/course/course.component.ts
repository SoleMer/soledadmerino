import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
    description: "",
    goals: [""],
    videoUrl: "",
  };
  urlVideo: SafeResourceUrl = "";

  constructor(private service: CourseService, protected sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.course = this.service.getCourseById(parseInt(this.courseId));
    console.log(this.course);
    this.urlVideo = this.transform(this.course.videoUrl);
  }

  transform(url: string) {
    console.log(url)
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  videoURL(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.course.videoUrl);
  }

  isValidCourse(): boolean {
    this.urlVideo = this.transform(this.course.videoUrl);
    console.log(this.course.videoUrl)
    console.log(this.urlVideo)
    return this.course.id != 0;
  }

}

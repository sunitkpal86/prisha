import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseList } from '../../data/courselist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courselist',
  imports: [CommonModule],
  templateUrl: './courselist.html',
  styleUrl: './courselist.css',
})
export class Courselist {
  private router = inject(Router);
  courses = CourseList ;
  expandedCourses: { [key: string]: boolean } = {
    azure: false,
    angular: false
  };

  toggleCourse(courseId: string) {
    this.expandedCourses[courseId] = !this.expandedCourses[courseId];
  }

  goToDetails(courseId?: number) {
    this.router.navigate(['/coursedetails', courseId]);
  }
}

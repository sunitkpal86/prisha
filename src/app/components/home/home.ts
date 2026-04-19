import { Component, computed, inject } from '@angular/core';
import { RouterLink} from '@angular/router';
import { CourseList } from '../../data/courselist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  courses = CourseList;
  private router = inject(Router);

  popularCourses = computed(() => {
      return this.courses.slice(0, 4);
  });

  goToDetails(courseId?: number) {
    this.router.navigate(['/coursedetails', courseId]);
  }
}

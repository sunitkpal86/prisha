import { Component, inject, signal, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coursedetail',
  imports: [],
  templateUrl: './coursedetail.html',
  styleUrl: './coursedetail.css',
})
export class Coursedetail {
  openIndex = signal<number | null>(0);
  private router = inject(Router);
  private route = inject(ActivatedRoute); 
  courseData = signal<any>(null);

  courses = [
    {
      id: 101,
      title: 'Angular',
      content:[
        {
          title: 'Introduction',
          topics: [
        'What is Angular?',
        'AngularJS vs Angular(2-21) Version',
        'Angular vs React vs Vue',
        'Installing NodeJS', 
        'Installing Angular CLI', 
        'Creating A New Angular Project',
        'Project Structure Overview',
        'Running The Application'
      ]
    },
    {
      title: 'Creating New Angular Components',
      topics: [
        'What is Components and Why it is important?',
        'Creating Inline Template Angular Components', 
        'Creating Angular Components Using Angular CLI',
        'Nesting Components'
      ]
    },
    {
      title: 'Data Binding in Angular',
      topics: [
        'Interpolation', 
        'Property Binding', 
        'Event Binding',
        'Two-way Binding']
    },
    {
      title: 'Pipes in Angular',
      topics: [
        'Built-in Pipes',
        'Async Pipe', 
        'Custom Pipes'
      ]
    },
    {
      title: 'Forms in Angular',
      topics: [
        'Template-driven Forms',
        'Reactive Forms',
        'Form Validation',
        'Dynamic Forms'
      ]
    },
    {
      title: 'Routing & Navigation in Angular',
      topics: [
        'Basic & Advanced Routing',
        'Route Guards',
        'Lazy Loading',
        'Programmatic Navigation'
      ]
    },
      {
      title: 'Services & Dependency Injection in Angular',
      topics: [
        'Creating a Service',
        'How Not To Provide a Service',
        'Using Angular Dependency Injection Mechanism',
        'Using The Alternative Dependency Injection Syntax',
        'Outsourcing & Reusing Logic with Services',
        'Angular has multiple Injectors',
        'Multiple Ways of Providing a Service',
        'Providing Services via the Element Injector',
        'Understanding the Element Injector Behavior',
        'Injecting Services into Services',
        'Analyzing Dependency Injection with Angular DevTools',
        'Using Custom DI Tokens & Providers',
        'Preparing A Non-Class Value for Dependency Injection',
        'Injecting Other Values(Not Services)',
        'Angular Modules(NgModule) & Dependency Injection',
        'Working with Services without Using Signals'
      ]
    },
    {
      title: 'Change Detection in Angular',
      topics: [
        'Understanding Angular Change Detection',
        'Change Detection During Development: ExpressionChangedAfterCheckedErrors',
        'Writing Efficient Template Bindings',
        'Avoiding Zone Pollution',
        'Using OnPush'

      ]
    }
      ]
    },
    {
      id: 103,
      title: 'React',
      content:[
        {
          title: 'Introduction',
          topics: [
        'What is React?',
        'React vs Angular vs Vue',
        'Installing NodeJS',
        'Creating A New React Project',
        'Project Structure Overview',
        'Running The Application'
      ]
        }
      ]
    }
    
  
  ];

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');

    const match = this.courses.find(c => c.id === Number(courseId));

    if (match) {
      this.courseData.set(match);
    }
    console.log(this.courseData()); // Debugging log

  }

  prerequisites = signal([
    'Basic knowledge of HTML, CSS, JavaScript and TypeScript',
    'Familiarity with Command Line Interface (CLI)'
  ]);

  toggle(index: number) {
    this.openIndex.update(current => current === index ? null : index);
  }

  goBack() {   
    this.router.navigate(['/course']);
  }
}

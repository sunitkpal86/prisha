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
      id: 102,
      title: 'Azure DevOps',
      content:[
              { "lecture": 1, "title": "Introduction"},
              { "lecture": 2, "title": "Azure Account, Tenant, Subscription"},
              { "lecture": 3, "title": "Azure Resource"},
              { "lecture": 4, "title": "Access tiers, Hot, Cool, Archive"},
              { "lecture": 5, "title": "Life Cycle Management, Policys, Rules"},
              { "lecture": 6, "title": "Storage account & redundencies"},
              { "lecture": 7, "title": "Powershell commands"},
              { "lecture": 8, "title": "Operators, Conditions"},
              { "lecture": 9, "title": "For loops to iterate over elements"},
              { "lecture": 10, "title": "basic powershell commands to create storage container"},
              { "lecture": 11, "title": "Ip Address"},
              { "lecture": 12, "title": "Public Ip address, Vnet"},
              { "lecture": 13, "title": "Linux virtual machine methods"},
              { "lecture": 14, "title": "Network Interface Card"},
              { "lecture": 15, "title": "Securing storage account"},
              { "lecture": 16, "title": "How to deploy Dotnet application"},
              { "lecture": 17, "title": "Scaling & Types"},
              { "lecture": 18, "title": "Infrastructure as Code"},
              { "lecture": 19, "title": "Parameters, Reuse the same template"},
              { "lecture": 20, "title": "Variables, Reusability"},
              { "lecture": 21, "title": "Resource Providers & types"},
              { "lecture": 22, "title": "Azure Dev portal & project"},
              { "lecture": 23, "title": "Branching Strategy"},
              { "lecture": 24, "title": "Pipelines & deployment"},
              { "lecture": 25, "title": "Continuous Integration (CI), Continuous Deployment (CD)"},
              { "lecture": 26, "title": "Code for CI, CD, Diff environments, ARM Template"},
              { "lecture": 27, "title": "Infra, Code for CI CD, Pipleline Variables"},
              { "lecture": 28, "title": "Variables priority"},
              { "lecture": 29, "title": "YAML pipeline"},
              { "lecture": 30, "title": "Terraform"},
              { "lecture": 31, "title": "State file"},
              { "lecture": 32, "title": "Update state file in resource"},
              { "lecture": 33, "title": "How to reuse configurations"},
              { "lecture": 34, "title": "Local variables in Terraform"},
              { "lecture": 35, "title": "Service Principal & User account"},
              { "lecture": 36, "title": "Infra & pipelines in Terraform"},
              { "lecture": 37, "title": "Terraform Loops"},
              { "lecture": 38, "title": "For Each loop"},
              { "lecture": 39, "title": "For each, for, Modules"},
              { "lecture": 40, "title": "Docker"},
              { "lecture": 41, "title": "Docker Start, Stop container"},
              { "lecture": 42, "title": "Create own image & commands"},
              { "lecture": 43, "title": "Docker file, Process or execute inside container"},
              { "lecture": 44, "title": "CMD & ENTRYPOINT"},
              { "lecture": 45, "title": "Docker Image, Dotnet application"},
              { "lecture": 46, "title": "Drawbacks of Docker, Kubernetes"},
              { "lecture": 47, "title": "Pod using manifast or YAML definition"},
              { "lecture": 48, "title": "ReplicaSet"},
              { "lecture": 49, "title": "Drawbacks of replicaset & deployment"},
              { "lecture": 50, "title": "Drawback of replicaset & Deploment part 2"},
              { "lecture": 51, "title": "Deployment strategies"},
              { "lecture": 52, "title": "Port Forwarding"},
              { "lecture": 53, "title": "Project"}
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

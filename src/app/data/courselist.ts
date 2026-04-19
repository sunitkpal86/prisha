export interface Course {
  image: string;
  name: string;
  description: string;
  id?: number;
}

export const CourseList: Course[] = [
  {
    id: 101,
    image: 'assets/images/Angular21.jpg',
    name: 'Angular 21',
    description: 'Modern TypeScript framework for building scalable, component-driven web apps.',
  },
  {
    id: 102,
    image: 'assets/images/azure.png',
    name: 'Azure Data Engineering',
    description: 'Build scalable data solutions using Data Factory, Synapse and Databricks.',
  },
  {
    id: 103,
    image: 'assets/images/react.png',
    name: 'React',
    description: 'Modern Hooks, Redux Toolkit, and Next.js integration.',
  },
  {
    id: 104,
    image: 'assets/images/dotnet.jpg',
    name: 'Dot Net Full Stack',
    description: 'C#, ASP.NET Core Web API, and SQL Server basics.',
  },
  {
    id: 105,
    image: 'assets/images/dotnet.jpg',
    name: 'Azure Sercices',
    description: 'C#, ASP.NET Core Web API, and SQL Server basics.',
  },
  {
    id: 106,
    image: 'assets/images/dotnet.jpg',
    name: 'Azure DevOps',
    description: 'C#, ASP.NET Core Web API, and SQL Server basics.',
  },
  {
    id: 107,
    image: 'assets/images/dotnet.jpg',
    name: 'AWS DevOps',
    description: 'C#, ASP.NET Core Web API, and SQL Server basics.',
  },
  {
    id: 108,
    image: 'assets/images/dotnet.jpg',
    name: 'HTML + Bootstrap + JavaScript',
    description: 'C#, ASP.NET Core Web API, and SQL Server basics.',
  },
  {
    id: 109,
    image: 'assets/images/dotnet.jpg',
    name: 'HTML + Bootstrap + JavaScript',
    description: 'C#, ASP.NET Core Web API, and SQL Server basics.',
  },
  {
    id: 110,
    image: 'assets/images/dotnet.jpg',
    name: 'TypeScript',
    description: 'C#, ASP.NET Core Web API, and SQL Server basics.',
  },
  {
    id: 111,
    image: 'assets/images/dotnet.jpg',
    name: 'Project',
    description: 'C#, ASP.NET Core Web API, and SQL Server basics.',
  },
  {
    id: 112,
    image: 'assets/images/dotnet.jpg',
    name: 'Interview Preparation',
    description: 'C#, ASP.NET Core Web API, and SQL Server basics.',
  }
];

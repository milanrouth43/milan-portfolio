export const skillCategories = [
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS", level: "Intermediate", tag: "EC2, S3, CloudWatch, IAM" },
      { name: "Microsoft Azure", level: "Familiar", tag: "Cloud Fundamentals" },
      { name: "Docker", level: "Advanced", tag: "Containers & Dockerfiles" },
      { name: "Kubernetes", level: "Intermediate", tag: "Orchestration & Deployments" },
      { name: "Terraform", level: "Intermediate", tag: "Infrastructure as Code" },
      { name: "Jenkins", level: "Intermediate", tag: "CI/CD Pipelines" },
      { name: "Git & GitHub", level: "Advanced", tag: "Version Control & Workflows" }
    ]
  },
  {
    id: "observability-sre",
    title: "Monitoring & Observability (SRE)",
    icon: "Activity",
    skills: [
      { name: "Prometheus", level: "Advanced", tag: "Metrics Collection & PromQL" },
      { name: "Grafana", level: "Advanced", tag: "Dashboarding & Visualizations" },
      { name: "Amazon CloudWatch", level: "Advanced", tag: "Alarms, Logs & Metrics" },
      { name: "SLIs / SLOs", level: "Advanced", tag: "Reliability & Error Budgets" },
      { name: "Incident Management", level: "Intermediate", tag: "Alerts & Troubleshooting" }
    ]
  },
  {
    id: "programming",
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Advanced", tag: "Flask, Automation, ML & Scripting" },
      { name: "Java", level: "Intermediate", tag: "OOP & Core Concepts" },
      { name: "C", level: "Intermediate", tag: "Data Structures & Memory" },
      { name: "SQL", level: "Advanced", tag: "Complex Queries & Optimization" },
      { name: "JavaScript", level: "Advanced", tag: "ES6+, Async/Await, DOM" }
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Advanced", tag: "Hooks, SPA, Component Architecture" },
      { name: "Flask", level: "Advanced", tag: "REST APIs, Routing & Backend" },
      { name: "HTML5", level: "Expert", tag: "Semantic Web & Accessibility" },
      { name: "CSS3", level: "Expert", tag: "Flexbox, Grid, Animations" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Modern Utility-First UI" }
    ]
  },
  {
    id: "data-science",
    title: "Data Science & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "Scikit-learn", level: "Advanced", tag: "Regression, Classification, Pipelines" },
      { name: "Pandas", level: "Advanced", tag: "Data Wrangling & Analysis" },
      { name: "NumPy", level: "Advanced", tag: "Vectorized Computations" },
      { name: "Matplotlib", level: "Intermediate", tag: "Exploratory Data Visualizations" }
    ]
  },
  {
    id: "databases-os",
    title: "Databases & Systems",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "Advanced", tag: "Relational Schema & Indexing" },
      { name: "PostgreSQL", level: "Advanced", tag: "Enterprise Relational DB" },
      { name: "Linux (Ubuntu)", level: "Advanced", tag: "Shell, System Administration" },
      { name: "Windows", level: "Advanced", tag: "PowerShell & Development" }
    ]
  }
];

// Flat list for quick search or badges
export const skills = skillCategories;
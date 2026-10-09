export const learningPaths = {
  Python: {
    Beginner: {
      headline: 'Python foundations',
      summary: 'Start with the basics of syntax, data types, logic, and small projects that build confidence.',
      topics: ['Variables and data types', 'Conditionals and loops', 'Functions and modules', 'Lists, dictionaries, and files'],
      projects: ['Expense tracker', 'Number guessing game', 'To-do list app', 'Simple quiz app'],
      resources: [
        { label: 'Python crash course', href: 'https://www.python.org/about/gettingstarted/' },
        { label: 'Real Python tutorials', href: 'https://realpython.com/' },
      ],
    },
    Intermediate: {
      headline: 'Python problem solving',
      summary: 'Practice structured thinking, data handling, and clean code through real-world scripts and projects.',
      topics: ['Object-oriented programming', 'Working with files and CSV data', 'Error handling', 'Debugging and testing'],
      projects: ['Inventory manager', 'Weather data app', 'Simple web scraper', 'Budget dashboard'],
      resources: [
        { label: 'Python docs', href: 'https://docs.python.org/3/' },
        { label: 'Automate the Boring Stuff', href: 'https://automatetheboringstuff.com/' },
      ],
    },
    Advanced: {
      headline: 'Python systems and automation',
      summary: 'Go beyond beginner topics and focus on larger projects, application design, and automation workflows.',
      topics: ['APIs and JSON', 'Testing and automation', 'Databases and SQL', 'Packaging and deployment'],
      projects: ['Task automation tool', 'API client dashboard', 'Data pipeline', 'Portfolio project API'],
      resources: [
        { label: 'FastAPI docs', href: 'https://fastapi.tiangolo.com/' },
        { label: 'Docker docs', href: 'https://docs.docker.com/' },
      ],
    },
  },
  'Web Development': {
    Beginner: {
      headline: 'Web foundations',
      summary: 'Learn the building blocks of the web and create simple pages before moving into frameworks.',
      topics: ['HTML structure', 'CSS layout and spacing', 'Responsive design', 'JavaScript basics'],
      projects: ['Landing page', 'Personal portfolio', 'Responsive blog layout', 'Simple product page'],
      resources: [
        { label: 'MDN HTML guide', href: 'https://developer.mozilla.org/en-US/docs/Learn/HTML' },
        { label: 'MDN CSS guide', href: 'https://developer.mozilla.org/en-US/docs/Learn/CSS' },
      ],
    },
    Intermediate: {
      headline: 'Build real interfaces',
      summary: 'Learn how to turn layouts into working apps with state, events, and reusable components.',
      topics: ['DOM manipulation', 'Form validation', 'Fetch and APIs', 'Component patterns'],
      projects: ['Movie search app', 'Recipe finder', 'Task board', 'Weather dashboard'],
      resources: [
        { label: 'MDN JavaScript guide', href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript' },
        { label: 'React docs', href: 'https://react.dev/' },
      ],
    },
    Advanced: {
      headline: 'Web systems and product thinking',
      summary: 'Focus on building scalable front-end experiences, APIs, and deployment basics for real products.',
      topics: ['Performance and accessibility', 'State management', 'Authentication flows', 'Deployment and CI'],
      projects: ['SaaS marketing site', 'Dashboard app', 'Learning platform', 'E-commerce front end'],
      resources: [
        { label: 'Vite docs', href: 'https://vite.dev/' },
        { label: 'Web.dev', href: 'https://web.dev/' },
      ],
    },
  },
  Java: {
    Beginner: {
      headline: 'Java essentials',
      summary: 'Understand Java syntax, object orientation, and the core concepts used in many enterprise applications.',
      topics: ['Variables and classes', 'Methods and conditionals', 'Collections and loops', 'Input and output'],
      projects: ['Student grade manager', 'Banking console app', 'Library system', 'Command-line quiz'],
      resources: [
        { label: 'Java tutorials', href: 'https://docs.oracle.com/javase/tutorial/' },
        { label: 'Java basics', href: 'https://www.w3schools.com/java/' },
      ],
    },
    Intermediate: {
      headline: 'Java problem solving',
      summary: 'Move into cleaner architecture and more realistic data processing and application patterns.',
      topics: ['Inheritance and interfaces', 'Exception handling', 'Streams and collections', 'Packages and design'],
      projects: ['File-based inventory app', 'Expense tracker', 'Student records app', 'Library checkout system'],
      resources: [
        { label: 'Java collections', href: 'https://docs.oracle.com/javase/tutorial/collections/' },
        { label: 'Spring docs', href: 'https://spring.io/projects/spring-boot' },
      ],
    },
    Advanced: {
      headline: 'Java for real applications',
      summary: 'Build backend and enterprise-style apps with careful design, testing, and deployment workflows.',
      topics: ['Spring Boot basics', 'REST APIs', 'Databases', 'Testing and production readiness'],
      projects: ['Task management API', 'Bookstore backend', 'Order service', 'Portfolio app backend'],
      resources: [
        { label: 'Spring Boot docs', href: 'https://spring.io/projects/spring-boot' },
        { label: 'Java design patterns', href: 'https://refactoring.guru/design-patterns/java' },
      ],
    },
  },
}

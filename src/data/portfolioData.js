// ============================================================================
// portfolioData.js
// Single source of truth for all portfolio content. Edit the values below to
// personalize the site — components read from here so you rarely need to
// touch component files just to update text, links, or projects.
// ============================================================================

export const personalInfo = {
  name: 'Sonu Nishad',
  role: 'MERN Stack Developer',
  rotatingRoles: ['Full Stack Developer', 'React.js Developer', 'Node.js Developer'],
  tagline: 'Building responsive and scalable web applications with modern technologies.',
  location: 'India',
  // PLACEHOLDER: replace with your real email address
  email: 'sonunishad2100@gmail.com',
  // PLACEHOLDER: replace with your real LinkedIn profile URL
  linkedin: 'https://www.linkedin.com/in/sonu-nishad/',
  // PLACEHOLDER: replace with your real GitHub profile URL
  github: 'https://github.com/iansonu',
  // PLACEHOLDER: drop your real resume file at public/resume.pdf (keep the same filename,
  // or update this path if you rename it)
  resumePath: 'https://drive.google.com/file/d/1-pyHzah7A8HJVYVqV2sVnTeWdK1ocDe8/view?usp=drivesdk',
}

export const aboutInfo = {
  intro:
    "I'm a Computer Science Engineering graduate with a strong passion for building full-stack web applications using the MERN stack. I enjoy turning ideas into responsive, user-friendly products, and I care about writing code that stays clean and maintainable as a project grows.",
  focus:
    "My focus is on the MERN stack — React on the frontend, Node.js and Express on the backend, and MongoDB for data — but I'm equally comfortable picking up new tools and frameworks when a problem calls for it. I like breaking down complex requirements into simple, well-structured solutions.",
  education: {
    degree: 'B.Tech in Computer Science Engineering',
    duration: '2022 – 2026',
  },
  highlights: [
    'MERN Stack Development',
    'REST API Development',
    'Responsive Web Design',
    'Full Stack Projects',
  ],
}

export const skillCategories = [
  {
    category: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    category: 'Backend Development',
    skills: ['Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'SQL'],
  },
  {
    category: 'Programming',
    skills: ['JavaScript', 'Java'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    category: 'Concepts',
    skills: ['REST APIs', 'MVC Architecture', 'CRUD Operations', 'Responsive Design'],
  },
]

export const projects = [
  {
    id: '01',
    name: 'AI-Powered E-Commerce Platform',
    description:
      'A full-stack MERN e-commerce platform with modern shopping functionality, voice-driven navigation, and secure payments.',
    features: [
      'Product browsing and shopping functionality',
      'Voice navigation with speech recognition',
      'Razorpay payment integration',
      'JWT authentication',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'JWT', 'Razorpay'],
    // PLACEHOLDER: replace with your real GitHub repository link
    githubLink: 'https://github.com/iansonu/AI-E-COMMERCE-CLEAN',
    // PLACEHOLDER: replace with your real live demo link
    liveLink: 'https://ai-e-commerce-clean-frontend.onrender.com/',
  },
  {
    id: '02',
    name: 'WanderLust – Vacation Rental Platform',
    description:
      'A full-stack vacation rental platform inspired by Airbnb, letting users explore and manage property listings.',
    features: [
      'Property listing functionality',
      'MVC architecture with REST APIs',
      'Database-backed listings',
      'Responsive design across devices',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'EJS', 'REST APIs'],
    // PLACEHOLDER: replace with your real GitHub repository link
    githubLink: 'https://github.com/iansonu/Airbnb-Project',
    // PLACEHOLDER: replace with your real live demo link
    liveLink: 'https://your-live-demo-link.com',
  },
  {
    id: '03',
    name: 'Employee Management System',
    description:
      'A full-stack MERN CRUD application built to manage employee records efficiently, from creation to deletion.',
    features: [
      'Add, view, update and delete employees',
      'REST API integration',
      'Mongoose-backed data modeling',
      'Responsive user interface',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Axios'],
    // PLACEHOLDER: replace with your real GitHub repository link
    githubLink: 'https://github.com/iansonu/Employee-Management-',
    // PLACEHOLDER: replace with your real live demo link
    liveLink: 'https://your-live-demo-link.com',
  },
]

export const strengths = [
  {
    title: 'Full Stack Development',
    description: 'Ability to build frontend and backend applications with a cohesive, end-to-end approach.',
  },
  {
    title: 'Problem Solving',
    description: 'Strong interest in solving programming and development challenges with clean solutions.',
  },
  {
    title: 'Clean Code',
    description: 'Focus on writing maintainable, well-structured, and readable code.',
  },
  {
    title: 'Continuous Learning',
    description: 'Always learning new technologies and improving development skills.',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

// A short code-like snippet rendered inside the hero's editor mockup.
// Purely visual/decorative — kept here so it's easy to tweak.
export const heroCodeSnippet = [
  { type: 'comment', text: '// developer.js' },
  { type: 'keyword', text: 'const', extra: ' developer = {' },
  { type: 'line', text: "  name: 'Sonu Nishad'," },
  { type: 'line', text: "  role: 'MERN Stack Developer'," },
  { type: 'line', text: '  stack: [' },
  { type: 'string', text: "    'React', 'Node', 'Express', 'MongoDB'" },
  { type: 'line', text: '  ],' },
  { type: 'function', text: '  isAvailableForHire', extra: '() {' },
  { type: 'keyword', text: '    return', extra: ' true;' },
  { type: 'line', text: '  }' },
  { type: 'line', text: '};' },
]

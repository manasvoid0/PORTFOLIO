// All page content lives here so components stay presentational.

export const socials = [
  { name: 'GitHub', url: 'https://github.com/manasvoid0', icon: 'GitHub' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manas-ranjan-barik-a2917927a/', icon: 'LinkedIn' },
];

export const email = 'mrbarik2002@gmail.com';

export const navLinks = [
  { num: '01.', text: 'About', href: '#about' },
  { num: '02.', text: 'Experience', href: '#experience' },
  { num: '03.', text: 'Work', href: '#work' },
  { num: '04.', text: 'Contact', href: '#contact' },
];

export const skills = [
  'Node.js',
  'Express.js',
  'TypeScript',
  'PostgreSQL',
  'JavaScript',
  'Python',
  'FastAPI',
];

export const jobs = [
  {
    company: 'DataCaffe.ai',
    title: 'Software Developer',
    url: 'https://datacaffe.ai',
    range: 'December 2024 - Present',
    points: [
      'Developed and maintained scalable backend applications and REST APIs using Node.js, Express.js, TypeScript, and PostgreSQL, delivering reliable solutions for production environments.',
      'Designed and implemented APIs to integrate multiple data sources, including Snowflake, PostgreSQL, and Excel, enabling seamless data flow and reporting across business systems.',
      'Implemented PostgreSQL Row-Level Security (RLS) policies to enforce tenant-level data isolation and strengthen security within multi-tenant applications.',
      'Collaborated with product teams, analysts, and stakeholders to translate business requirements into scalable technical solutions and system architectures.',
      'Optimized backend services, database queries, and application performance while contributing to code reviews, architecture discussions, and knowledge-sharing initiatives across the engineering team.',
    ],
  },
  // Additional roles — uncomment and fill in when needed.
  // {
  //   company: 'Company Two',
  //   title: 'Frontend Engineer',
  //   url: '#',
  //   range: 'June 2021 - December 2022',
  //   points: [
  //     'Developed and shipped highly interactive web applications using React and Redux.',
  //     'Built and maintained a component library used across multiple product teams.',
  //     'Proposed and implemented scalable solutions to issues identified in the codebase.',
  //   ],
  // },
  // {
  //   company: 'Company Three',
  //   title: 'Software Engineer',
  //   url: '#',
  //   range: 'May 2019 - May 2021',
  //   points: [
  //     "Engineered and improved major features of the company's flagship product.",
  //     'Collaborated with designers to translate Figma mockups into pixel-perfect interfaces.',
  //     'Mentored junior developers and led code reviews to ensure code quality.',
  //   ],
  // },
  // {
  //   company: 'Startup',
  //   title: 'Developer Intern',
  //   url: '#',
  //   range: 'Summer 2018',
  //   points: [
  //     'Worked alongside the founding team to build the MVP of a consumer-facing mobile app.',
  //     'Wrote automated tests to improve confidence and reduce regressions.',
  //     'Shipped features end-to-end, from concept to production.',
  //   ],
  // },
];

export const featuredProjects = [
  {
    title: 'RAG & Plagiarism Detector',
    description:
      'A 100% local, no-API AI suite combining a RAG science tutor with a plagiarism & AI-content detector that scores student work for academic integrity — all running on Ollama.',
    details: [
      "This project is a fully local AI suite that runs entirely on Ollama (using the qwen2.5:7b language model and nomic-embed-text embeddings) with no paid APIs, cloud calls, or external downloads — making it private, free, and offline-capable. It bundles two tools under a single dashboard.",
      'The first is a RAG-based science tutor. It builds a FAISS vector index from a textbook PDF, then answers student questions by retrieving the most relevant passages and feeding them to the LLM, grounding every response in the source material rather than relying on the model\'s memory.',
      'The second is a plagiarism and academic-integrity checker for teachers. Students upload assignments (PDF, DOCX, or PPTX), and for each submission the system runs four checks: an AI-detection pass where Qwen judges whether the text was machine-written, a TF-IDF copy check comparing students against each other, an embedding-based paraphrase check that catches reworded copying, and an originality score rewarding genuine work. Each student receives an integrity score from 0–100 plus a saved JSON report, and the teacher views results in a color-coded dashboard with drill-down per student.',
      'Built with Python, Streamlit, FastAPI, and FAISS.',
    ],
    tech: ['Python', 'Ollama', 'FAISS', 'Streamlit'],
    github: 'https://github.com/manasvoid0/SCIENCE_RAG_PROJECT',
    external: '',
  },
  {
    title: 'Project Two',
    description:
      'An open-source design system and component library built for speed and accessibility. Includes themeable primitives, documentation, and a playground for rapid prototyping.',
    tech: ['React', 'Storybook', 'Tailwind CSS'],
    github: '#',
    external: '#',
  },
  {
    title: 'Project Three',
    description:
      'A real-time collaborative editor with presence, comments, and version history. Built on a CRDT-backed sync engine for conflict-free editing across many simultaneous users.',
    tech: ['TypeScript', 'WebSockets', 'Postgres'],
    github: '#',
    external: '#',
  },
];

export const otherProjects = [
  {
    title: 'Build a Spotify Connected App',
    description:
      'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, and more.',
    tech: ['React', 'Express', 'Spotify API'],
    github: '#',
    external: '#',
  },
  {
    title: 'Integrating Algolia Search',
    description:
      'Building a custom search component that integrates Algolia, a powerful and fast search service for websites and applications.',
    tech: ['Algolia', 'React', 'Node.js'],
    github: '#',
    external: '#',
  },
  {
    title: 'Time to Have More Fun',
    description:
      'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS.',
    tech: ['Next.js', 'Firebase', 'Tailwind'],
    external: '#',
  },
  {
    title: 'Building a Headless CMS',
    description:
      'A starter template for spinning up a headless content platform with a modern editing experience and instant previews.',
    tech: ['GraphQL', 'Gatsby', 'Contentful'],
    github: '#',
    external: '#',
  },
  {
    title: 'OctoProfile',
    description:
      'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages and starred repositories.',
    tech: ['Next.js', 'Chart.js', 'GitHub API'],
    github: '#',
    external: '#',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A clean, responsive weather dashboard with location search, hourly forecasts, and animated condition icons.',
    tech: ['Vue', 'OpenWeather', 'Vite'],
    external: '#',
  },
];

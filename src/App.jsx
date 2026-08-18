import heroImg from './assets/hero.png'
import './App.css'

const profile = {
  name: 'Anand Mohan',
  title: 'React.js Developer - Frontend Developer',
  location: 'Mohali, Punjab',
  phone: '8360342829',
  email: 'anandmohansai123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anand-mohan-140859220',
  resume: '/Anand_Mohan_Frontend_Developer_Resume.pdf',
}

const highlights = [
  {
    label: 'Professional Experience',
    value: '3 Years',
  },
  {
    label: 'Current Role',
    value: 'React.js Developer',
  },
  {
    label: 'Location',
    value: 'Mohali, Punjab',
  },
]

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend Development',
    items: ['React.js', 'Next.js', 'React Router', 'Responsive Web Design'],
  },
  {
    title: 'State Management',
    items: ['Redux', 'Redux Toolkit', 'RTK Query', 'React Query', 'Zustand'],
  },
  {
    title: 'UI Frameworks',
    items: ['Material UI', 'Ant Design', 'Shadcn UI', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Forms and Validation',
    items: ['Formik', 'React Hook Form', 'Zod', 'Yup'],
  },
  {
    title: 'API and Data',
    items: ['REST APIs', 'Axios', 'Fetch API', 'JSON', 'Third-party APIs'],
  },
  {
    title: 'Performance',
    items: ['React.lazy', 'Suspense', 'React.memo', 'useMemo', 'useCallback'],
  },
  {
    title: 'Developer Tools',
    items: ['Git', 'GitHub', 'Vite', 'Postman', 'Chrome DevTools'],
  },
]

const experienceBullets = [
  'Develop and maintain production web applications using React.js, TypeScript, JavaScript, HTML5, and CSS3.',
  'Build reusable component-based architecture and manage complex frontend state with Redux, RTK Query, React Query, and Zustand.',
  'Integrate REST APIs with Axios and Fetch API, including async requests, loading states, validation, and error handling.',
  'Create responsive interfaces using Material UI, Ant Design, Shadcn UI, Bootstrap, and Tailwind CSS.',
  'Optimize React applications with lazy loading, code splitting, memoization, and reusable custom hooks.',
  'Collaborate with developers, QA engineers, designers, and stakeholders across development, debugging, and release workflows.',
]

const projects = [
  {
    title: 'Verunt Insights',
    type: 'Business Monitoring Tool',
    period: '2026 - Present',
    description:
      'Business monitoring and analytics interfaces for presenting metrics, performance indicators, and data insights through responsive dashboards.',
    points: [
      'Built dashboard and analytics screens with reusable UI patterns.',
      'Managed REST API data with React Query and Axios.',
      'Implemented validated forms with Zod and optimized rendering with lazy loading and memoization.',
    ],
    stack: ['React.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'React Query'],
  },
  {
    title: 'DS Guide',
    type: 'Marketplace',
    period: '2025 - 2026',
    description:
      'Marketplace functionality with reusable UI patterns, application workflows, data tables, filters, and form-driven user journeys.',
    points: [
      'Developed marketplace modules with React.js, JavaScript, HTML5, CSS3, and Ant Design.',
      'Implemented pagination, loading states, API responses, and error handling with Axios.',
      'Added charts, Swiper interactions, i18next translation support, Toastify notifications, and React Hooks.',
    ],
    stack: ['React.js', 'Redux', 'React Router', 'React Bootstrap', 'Chart.js'],
  },
  {
    title: 'Harken',
    type: 'Real Estate Evaluation Platform',
    period: '2023 - 2025',
    description:
      'Real estate evaluation workflows with dynamic forms, data tables, image handling, filters, property screens, and third-party API integration.',
    points: [
      'Built reusable components for property evaluation, data entry, image management, and business workflows.',
      'Integrated internal and third-party REST APIs using Axios.',
      'Developed maps, photo galleries, evaluation screens, filters, and responsive data-driven layouts.',
    ],
    stack: ['React.js', 'JavaScript', 'Formik', 'Zod', 'REST APIs'],
  },
]

const education = [
  {
    school: 'Chandigarh University',
    degree: 'Master of Computer Applications (MCA)',
    period: '2019 - 2022',
    location: 'Mohali, Punjab',
  },
  {
    school: 'M.S College',
    degree: 'Bachelor of Science in Mathematics',
    period: '2015 - 2019',
    location: 'Motihari, Bihar',
  },
]

const coreStrengths = [
  'Production React apps',
  'Reusable component systems',
  'API-driven dashboards',
  'Performance optimization',
]

function App() {
  return (
    <main className="portfolio">
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Anand Mohan home">
          Anand Mohan
        </a>
        <nav className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">React.js - TypeScript - JavaScript</p>
          <h1>{profile.name}</h1>
          <p className="role-line">{profile.title}</p>
          <p className="hero-text">
            React.js developer with 3 years of professional experience building
            responsive and scalable web applications using React.js, TypeScript,
            JavaScript, REST APIs, Redux Toolkit, React Query, Zustand, and
            modern UI frameworks.
          </p>
          <div className="strength-row" aria-label="Core strengths">
            {coreStrengths.map((strength) => (
              <span key={strength}>{strength}</span>
            ))}
          </div>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a className="button secondary" href={profile.resume} download>
              Download Resume
            </a>
            <a className="button secondary" href={`mailto:${profile.email}`}>
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer profile preview">
          <div className="profile-panel">
            <div className="panel-header">
              <span className="status-dot" aria-hidden="true"></span>
              Frontend specialist
            </div>
            <img src={heroImg} alt="" />
            <div className="panel-card">
              <strong>3 years</strong>
              <span>React.js, TypeScript, APIs, dashboards, forms, and scalable UI architecture.</span>
            </div>
            <div className="availability-note">Available for React.js and frontend developer roles</div>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Resume highlights">
        {highlights.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">Professional Summary</p>
          <h2>Frontend developer focused on scalable React products.</h2>
        </div>
        <p>
          Experienced in delivering production-ready interfaces including
          dashboards, analytic screens, data tables, dynamic forms, filters,
          pagination, image management, API integration, performance
          optimization, error handling, debugging, Git workflows, and production
          support.
        </p>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Professional Experience</p>
          <h2>Ditstek Innovations</h2>
        </div>
        <article className="experience-card">
          <div className="experience-meta">
            <div>
              <h3>React.js Developer</h3>
              <p>Mohali, Punjab</p>
            </div>
            <span>2023 - Present</span>
          </div>
          <ul className="detail-list">
            {experienceBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Technical Skills</p>
          <h2>Modern frontend stack with practical production depth.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Resume-backed work across dashboards, marketplace, and real estate.</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">
                <p>{project.type}</p>
                <span>{project.period}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="detail-list compact">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <small key={tech}>{tech}</small>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Academic foundation.</h2>
        </div>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.school}>
              <span>{item.period}</span>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              <small>{item.location}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-strip" id="resume">
        <div>
          <p className="eyebrow">Resume</p>
          <h2>Want the full PDF version?</h2>
          <p>
            Download Anand Mohan's frontend developer resume with detailed
            experience, technical skills, project work, and education.
          </p>
        </div>
        <div className="resume-actions">
          <a
            className="button primary"
            href={profile.resume}
            rel="noreferrer"
            target="_blank"
          >
            View Resume
          </a>
          <a className="button secondary" href={profile.resume} download>
            Download PDF
          </a>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let us build production-ready React interfaces.</h2>
          <p>
            Based in {profile.location}. Reach out for frontend, React.js,
            TypeScript, and full-stack JavaScript opportunities.
          </p>
          <div className="contact-details">
            <a href={`tel:+91${profile.phone}`}>{profile.phone}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            Email Me
          </a>
          <a className="button secondary" href={profile.resume} download>
            Resume
          </a>
          <a
            className="button secondary"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}

export default App

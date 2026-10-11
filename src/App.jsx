import React from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Database,
  Sparkles,
  Menu,
  Mail,
  Phone,
  MapPin,
  Workflow,
  Gauge,
  MonitorSmartphone,
  Braces,
} from "lucide-react";
import "./styles.css";

const skills = [
  {
    title: "Frontend engineering",
    icon: MonitorSmartphone,
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Responsive UI",
    ],
  },
  {
    title: "UI systems & quality",
    icon: Layers3,
    items: [
      "Redux",
      "Ant Design",
      "Material UI",
      "Chakra UI",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    title: "Backend & data",
    icon: Database,
    items: ["Node.js", "Express.js", "GraphQL", "SQL", "MongoDB", "Firebase"],
  },
  {
    title: "Modern workflow",
    icon: Workflow,
    items: [
      "REST / JSON APIs",
      "Git",
      "Azure DevOps",
      "AI-assisted development",
      "Debugging",
      "Performance tuning",
    ],
  },
];
const projects = [
  {
    number: "01",
    name: "Polus AI",
    type: "AI · Analytics platform",
    description:
      "A generative AI-powered, no-code analytics platform designed to help users work with data and build insights.",
    contribution:
      "Worked across React.js, Node.js and SQL, with a focus on application functionality, data integration and backend performance.",
    stack: ["React.js", "Node.js", "SQL"],
    tone: "violet",
    icon: Sparkles,
  },
  {
    number: "02",
    name: "Vady",
    type: "Natural language · Dashboard UI",
    description:
      "An NLP-based interface that lets users generate dashboards and apply formulas using plain English.",
    contribution:
      "Contributed to the user experience that connects natural-language instructions with dashboard workflows.",
    stack: ["React.js", "NLP interface", "Dashboards"],
    tone: "blue",
    icon: Braces,
  },
  {
    number: "03",
    name: "Mahindra & Mahindra DMS 2.0",
    type: "Enterprise · Dealer management",
    description:
      "Enterprise dealer-management application delivered in a Wipro client engagement.",
    contribution:
      "Built responsive UI features from Azure DevOps user stories and collaborated with stakeholders and backend teams.",
    stack: ["React.js", "Redux", "Ant Design", "RTL"],
    tone: "orange",
    icon: Gauge,
  },
  {
    number: "04",
    name: "EZ Consult",
    type: "Healthcare · Telemedicine",
    description:
      "A telemedicine platform supporting digital healthcare workflows.",
    contribution:
      "Developed features including video consultations, prescription uploads and medicine orders.",
    stack: ["Next.js", "GraphQL", "Ant Design"],
    tone: "green",
    icon: MonitorSmartphone,
  },
];
function SectionHeading({ eyebrow, title, detail }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {detail && <p className="section-detail">{detail}</p>}
    </div>
  );
}

const App = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">VV</span>
          <span>
            Vivek Verma<span className="brand-dot">.</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <Menu size={22} />
        </button>
        <nav
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={closeMenu}>
            Selected work
          </a>
          <a href="#expertise" onClick={closeMenu}>
            Expertise
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" /> OPEN TO SELECT FREELANCE
              PROJECTS
            </div>
            <h1>
              Building digital products that feel{" "}
              <span className="serif-accent">thoughtful</span> and work
              beautifully.
            </h1>
            <p className="hero-lede">
              I’m Vivek Verma, a Senior Software Engineer focused on React,
              TypeScript and Node.js. I help teams turn complex requirements
              into dependable, user-friendly web experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Discuss your project <ArrowRight size={17} />
              </a>
              <a className="text-link" href="#work">
                Explore selected work <ArrowDownRight size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <span className="meta-label">BASED IN</span>
                <span>
                  <MapPin size={14} /> Bengaluru, India
                </span>
              </div>
              <div>
                <span className="meta-label">CORE FOCUS</span>
                <span>
                  <Code2 size={14} /> Product-minded engineering
                </span>
              </div>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Abstract software architecture illustration"
          >
            <div className="art-orbit orbit-one"></div>
            <div className="art-orbit orbit-two"></div>
            <div className="art-card art-card-main">
              <div className="code-window-top">
                <span></span>
                <span></span>
                <span></span>
                <small>product.tsx</small>
              </div>
              <div className="code-lines">
                <p>
                  <i>01</i>
                  <b className="syntax-purple">const</b> product = {"{"}
                </p>
                <p>
                  <i>02</i>&nbsp;&nbsp;experience:{" "}
                  <b className="syntax-green">'intuitive'</b>,
                </p>
                <p>
                  <i>03</i>&nbsp;&nbsp;architecture:{" "}
                  <b className="syntax-green">'scalable'</b>,
                </p>
                <p>
                  <i>04</i>&nbsp;&nbsp;quality:{" "}
                  <b className="syntax-green">'reliable'</b>,
                </p>
                <p>
                  <i>05</i>
                  {"}"};
                </p>
                <p className="code-gap">
                  <i>06</i>
                  <b className="syntax-purple">export default</b> product;
                </p>
              </div>
              <div className="code-footer">
                <span>
                  <span className="tiny-status"></span> All systems considered
                </span>
                <span>TSX</span>
              </div>
            </div>
            <div className="float-chip chip-top">
              <span className="chip-icon">
                <Braces size={17} />
              </span>
              <span>
                <b>Clean interfaces</b>
                <small>Designed for real users</small>
              </span>
            </div>
            <div className="float-chip chip-bottom">
              <span className="chip-icon chip-icon-green">
                <Check size={17} />
              </span>
              <span>
                <b>Built with care</b>
                <small>Quality at every layer</small>
              </span>
            </div>
            <div className="art-caption">
              ENGINEERING WITH INTENTION <span>✳</span>
            </div>
          </div>
          <a className="scroll-cue" href="#work">
            <span className="scroll-line"></span> SCROLL TO EXPLORE
          </a>
        </section>
        <section className="trust-strip">
          <div className="section-wrap trust-inner">
            <span className="trust-label">EXPERIENCE ACROSS</span>
            <span>AI & Analytics</span>
            <span className="trust-separator">/</span>
            <span>Enterprise Platforms</span>
            <span className="trust-separator">/</span>
            <span>Healthcare Technology</span>
            <span className="trust-separator">/</span>
            <span>Data-driven Products</span>
          </div>
        </section>
        <section className="section-wrap work-section" id="work">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title={
              <>
                A few products I’ve helped{" "}
                <span className="serif-accent">bring to life.</span>
              </>
            }
            detail="A selection of product and client work from my professional experience. Some engagements are confidential, so the details here stay at a high level."
          />
          <div className="project-grid">
            {projects.map((project) => {
              const ProjectIcon = project.icon;
              return (
                <article
                  className={`project-card ${project.tone}`}
                  key={project.number}
                >
                  <div className="project-topline">
                    <span>{project.number} / 04</span>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <div className="project-visual">
                    <div className="visual-grid"></div>
                    <div className="visual-window">
                      <div className="visual-window-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="visual-window-content">
                        <div className="visual-icon">
                          <ProjectIcon size={25} />
                        </div>
                        <div className="visual-skeleton wide"></div>
                        <div className="visual-skeleton medium"></div>
                        <div className="visual-bars">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div className="visual-orb"></div>
                  </div>
                  <div className="project-content">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="contribution">
                      <span>MY CONTRIBUTION</span>
                      <p>{project.contribution}</p>
                    </div>
                    <div className="tag-row">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="work-note">
            <span className="note-star">✳</span> Additional experience includes
            EZ Pharmacy, a B2B/B2C pharmacy ordering system, and the Gramin Web
            Application, a rural outreach platform.
          </p>
        </section>
        <section className="expertise-section" id="expertise">
          <div className="section-wrap expertise-layout">
            <div className="expertise-intro">
              <SectionHeading
                eyebrow="WHAT I BRING"
                title={
                  <>
                    Engineering that balances{" "}
                    <span className="serif-accent">detail and direction.</span>
                  </>
                }
              />
              <p>
                I work across the stack, with a strong focus on frontend
                architecture and the details that make applications easier to
                use, maintain and evolve.
              </p>
              <a href="#contact" className="text-link dark-link">
                Tell me what you’re building <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="skill-grid">
              {skills.map(({ title, icon: Icon, items }, index) => (
                <article className="skill-card" key={title}>
                  <div className="skill-card-top">
                    <span className="skill-icon">
                      <Icon size={20} />
                    </span>
                    <span className="skill-index">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <div className="skill-tags">
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section-wrap about-section" id="about">
          <div className="about-label">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <div className="about-rule"></div>
          </div>
          <div className="about-copy">
            <h2>
              Good software is more than code. It’s{" "}
              <span className="serif-accent">clarity, collaboration</span> and a
              hundred considered decisions.
            </h2>
            <p>
              Across AI-powered analytics, enterprise dealer management and
              healthcare applications, I’ve contributed to products where
              usability and reliability matter. I’m comfortable working with
              cross-functional teams, translating user stories into responsive
              interfaces, troubleshooting issues and improving performance.
            </p>
            <div className="experience-list">
              <div>
                <span className="experience-date">MAY 2024 — PRESENT</span>
                <div>
                  <b>Newfangled Vision Pvt Ltd</b>
                  <small>Node.js Developer · AI analytics products</small>
                </div>
              </div>
              <div>
                <span className="experience-date">FEB 2023 — APR 2024</span>
                <div>
                  <b>Cantik Technologies Pvt Ltd</b>
                  <small>Senior UI/UX Developer · React.js</small>
                </div>
              </div>
              <div>
                <span className="experience-date">JAN 2023</span>
                <div>
                  <b>Tata Consultancy Services</b>
                  <small>System Engineer · Gramin Web Application</small>
                </div>
              </div>
              <div>
                <span className="experience-date">OCT 2021 — NOV 2022</span>
                <div>
                  <b>CBNITS India Pvt Ltd</b>
                  <small>Frontend Developer · React.js / Next.js</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-copy">
              <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
              <h2>
                Let’s make something{" "}
                <span className="serif-accent">worth using.</span>
              </h2>
              <p>
                Have a product to build, a frontend to improve, or a technical
                challenge to untangle? Share a little about it. I’d be glad to
                explore whether I can help.
              </p>
              <a
                className="button button-light"
                href="mailto:vivekverma74888@gmail.com?subject=Freelance%20project%20inquiry"
              >
                Start a conversation <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-icon">
                  <Mail size={18} />
                </span>
                <div>
                  <small>EMAIL</small>
                  <a href="mailto:vivekverma74888@gmail.com">
                    vivekverma74888@gmail.com
                  </a>
                </div>
                <ArrowUpRight size={16} />
              </div>
              <div className="contact-detail">
                <span className="contact-icon">
                  <Phone size={18} />
                </span>
                <div>
                  <small>PHONE</small>
                  <a href="tel:+917488889411">+91 74888 89411</a>
                </div>
                <ArrowUpRight size={16} />
              </div>
              <div className="contact-detail">
                <span className="contact-icon">
                  <MapPin size={18} />
                </span>
                <div>
                  <small>LOCATION</small>
                  <span>Bengaluru, India · Remote-friendly</span>
                </div>
              </div>
              <div className="contact-note">
                <span className="availability-dot"></span> Available for select
                freelance engagements
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">VV</span>
          <span>
            Vivek Verma<span className="brand-dot">.</span>
          </span>
        </a>
        <p>Thoughtful engineering. Useful outcomes.</p>
        <span>© {new Date().getFullYear()} Vivek Verma</span>
      </footer>
    </div>
  );
};

export default App;

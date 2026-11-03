"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, X } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Next-Gen Smart Bus Entry System",
    repo: "https://github.com/DeepakTimlapur/Smart_Bus-main",
    category: "AI / IOT",
    description: "An intelligent transportation system combining facial verification, passenger monitoring, GPS tracking and real-time fleet management.",
    tech: "Python · FastAPI · MongoDB · MQTT · Raspberry Pi",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=85",
  },
  {
    number: "02",
    title: "Sales Intelligence Tool",
    repo: "https://github.com/DeepakTimlapur/sales-intelligence-tool",
    category: "FULL STACK",
    description: "An AI-assisted sales platform with objection handling, secure authentication, subscription management and analytics.",
    tech: "Python · React · Firebase · Razorpay · Power BI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85",
  },
  {
    number: "03",
    title: "COMPLAINT-MANAGEMENT-SYSTEM",
    repo: "https://github.com/DeepakTimlapur/AIVOA-COMPLAINT-MANAGEMENT-SYSTEM",
    category: "AI / WORKFLOW",
    description: "A pharmaceutical complaint management platform using AI workflows to structure, assess and review complaint records.",
    tech: "React · Redux · FastAPI · PostgreSQL · LangGraph",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=85",
  },
  {
    number: "04",
    title: "EV Charging Demand Prediction",
    repo: "https://github.com/DeepakTimlapur/EV_Charging_Demand",
    category: "DATA SCIENCE",
    description: "A machine learning workflow for electric vehicle charging demand analysis and predictive modeling.",
    tech: "Python · Pandas · NumPy · Scikit-learn",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=85",
  },
  {
    number: "05",
    title: "SupportIQ – AI-Powered Customer Support Intelligence",
    repo: "https://github.com/DeepakTimlapur/SupportIQ",
    category: "AI / CUSTOMER SUPPORT",
    description: "An AI-powered customer support intelligence project focused on analyzing support interactions and helping teams understand and respond to customer issues.",
    tech: "AI · Customer Support · Project in Development",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=85",
  },
  {
    number: "06",
    title: "EraseTrace AI",
    repo: "https://github.com/DeepakTimlapur/EraseTrace_AI",
    category: "AI / DATA GOVERNANCE",
    description: "An AI-powered data deletion audit platform for managing deletion requests, running audits, reviewing findings, planning remediation and exploring evidence.",
    tech: "TypeScript · Data Governance · Audit Workflows",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=85",
  },];

const commands: Record<string, string> = {
  help: "Commands: about, skills, projects, contact, clear",
  about: "Deepak Timlapur — Computer Science and Data Science student at BITM.",
  skills: "Python, SQL, FastAPI, Flask, React, MongoDB, PostgreSQL, TensorFlow, OpenCV, Flutter and Power BI.",
  projects: "Smart Bus Entry System | Sales Intelligence Tool | COMPLAINT-MANAGEMENT-SYSTEM | EV Charging Demand Prediction | SupportIQ | EraseTrace AI.",
  contact: "deepak112085@gmail.com | github.com/DeepakTimlapur",
};

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("Welcome to Deepak's portfolio. Type help to explore.");

  function runCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = command.trim().toLowerCase();

    if (value === "clear") {
      setOutput("");
    } else {
      setOutput(commands[value] || "Command not found. Type help.");
    }

    setCommand("");
  }

  return (
    <main className="newspaper">
      <header className="masthead" id="home">
        <div className="masthead-rule" />
        <div className="masthead-title">
          <span>DEEPAK</span>{" "}
          <span className="orange">TIMLAPUR</span>
        </div>
        <div className="masthead-rule double" />

        <nav className="category-bar">
          <a href="#about">ABOUT</a>
          <b>•</b>
          <a href="#skills">SKILLS</a>
          <b>•</b>
          <a href="#projects">PROJECTS</a>
          <b>•</b>
          <a href="#education">EDUCATION</a>
          <b>•</b>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="lead-story" id="about">
        <h1>BUILDING DIGITAL EXPERIENCES WITH CODE</h1>

        <div className="lead-grid">
          <div className="lead-copy">
            <p>
              I&apos;m Deepak Timlapur, a final-year Computer Science and
              Data Science student at Ballari Institute of Technology
              and Management.
            </p>
            <p>
              I work across software engineering, backend development,
              artificial intelligence and data science. I enjoy turning
              ideas into practical applications and solving real-world
              engineering problems.
            </p>
            <p>
              My work includes intelligent transport systems, AI-assisted
              applications, full-stack platforms and predictive analytics.
            </p>
          </div>

          <figure className="lead-image">
            <img
              src="/images/portfolio-city.png"
              alt="City architecture in monochrome"
            />
            <figcaption>SOFTWARE · DATA · ARTIFICIAL INTELLIGENCE</figcaption>
          </figure>
        </div>
      </section>

      <section className="article-section" id="skills">
        <div className="article-grid">
          <div className="article-heading">
            <h2>Technical<br />Expertise</h2>
            <div className="small-image">
              <img
                src="/images/tech-expertise.jpg"
                alt="Computer circuit board"
              />
              <span>TOOLS AND TECHNOLOGIES</span>
            </div>
          </div>

          <div className="article-column">
            <h3>Programming & Backend</h3>
            <p>
              Python, SQL and Dart form the foundation of my development
              work. I build backend applications and REST APIs using
              FastAPI and Flask, with authentication and role-based access.
            </p>

            <h3>Frontend & Databases</h3>
            <p>
              I work with React, Redux and Flutter, integrating interfaces
              with backend services. My database experience includes
              PostgreSQL, MongoDB, MySQL and Firebase Firestore.
            </p>
          </div>

          <div className="article-column">
            <h3>Artificial Intelligence</h3>
            <p>
              My AI and data toolkit includes Pandas, NumPy, Scikit-learn,
              TensorFlow, OpenCV, LangGraph and Groq API. I work on
              predictive modeling and AI-powered workflows.
            </p>

            <h3>Tools & Platforms</h3>
            <p>
              Git, GitHub, Render, Raspberry Pi, MQTT, Power BI,
              and development tools including VS Code and Jupyter Notebook.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <h2>SELECTED PROJECTS</h2>
          <span>ENGINEERING & DEVELOPMENT</span>
        </div>

        <h2 className="projects-headline">IDEAS INTO IMPACT</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span>{project.category}</span>
              </div>
              <div className="project-title-row">
                <span>{project.number}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <div className="project-tech">{project.tech}</div>
              <a
                className="project-link"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                VIEW ON GITHUB <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
        <p className="repo-note">
          PROJECT LINKS CURRENTLY OPEN MY GITHUB PROFILE. INDIVIDUAL REPOSITORY LINKS CAN BE ADDED WHEN VERIFIED.
        </p>
      </section>

      <section className="education-section" id="education">
        <div className="section-heading">
          <h2>EDUCATION</h2>
          <span>ACADEMIC BACKGROUND</span>
        </div>
        <div className="education-content">
          <h3>B.E. Computer Science and Engineering</h3>
          <p>Specialization: Data Science</p>
          <p>Ballari Institute of Technology and Management, Ballari, Karnataka</p>
          <strong>EXPECTED GRADUATION — 2027</strong>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="section-heading">
          <h2>CONTACT</h2>
          <span>GET IN TOUCH</span>
        </div>

        <h2 className="contact-headline">LET&apos;S CONNECT.</h2>

        <div className="contact-links">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=deepak112085%40gmail.com" target="_blank" rel="noreferrer">
            DEEPAK112085@GMAIL.COM <ArrowUpRight size={15} />
          </a>
          <a href="https://github.com/DeepakTimlapur" target="_blank" rel="noreferrer">
            GITHUB PROFILE <ArrowUpRight size={15} />
          </a>
          <button onClick={() => setTerminalOpen(true)}>
            OPEN DEEPAK.EXE
          </button>
        </div>

        <div className="footer-bottom">
          <span>DEEPAK TIMLAPUR</span>
          <span>HOSPET, KARNATAKA, INDIA</span>
          <span>© 2026</span>
        </div>
      </footer>

      {terminalOpen && (
        <div className="terminal-overlay" onClick={() => setTerminalOpen(false)}>
          <div className="terminal-box" onClick={(event) => event.stopPropagation()}>
            <div className="terminal-header">
              <span>DEEPAK.EXE</span>
              <button onClick={() => setTerminalOpen(false)} aria-label="Close terminal">
                <X size={18} />
              </button>
            </div>
            <p className="terminal-output">{output}</p>
            <form onSubmit={runCommand}>
              <span>&gt;</span>
              <input
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                placeholder="Type help..."
                autoFocus
              />
              <button type="submit">RUN</button>
            </form>
            <small>HINT: TYPE HELP TO SEE AVAILABLE COMMANDS.</small>
          </div>
        </div>
      )}
    </main>
  );
}









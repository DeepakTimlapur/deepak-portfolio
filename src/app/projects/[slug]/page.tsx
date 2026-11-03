import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projects: Record<string, {
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  implementation: string;
  status: string;
  repo: string;
}> = {
  "smart-bus-entry-system": {
    title: "Next-Gen Smart Bus Entry System",
    category: "AI / IoT · Intelligent Transportation",
    description: "An intelligent transportation system combining facial verification, passenger monitoring, GPS tracking and real-time fleet management.",
    problem: "Manual passenger monitoring and limited fleet visibility make transportation operations harder to manage.",
    solution: "The system combines computer vision, IoT devices and backend services to support passenger verification and fleet monitoring.",
    features: [
      "Face-based passenger verification",
      "Passenger entry and attendance monitoring",
      "Real-time GPS tracking",
      "Driver assistance and safety monitoring",
      "Fleet management dashboard",
      "MQTT-based device communication"
    ],
    tech: ["Python", "FastAPI", "MongoDB", "MQTT", "Raspberry Pi", "OpenCV", "Next.js"],
    implementation: "Raspberry Pi handles camera-side processing and device communication. FastAPI provides backend APIs, MongoDB stores application data and MQTT supports communication between connected components.",
    status: "Major project",
    repo: "https://github.com/DeepakTimlapur/Smart_Bus-main"
  },
  "sales-intelligence-tool": {
    title: "Sales Intelligence Tool",
    category: "FULL STACK · AI-ASSISTED PLATFORM",
    description: "An AI-assisted sales platform with objection handling, secure authentication, subscription management and analytics.",
    problem: "Sales workflows require organized customer interactions, objection handling and visibility into business activity.",
    solution: "The platform brings sales workflows, authentication, payment testing and analytics into one application.",
    features: [
      "Secure user authentication",
      "Sales objection-handling workflows",
      "Subscription management",
      "Razorpay test-payment integration",
      "Business analytics"
    ],
    tech: ["Python", "React", "Firebase", "Firestore", "Razorpay", "Power BI"],
    implementation: "The React frontend integrates with Firebase authentication and Firestore. Payment functionality uses a test integration, with analytics supporting business visibility.",
    status: "Portfolio project",
    repo: "https://github.com/DeepakTimlapur/sales-intelligence-tool"
  },
  "complaint-management-system": {
    title: "COMPLAINT-MANAGEMENT-SYSTEM",
    category: "AI / WORKFLOW AUTOMATION",
    description: "A pharmaceutical complaint management platform using AI workflows to structure, assess and review complaint records.",
    problem: "Complaint information requires structured handling, assessment and review to support consistent processing.",
    solution: "The application combines a web interface, backend APIs and AI-assisted workflows to organize complaint-management activities.",
    features: [
      "Complaint record management",
      "Structured complaint workflows",
      "AI-assisted assessment and review",
      "Frontend state management",
      "Backend API integration"
    ],
    tech: ["React", "Redux", "FastAPI", "PostgreSQL", "LangGraph", "Groq API"],
    implementation: "The React and Redux frontend communicates with FastAPI services. PostgreSQL supports structured data storage, while LangGraph and Groq API support AI-assisted workflows.",
    status: "Portfolio project",
    repo: "https://github.com/DeepakTimlapur/AIVOA-COMPLAINT-MANAGEMENT-SYSTEM"
  },
  "ev-charging-demand": {
    title: "EV Charging Demand Prediction",
    category: "DATA SCIENCE · MACHINE LEARNING",
    description: "A machine learning workflow for electric vehicle charging demand analysis and predictive modeling.",
    problem: "Understanding charging demand can help identify usage patterns and support EV charging infrastructure planning.",
    solution: "The project uses data analysis and machine learning workflows to explore charging patterns and predict demand.",
    features: [
      "Dataset inspection and preprocessing",
      "Exploratory data analysis",
      "Feature analysis",
      "Machine learning model development",
      "Model evaluation and visualization"
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    implementation: "Python data-science libraries support preprocessing, analysis, model training and evaluation. The project explores the relationship between charging demand and station load.",
    status: "Data science project",
    repo: "https://github.com/DeepakTimlapur/EV_Charging_Demand"
  },
  "supportiq": {
    title: "SupportIQ – AI-Powered Customer Support Intelligence",
    category: "AI / CUSTOMER SUPPORT",
    description: "An AI-powered customer support intelligence project focused on analyzing support interactions and helping teams understand and respond to customer issues.",
    problem: "Support conversations contain useful information about customer issues, recurring concerns and service quality.",
    solution: "SupportIQ is being developed to explore how AI can help analyze support interactions and make customer-support information more useful.",
    features: [
      "Customer-support interaction analysis",
      "AI-assisted support intelligence",
      "Customer issue understanding",
      "Support workflow exploration"
    ],
    tech: ["Artificial Intelligence", "Customer Support Analytics"],
    implementation: "This project is currently in development. Its functionality and implementation details will be expanded as development progresses.",
    status: "In development",
    repo: "https://github.com/DeepakTimlapur/SupportIQ"
  },
  "erasetrace-ai": {
    title: "EraseTrace AI",
    category: "AI / DATA GOVERNANCE",
    description: "An AI-powered data deletion audit platform for managing deletion requests, running audits, reviewing findings, planning remediation and exploring evidence.",
    problem: "Data deletion workflows require traceability, audit evidence and a way to review deletion activities.",
    solution: "EraseTrace AI organizes deletion requests, audit activities, findings, remediation plans and supporting evidence.",
    features: [
      "Deletion request management",
      "Audit execution",
      "Findings review",
      "Remediation planning",
      "Evidence exploration",
      "Evaluation and reporting",
      "Data-source management"
    ],
    tech: ["TypeScript", "AI Workflows", "Data Governance", "Audit Workflows"],
    implementation: "The platform is organized around workflows for deletion requests, audits, findings, remediation plans and evidence.",
    status: "Portfolio project",
    repo: "https://github.com/DeepakTimlapur/EraseTrace_AI"
  }
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) notFound();

  return (
    <main className="detail-page">
      <header className="detail-masthead">
        <Link href="/" className="detail-brand">
          DEEPAK <span>TIMLAPUR</span>
        </Link>
        <p>SOFTWARE · DATA · ARTIFICIAL INTELLIGENCE</p>
      </header>

      <nav className="detail-nav">
        <Link href="/#projects">PROJECTS</Link>
        <Link href="/#about">ABOUT</Link>
        <Link href="/#contact">CONTACT</Link>
      </nav>

      <section className="detail-hero">
        <p className="detail-kicker">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="detail-overview">{project.description}</p>
        <div className="detail-actions">
          <a href={project.repo} target="_blank" rel="noreferrer" className="detail-github">
            VIEW SOURCE ON GITHUB <ArrowUpRight size={16} />
          </a>
          <span>{project.status}</span>
        </div>
      </section>

      <div className="detail-rule" />

      <section className="detail-content-grid">
        <article>
          <span className="detail-number">01 / THE PROBLEM</span>
          <h2>Why this project?</h2>
          <p>{project.problem}</p>
        </article>
        <article>
          <span className="detail-number">02 / THE APPROACH</span>
          <h2>What it does</h2>
          <p>{project.solution}</p>
        </article>
      </section>

      <section className="detail-section">
        <span className="detail-number">03 / CAPABILITIES</span>
        <h2>Key Features</h2>
        <div className="detail-feature-grid">
          {project.features.map((feature, index) => (
            <div className="detail-feature" key={feature}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <span className="detail-number">04 / TECHNOLOGY</span>
        <h2>Tech Stack</h2>
        <div className="detail-tech-list">
          {project.tech.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="detail-section detail-implementation">
        <span className="detail-number">05 / IMPLEMENTATION</span>
        <h2>How it is built</h2>
        <p>{project.implementation}</p>
      </section>

      <footer className="detail-footer">
        <Link href="/#projects" className="detail-back">
          <ArrowLeft size={17} /> BACK TO ALL PROJECTS
        </Link>
        <span>DEEPAK TIMLAPUR · PORTFOLIO</span>
      </footer>
    </main>
  );
}
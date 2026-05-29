// =============================================================
//  EDIT THIS FILE to fill in your real content.
//  The placeholder copy mirrors the design so the site looks
//  complete out of the box — replace it with your own.
// =============================================================

export const site = {
  name: "DevPortfolio",
  role: "Senior Full-Stack Engineer",
  location: "San Francisco, CA",
  // Used for SEO metadata. Replace with your real domain.
  url: "https://your-domain.com",
  // Shown as the green "Available for Hire" pill in the hero.
  availableForHire: true,
  // Small stat chip floating over the hero portrait.
  heroStat: { value: "10+ Years", label: "Engineering Expertise" },
  // Set to a path like "/resume.pdf" (place file in /public).
  resumeUrl: "",
  // Optional hero portrait at /public/portrait.jpg. Falls back to a
  // gradient placeholder when empty.
  portrait: "",
};

export const social = {
  email: "hello@devportfolio.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://x.com/yourusername",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// ---- HOME ---------------------------------------------------
export const home = {
  headlineLead: "Building Digital Experiences with ",
  headlineAccent: "Precision",
  intro:
    "A Senior Full-Stack Engineer specializing in high-performance web applications, architectural integrity, and seamless user interfaces. Turning complex logic into elegant code.",
};

// Scrolling marquee under the hero.
export const marqueeTech = [
  "TypeScript",
  "React.js",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "AWS Cloud",
  "Python",
];

// ---- PROJECTS -----------------------------------------------
export type Category = "frontend" | "backend" | "fullstack";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: Category;
  live?: string;
  github?: string;
  image?: string; // optional /public/projects/<file>; falls back to gradient
  featured?: boolean; // shown on the home page (max 3)
  icon?: string; // Material Symbol name shown on home cards
};

export const projects: Project[] = [
  {
    title: "Quantum Analytics",
    description:
      "Real-time data visualization platform processing 10k+ events per second with sub-100ms latency.",
    tech: ["NEXT.JS", "REDUX", "D3.JS"],
    category: "fullstack",
    live: "https://example.com",
    github: "https://github.com/yourusername/quantum-analytics",
    featured: true,
    icon: "code",
  },
  {
    title: "Nova Commerce",
    description:
      "Headless commerce engine built for extreme scalability and optimized for 99+ Core Web Vitals scores.",
    tech: ["TYPESCRIPT", "STRIPE", "REDIS"],
    category: "fullstack",
    live: "https://example.com",
    github: "https://github.com/yourusername/nova-commerce",
    featured: true,
    icon: "shopping_cart",
  },
  {
    title: "Nexus CI/CD",
    description:
      "Cloud-native pipeline orchestrator automating deployments across multi-region AWS infrastructure.",
    tech: ["DOCKER", "GO", "KUBERNETES"],
    category: "backend",
    github: "https://github.com/yourusername/nexus-cicd",
    featured: true,
    icon: "terminal",
  },
  {
    title: "Atlas Crawler",
    description:
      "A distributed web crawling engine built with Go, capable of indexing millions of pages daily.",
    tech: ["GOLANG", "ELASTICSEARCH", "KAFKA"],
    category: "backend",
    github: "https://github.com/yourusername/atlas-crawler",
  },
  {
    title: "Lumina CMS",
    description:
      "Headless content management system with a focus on developer ergonomics and blazing fast delivery.",
    tech: ["SVELTE", "RUST", "AWS"],
    category: "backend",
    live: "https://example.com",
  },
  {
    title: "Void Engine",
    description:
      "Experimental lightweight 2D physics engine optimized for web-based interactive experiences.",
    tech: ["TYPESCRIPT", "WEBGL", "MATH.JS"],
    category: "frontend",
    github: "https://github.com/yourusername/void-engine",
  },
];

// ---- ABOUT --------------------------------------------------
export const about = {
  headlineLead: "Architecting digital experiences with ",
  headlineAccent: "precision",
  intro:
    "I am a software designer and engineer based in San Francisco, specialized in building high-performance web applications that bridge the gap between technical complexity and intuitive user experiences.",
  body: 'With over a decade of experience in the industry, I\'ve had the privilege of working with everything from early-stage startups to Fortune 500 companies. My approach is rooted in the philosophy of "structural honesty"—where code quality and design clarity are treated as one inseparable entity.',
  currentStatus:
    "Senior Software Architect at Global Tech Systems. Focusing on distributed systems and reactive UI patterns.",
};

export type Journey = {
  period: string;
  role: string;
  description: string;
};

export const journey: Journey[] = [
  {
    period: "2021 — PRESENT",
    role: "Senior Software Architect",
    description:
      "Leading the core platform team at Global Tech Systems, overseeing the migration of legacy microservices to a unified GraphQL mesh architecture.",
  },
  {
    period: "2018 — 2021",
    role: "Full Stack Engineer",
    description:
      "Architected the design system and component library for a Series B fintech startup, reducing frontend development time by 40%.",
  },
  {
    period: "2015 — 2018",
    role: "UI Designer & Developer",
    description:
      "Started as a freelancer crafting bespoke digital experiences for creative agencies, focusing on accessibility and motion design.",
  },
];

export type SkillGroup = {
  icon: string; // Material Symbol name
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    icon: "code",
    category: "Languages",
    items: ["TypeScript", "Go", "Python", "Rust"],
  },
  {
    icon: "layers",
    category: "Frameworks",
    items: ["React / Next.js", "GraphQL", "Node.js", "TailwindCSS"],
  },
  {
    icon: "build",
    category: "Tools",
    items: ["Git / GitHub", "Docker", "Vim / VSCode", "Figma"],
  },
  {
    icon: "cloud",
    category: "Cloud/DevOps",
    items: ["AWS / GCP", "Kubernetes", "CI/CD (Actions)", "Terraform"],
  },
];

export const softSkills = [
  "Technical Leadership",
  "Cross-functional Communication",
  "Mentorship & Teaching",
  "Strategic Planning",
];

export const interests = [
  "Generative Art",
  "Open Source",
  "Photography",
  "Climbing",
  "Industrial Design",
];

// ---- CONTACT ------------------------------------------------
export const contact = {
  headline: "Let's Work Together",
  intro:
    "I'm currently available for new opportunities and collaborations. Whether you have a specific project in mind or just want to say hi, my inbox is always open.",
};

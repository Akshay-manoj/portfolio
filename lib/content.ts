// =============================================================
//  SITE CONTENT — this is the only file you need to edit.
//
//  Every piece of text, every link, and every list shown on the
//  site lives here. Update the values below and the pages update
//  automatically. No need to touch any component code.
//
//  Tips:
//   • Leave a field as an empty string ("") and that piece simply
//     won't render (e.g. an empty social link is hidden).
//   • Empty a list ([]) and its whole section disappears.
// =============================================================

// ---- IDENTITY ----------------------------------------------
export const site = {
  name: "Akshay Manoj", // used in the browser tab title + footer copyright
  role: "Full-Stack Developer", // shown in the page title
  description:
    "Portfolio of a full-stack developer building fast, reliable web applications.",
  url: "#", // your real domain (for SEO/links)
  location: "Thalassery, Kerala", // e.g. "Bangalore, India" — leave "" to hide
  availableForHire: true, // shows the "available" dot in the navbar + hero badge
  resumeUrl: "#", // e.g. "/resume.pdf" (put the file in /public) — "" hides Resume btn
  portrait: "/images/IMG_20240728_030159.jpeg", // hero photo (in /public) — "" shows a placeholder
  // Small stat chip floating over the hero portrait. Leave blank to hide.
  heroStat: { value: "6+ Years", label: "Experience" }, // e.g. { value: "5+ Years", label: "Experience" }
};

// ---- SOCIAL / CONTACT LINKS --------------------------------
// Leave any field "" to hide that link everywhere it appears.
export const social = {
  email: "akshaymsa23@gmail.com",
  github: "https://github.com/Akshay-manoj",
  linkedin: "",
  twitter: "",
};

// ---- NAVIGATION --------------------------------------------
export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// ---- HOME PAGE ---------------------------------------------
export const home = {
  badge: "Available for hire", // the pill next to the hero heading
  headlineLead: "Building digital experiences with ",
  headlineAccent: "precision", // the highlighted (blue) word
  intro:
    "I'm Akshay Manoj — a full-stack developer with 6+ years of experience building fast, reliable web applications, end to end, from well-architected APIs and databases to clean, responsive interfaces.",
  primaryCta: { label: "View Projects", href: "/projects" },
  secondaryCta: { label: "Contact Me", href: "/contact" },
  featured: {
    eyebrow: "Case Studies",
    title: "Featured Work",
    viewAll: "View All",
    // Shown while `projects` is empty:
    emptyEyebrow: "Currently",
    emptyTitle: "Work in progress",
    emptyHeading: "Fresh work is on the way",
    emptyBody:
      "I'm currently crafting projects worth showcasing here. In the meantime, you can explore my code on GitHub.",
    emptyCta: "Visit GitHub",
  },
  cta: {
    title: "Ready to build something together?",
    body:
      "I'm open to new projects and collaborations. Let's talk about how I can help bring your idea to life.",
    primary: "Start a Conversation",
    secondary: "Copy Email Address",
  },
};

// ---- TECH MARQUEE (home) -----------------------------------
// The scrolling strip of technologies. Empty the list to hide it.
export const marquee = {
  title: "Tools I work with",
  items: [
    "PHP",
    "Laravel",
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "VueJS",
    "NuxtJS",
    "MySQL",
    "PostgreSQL",
    
  ],
};

// ---- PROJECTS ----------------------------------------------
export type Category = "frontend" | "backend" | "fullstack";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: Category;
  live?: string;
  github?: string;
  image?: string; // optional /public/projects/<file>; falls back to a gradient
  featured?: boolean; // featured ones appear on the Home page (max 3)
  icon?: string; // optional Material Symbol shown on the Home card
};

// Add your projects here. While this list is empty, the Home and
// Projects pages show a tasteful "coming soon" state.
//
// Template — copy this object and fill it in:
//   {
//     title: "My Project",
//     description: "One or two sentences about what it does and the impact.",
//     tech: ["NEXT.JS", "POSTGRES"], // shown as pills (uppercase reads best)
//     category: "fullstack",          // "frontend" | "backend" | "fullstack"
//     live: "https://...",            // optional
//     github: "https://github.com/...", // optional
//     image: "/projects/shot.png",    // optional; falls back to a gradient
//     featured: true,                 // optional; show on Home
//     icon: "code",                   // optional Material Symbol
//   }
export const projects: Project[] = [];

// ---- PROJECTS PAGE -----------------------------------------
export const projectsPage = {
  title: "Crafted Solutions",
  intro:
    "A collection of things I've built. Explore the stack and the ideas behind each project.",
  searchPlaceholder: "Search tech stack...",
  filters: [
    { label: "All Projects", value: "all" as const },
    { label: "Frontend", value: "frontend" as const },
    { label: "Backend", value: "backend" as const },
    { label: "Full Stack", value: "fullstack" as const },
  ],
  empty: {
    title: "Projects are on the way",
    body:
      "I'm putting the finishing touches on a few builds worth sharing. Check back soon, or take a look at what I'm tinkering with on GitHub below.",
  },
  cta: {
    title: "Want to see more?",
    body:
      "I'm always working on new things. Check out my GitHub for experiments and open-source contributions.",
    button: "Visit GitHub",
  },
};

// ---- ABOUT PAGE --------------------------------------------
export const about = {
  portrait: "/images/IMG_20231105_085018_053.webp", // About-page photo — "" shows a placeholder
  headlineLead: "Architecting digital experiences with ",
  headlineAccent: "precision", // highlighted word
  intro:
    "I'm a full-stack developer based in Thalassery, Kerala, with 6+ years of experience building web applications that are fast, maintainable, and a pleasure to use.",
  body:
    "I work comfortably across the entire stack — modelling and optimizing databases, building robust APIs and backend services with PHP/Laravel and Node.js, and crafting responsive front-ends with React, Next.js, and Vue. I care about clean architecture, thoughtful system design, and shipping software that holds up in production.",
  currentStatusLabel: "CURRENT_STATUS",
  currentStatus: "", // e.g. "Open to new opportunities." — leave "" to hide
  expertiseTitle: "Technical Expertise",
  journeyTitle: "My Journey",
  skillsTitle: "Technical Skills",
  softSkillsTitle: "Soft Skills",
  interestsTitle: "Interests",
};

export type Expertise = {
  icon: string; // Material Symbol name (https://fonts.google.com/icons)
  label: string;
};

// High-level areas you specialise in (shown on the About page).
// Empty the list to hide the section.
export const expertise: Expertise[] = [
  { icon: "dns", label: "Backend Development" },
  { icon: "account_tree", label: "System Design" },
  { icon: "database", label: "Database Optimization" },
  { icon: "api", label: "API Development" },
  { icon: "cloud", label: "Cloud Infrastructure" },
  { icon: "all_inclusive", label: "DevOps" },
];

export type Journey = {
  period: string;
  role: string;
  description: string;
};

// Your work history. Empty = the "My Journey" section is hidden.
// Template:
//   { period: "2023 — Present", role: "Software Engineer", description: "What you did." }
export const journey: Journey[] = [];

export type SkillGroup = {
  icon: string; // Material Symbol name (https://fonts.google.com/icons)
  category: string;
  items: string[];
};

// Edit these to match your stack. Empty the list to hide the section.
export const skills: SkillGroup[] = [
  {
    icon: "code",
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "VueJS", "NuxtJS"],
  },
  {
    icon: "dns",
    category: "Backend",
    items: ["PHP", "Laravel", "Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    icon: "database",
    category: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
  {
    icon: "cloud",
    category: "Tools & DevOps",
    items: ["Git", "Docker", "CI/CD", "Vercel"],
  },
];

// Empty either list to hide that card.
export const softSkills: string[] = [
  "Problem Solving",
  "Team Collaboration",
  "Clear Communication",
  "Adaptability",
];

export const interests: string[] = [
  "Open Source",
  "Side Projects",
  "Reading",
];

// ---- CONTACT PAGE ------------------------------------------
export const contact = {
  headline: "Let's Work Together",
  intro:
    "I'm currently available for new opportunities and collaborations. Whether you have a project in mind or just want to say hi, my inbox is always open.",
  infoTitle: "Contact Information",
  socialTitle: "Social Connect",
  emailLabel: "Email",
  locationLabel: "Location",
  availabilityBadge: "Available for Freelance", // on the image card; "" hides it
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "Jane Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "jane@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project...",
    submit: "Send Message",
    sending: "Sending...",
    sent: "Message Sent!",
  },
};

// ---- FOOTER ------------------------------------------------
export const footer = {
  note: "Built with precision", // short line next to the copyright year
};

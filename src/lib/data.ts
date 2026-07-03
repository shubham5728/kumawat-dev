// Static profile content. Repository data is pulled live from the GitHub API
// (see lib/github.ts); this file holds the hand-authored narrative.

export const profile = {
  name: "Shubham Kumawat",
  username: "shubham5728",
  role: "Data Scientist & ML Engineer",
  tagline:
    "Building production-ready AI systems for Industrial IoT, Computer Vision & Real-time Analytics.",
  summary:
    "Data Scientist and ML engineer specializing in real-time streaming analytics, deep learning, and end-to-end model deployment — from Kafka/Spark pipelines to Dockerized inference services.",
  location: "Ahmedabad, Gujarat, India",
  github: "https://github.com/shubham5728",
  githubUser: "shubham5728",
  linkedin: "https://www.linkedin.com/in/shubham-kumawat-aa6a66291",
  email: "shubhamkumawat722@gmail.com",
  // Drop your photo at public/profile.jpg (square works best).
  photo: "/profile.jpg",
  // Optional: put a PDF at public/resume.pdf to enable the download button.
  resume: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "I'm currently pursuing my B.E. in Computer Science & Engineering (Data Science) at SAL College of Engineering, Ahmedabad — and alongside coursework I build real ML systems end to end: framing the problem, engineering the data pipeline, training and validating models, and shipping them as services people can actually use.",
    "Right now my focus is real-time industrial monitoring — streaming 50+ sensor signals through Kafka and Spark, running Transformer and autoencoder ensembles for anomaly detection, and serving predictions through FastAPI and Streamlit dashboards, all containerized with Docker. I care about honest evaluation too — reporting F1 and false-positive rates, not just accuracy.",
    "My bigger goal is to build a Data Science + AI company — one that sells business outcomes, not just algorithms. I'm working toward a studio that ships production AI across industrial monitoring, computer vision, NLP/LLMs and MLOps, turning messy real-world data into systems that measurably move a business. For now I'm sharpening those skills through real projects and I'm open to internships, freelance work, and collaborations that move me in that direction.",
  ],
};

// Core tech shown as chips in the hero — the tools recruiters scan for.
export const coreStack: string[] = [
  "Kafka",
  "Spark",
  "TensorFlow",
  "PyTorch",
  "FastAPI",
  "Docker",
  "OpenCV",
  "Scikit-Learn",
];

// Headline stats shown under the hero. Keep these honest and easy to defend.
export const stats: { value: string; label: string }[] = [
  { value: "12+", label: "Projects Shipped" },
  { value: "15+", label: "Technologies" },
  { value: "2+", label: "Years Building" },
  { value: "100%", label: "Open Source" },
];

// Grouped skill set — mirrors the categories on the GitHub profile.
export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "SQL", "TypeScript", "R"],
  },
  {
    label: "ML & Deep Learning",
    items: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-Learn",
      "MediaPipe",
      "OpenCV",
    ],
  },
  {
    label: "Data & Streaming",
    items: ["Apache Kafka", "Apache Spark", "Pandas", "NumPy", "TimescaleDB"],
  },
  {
    label: "Serving & Infra",
    items: ["FastAPI", "Streamlit", "Docker", "Docker Compose", "Vercel"],
  },
];

/*
 * Honest, project-based history — this reflects self-directed and academic
 * work, NOT paid employment. Keep it truthful; add real internships/roles
 * here only once they actually happen.
 */
export const experience: {
  period: string;
  title: string;
  org: string;
  description: string;
}[] = [
  {
    period: "2025 — Present",
    title: "AI / ML Engineering — Personal Projects",
    org: "Open Source · Self-directed",
    description:
      "Building real-time industrial-monitoring systems: Kafka + Spark streaming, Transformer/autoencoder anomaly-detection ensembles, and Dockerized FastAPI inference services.",
  },
  {
    period: "2024",
    title: "IBM Data Science Professional Certificate",
    org: "Coursera / IBM",
    description:
      "Completed the capstone — the SpaceX Falcon 9 landing-prediction project — covering API data collection, EDA, SQL, and classification modelling.",
  },
  {
    period: "2023",
    title: "Machine Learning Foundations",
    org: "Academic & self-study projects",
    description:
      "Started the ML journey with end-to-end supervised-learning projects (heart disease, house prices, rainfall) using Scikit-Learn, Pandas and TensorFlow/Keras.",
  },
];

export const education: {
  degree: string;
  org: string;
  period: string;
}[] = [
  {
    degree: "Bachelor of Engineering — CSE (Data Science)",
    org: "SAL College of Engineering",
    period: "2023 — 2027",
  },
];

export const achievements: string[] = [
  "IBM Data Science Professional Certificate",
  "GitHub Pull Shark badge",
  "10+ open-source ML & data-science repositories",
  "Built real-time streaming ML systems with Kafka & Spark",
];

// Project categories used for the filter tabs.
export type Category =
  | "Machine Learning"
  | "Deep Learning"
  | "Computer Vision"
  | "Developer Tools"
  | "Data Science";

/*
 * Manually-curated projects that are NOT in the public GitHub feed — e.g.
 * private repos that are deployed live. These lead clients straight to the
 * live URL. A project only renders if `liveUrl` is set (guards against
 * publishing a broken client-facing link).
 */
export const manualProjects: {
  name: string;
  headline: string;
  blurb: string;
  highlights: string[];
  categories: Category[];
  liveUrl: string;
  isPrivate: boolean;
  problem?: string;
  solution?: string;
}[] = [
  {
    name: "OmniSentient",
    headline: "The autonomous AI engineer that finds bugs and ships the fix",
    blurb:
      "A SaaS platform that plugs into your GitHub and acts like an autonomous AI engineer — it scans your code for bugs and security issues, then opens verified, sandbox-tested pull requests that fix them, with every change tracked in an audit trail and a human approving each merge.",
    problem:
      "Engineering teams ship fast, but security and code reviews are still manual — so bugs and vulnerabilities sit in production for days, and reviewers drown in false positives.",
    solution:
      "An AI agent that continuously watches your repositories, finds real issues, and delivers ready-to-merge fixes automatically — turning days of exposure into minutes, with humans always in control.",
    highlights: [
      "AI Agent",
      "Auto-Fix PRs",
      "GitHub App",
      "Gemini AI",
      "Policy-as-Code",
    ],
    categories: ["Developer Tools"],
    liveUrl: "https://omnisentient-bot.vercel.app",
    isPrivate: true,
  },
];

// Repos to hide from the live feed entirely (case-insensitive, by name).
export const excludedRepos: string[] = [
  "kumawat-dev",
  "Multi-Signal-Industrial-IoT-Guardian",
  "garage-connect",
  "Python_for_DATASCIENCE",
  "Titanic-Survival-Prediction",
];

// Repos to surface first and how to describe them (overrides sparse GitHub
// descriptions). Order here defines display order for flagship projects.
export const flagshipRepos: {
  name: string;
  headline: string;
  blurb: string;
  highlights: string[];
  categories: Category[];
  problem?: string;
  solution?: string;
}[] = [
  {
    name: "SWaT-AI-Guardian",
    headline: "Real-time anomaly detection for water-treatment infrastructure",
    blurb:
      "A real-time AI security dashboard that live-monitors every sensor in a water plant, raises an alarm and an incident the moment an attack or anomaly appears, tells you which part is misbehaving, lets the operator manage it, and honestly shows its own true accuracy as it runs.",
    problem:
      "In water-treatment plants, a cyber-attack or fault on the sensors can cause serious damage — and older rule-based systems can't catch new, unknown attacks.",
    solution:
      "An AI system that watches the plant 24/7 and raises an alert the instant anything abnormal happens.",
    highlights: [
      "Real-time detection",
      "Catches unknown attacks",
      "Kafka + Spark",
      "Autoencoder + Isolation Forest",
      "React + FastAPI",
    ],
    categories: ["Deep Learning", "Data Science"],
  },
  {
    name: "AI-Sign-Language-Translator",
    headline: "Bidirectional real-time sign-language translator",
    blurb:
      "Converts sign gestures to speech and back using MediaPipe Holistic landmarks and an LSTM network — 170+ classes, ~35ms recognition latency on a standard webcam.",
    highlights: ["MediaPipe", "LSTM", "OpenCV", "Streamlit"],
    categories: ["Computer Vision", "Deep Learning"],
  },
  {
    name: "SpaceX_Falcon9_Landing_Success",
    headline: "Predicting Falcon 9 first-stage landing success",
    blurb:
      "End-to-end data-science project: SpaceX API collection, EDA, and classification models predicting reusable-booster landing outcomes.",
    highlights: ["Scikit-Learn", "Pandas", "EDA", "Classification"],
    categories: ["Data Science", "Machine Learning"],
  },
];

// Keyword → category inference for non-flagship repos.
export const categoryKeywords: { category: Category; match: string[] }[] = [
  { category: "Computer Vision", match: ["vision", "image", "sign", "opencv", "detect"] },
  { category: "Deep Learning", match: ["deep", "neural", "cnn", "lstm", "heart"] },
  { category: "Data Science", match: ["data", "analysis", "eda", "spark", "kafka"] },
  { category: "Machine Learning", match: ["predict", "classifier", "price", "ml", "rainfall", "regression"] },
];

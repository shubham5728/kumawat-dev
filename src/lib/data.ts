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
    "I'm a data scientist and machine-learning engineer focused on the full lifecycle of an ML system: framing the problem, engineering the data pipeline, training and validating models, and shipping them as services people can actually use.",
    "My recent work centres on real-time industrial monitoring — streaming 50+ sensor signals through Kafka and Spark, running Transformer and autoencoder ensembles for anomaly detection, and serving predictions through FastAPI and Streamlit dashboards, all containerized with Docker.",
    "I care about honest evaluation (reporting F1 and false-positive rates, not just accuracy), clean project structure, and documentation that lets someone else run the system.",
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
  "12+ open-source ML & data-science repositories",
  "Built real-time streaming ML systems with Kafka & Spark",
];

// Project categories used for the filter tabs.
export type Category =
  | "Machine Learning"
  | "Deep Learning"
  | "Computer Vision"
  | "Data Science";

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
}[] = [
  {
    name: "SWaT-AI-Guardian",
    headline: "Real-time anomaly detection for water-treatment infrastructure",
    blurb:
      "Streaming Big-Data platform: Kafka ingestion, Spark Structured Streaming, a TensorFlow autoencoder + Isolation Forest ensemble, served via FastAPI with a Streamlit dashboard.",
    highlights: ["Kafka + Spark", "TensorFlow", "FastAPI", "Docker Compose"],
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

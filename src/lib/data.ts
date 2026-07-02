// Static profile content. Repository data is pulled live from the GitHub API
// (see lib/github.ts); this file holds the hand-authored narrative.

export const profile = {
  name: "Shubham Kumawat",
  username: "shubham5728",
  role: "Data Scientist & ML Engineer",
  tagline: "I build ML systems that go from raw signal to real-time decision.",
  summary:
    "Data Scientist and ML engineer specializing in real-time streaming analytics, deep learning, and end-to-end model deployment — from Kafka/Spark pipelines to Dockerized inference services.",
  location: "India",
  github: "https://github.com/shubham5728",
  githubUser: "shubham5728",
  linkedin: "https://www.linkedin.com/in/shubham-kumawat-aa6a66291",
  email: "shubhamkumawat722@gmail.com",
};

export const about = {
  paragraphs: [
    "I'm a data scientist and machine-learning engineer focused on the full lifecycle of an ML system: framing the problem, engineering the data pipeline, training and validating models, and shipping them as services people can actually use.",
    "My recent work centres on real-time industrial monitoring — streaming 50+ sensor signals through Kafka and Spark, running Transformer and autoencoder ensembles for anomaly detection, and serving predictions through FastAPI and Streamlit dashboards, all containerized with Docker.",
    "I care about honest evaluation (reporting F1 and false-positive rates, not just accuracy), clean project structure, and documentation that lets someone else run the system.",
  ],
};

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
}[] = [
  {
    name: "SWaT-AI-Guardian",
    headline: "Real-time anomaly detection for water-treatment infrastructure",
    blurb:
      "Streaming Big-Data platform: Kafka ingestion, Spark Structured Streaming, a TensorFlow autoencoder + Isolation Forest ensemble, served via FastAPI with a Streamlit dashboard.",
    highlights: ["Kafka + Spark", "TensorFlow", "FastAPI", "Docker Compose"],
  },
  {
    name: "AI-Sign-Language-Translator",
    headline: "Bidirectional real-time sign-language translator",
    blurb:
      "Converts sign gestures to speech and back using MediaPipe Holistic landmarks and an LSTM network — 170+ classes, ~35ms recognition latency on a standard webcam.",
    highlights: ["MediaPipe", "LSTM", "OpenCV", "Streamlit"],
  },
  {
    name: "SpaceX_Falcon9_Landing_Success",
    headline: "Predicting Falcon 9 first-stage landing success",
    blurb:
      "End-to-end data-science project: SpaceX API collection, EDA, and classification models predicting reusable-booster landing outcomes.",
    highlights: ["Scikit-Learn", "Pandas", "EDA", "Classification"],
  },
];

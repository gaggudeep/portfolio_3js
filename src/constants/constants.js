import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  acko,
  tiket,
  verve,
  gemini,
  go,
  java,
  spring,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
]

const technologies = [
  {
    name: "GO",
    icon: go
  },
  {
    name: "JAVA",
    icon: java
  },
  {
    name: "Spring boot",
    icon: spring
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
]

const experiences = [
  {
    title: "Senior Engineer III",
    company_name: "Verve Group",
    icon: verve,
    iconBg: "#1a1a1a",
    date: "Oct 2024 - Present",
    points: [
      "Built the Verve Identity Graph (VIG), a BigQuery-backed identity resolution pipeline that consolidates device IDs, HEM, and Experian signals from Sessionizer and partner sources — exported to GCS and used across the audience activation and ad serving path.",
      "Used Spark to amplify DSP audience segments against the unified VIG graph, replacing per-vendor silo graphs and unlocking cross-device targeting for all onboarded programmatic partners.",
      "Added Gemini LLM to the taxonomy classification service and prototyped RAG for the Fusion Persona AI API; owned MLOps for the ATOM SDK — phased rollouts, Android config validation, and GCS sync on merge; proposed a BigQuery upsert strategy for ATOM feature vectors that cut flat-file sprawl.",
      "Onboarded programmatic DSP partners end-to-end: daily S3 ingestion, Kubernetes crons via ArgoCD, Taxonomy API sync to MySQL, and offline audience exports for RTB on the P+ stack.",
      "Shipped the GenAI-powered suggestions API for Fusion Labs — takes a fusionId and audience insights, hits an internal LLM, and sends back tailored audience recommendations; the first AI touchpoint in the product.",
      "Set up Prometheus observability across VAS, taxonomy, ScyllaDB, and VIG pipelines — latency, SLA breaches, data anomalies; moved alerts from PagerDuty to Slack and added AI-based KPI trend detection.",
      "Helped build an Agentic AI monitoring tool that reads production system state, generates alert summaries with debugging context, and routes them automatically — cuts time engineers spend triaging incidents.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Gemini",
    icon: gemini,
    iconBg: "#0B1426",
    date: "Jul 2024 - Oct 2024",
    points: [
      "Engineered a company-wide event streaming library using Apache Kafka in Java, which streamlined event distribution and ingestion across services.",
      "Developed and optimized gRPC APIs in Java, significantly improving inter-service communication efficiency and reliability.",
    ],
  },
  {
    title: "Software Engineer II",
    company_name: "Tiket",
    icon: tiket,
    iconBg: "#383E56",
    date: "Apr 2022 - Jul 2024",
    points: [
      "Spearheaded efforts to enhance the flights system caching mechanism, resulting in a projected increase in cache hits by 80%.",
      "Pioneered the design and development of automated exchange flow, enabling users to effortlessly swap their original bookings for new ones, resulting in a 20% reduction in customer support costs.",
      "Successfully integrated multiple third-party travel reservation systems, improving the company's ability to search, book, and issue flights, leading to a 10% boost in revenue.",
      "Implemented optimizations for API latencies, achieving reductions of up to 50% by eliminating redundant third-party API calls, implementing efficient caching techniques, and introducing concurrency mechanisms.",
      "Proactively resolved multiple bugs, resulting in an improved user experience and seamless interaction.",
      "Played a pivotal role in training and mentoring interns and new team members, ensuring clear understanding and proficiency in complex technological tasks.",
      "Took interviews skillfully selecting and onboarding highly skilled individuals to build a talented and capable workforce."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Acko",
    icon: acko,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Apr 2022",
    points: [
      "Developed health insurance APIs, streamlining the process of purchasing health insurance policies which resulted in 30% increase in company Gross Business Value (GBV) and a 9% boost in profits.",
      "Solutioned and implemented an automation framework, enhancing the efficiency of end-to-end product testing procedures.By automating repetitive tasks, this innovation led to a 10 % reduction in labor costs while ensuring quality.",
      "Successfully integrated BrowserStack with the existing JavaScript framework, introducing virtual device capabilities that eliminated the need for physical devices which resulted in a 4% decrease in company expenses, while maintaining optimal testing conditions for enhanced product quality."
    ],
  }
]

export { services, technologies, experiences }

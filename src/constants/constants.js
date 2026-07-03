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
      "Architected the Verve Identity Graph (VIG) — a BigQuery-backed central ID resolution pipeline consolidating device IDs, HEM, and Experian signals from Sessionizer and partner sources, with automated GCS export feeding the downstream amplification and serving path.",
      "Engineered Spark amplification to fan all DSP audience segments against the unified VIG graph, replacing fragmented per-vendor silo graphs and extending cross-device reach across every onboarded partner.",
      "Integrated Gemini LLM into the taxonomy classification service and prototyped RAG-based enrichment for the Fusion Persona AI API; built the ATOM SDK config infrastructure — generic phased rollouts across bundle IDs, automated Android config validation pipeline, and GCS sync on PR approval; designed BigQuery upsert strategy for ATOM extracted feature vectors, eliminating flat-file proliferation.",
      "Onboarded DSP partners end-to-end — daily S3 ingestion, Kubernetes cron orchestration via ArgoCD, Taxonomy API metadata sync to MySQL, and VAS offline audience exports on the P+ stack.",
      "Designed and built the backend suggestions API for Fusion Labs (audience exploration product) — accepts raw insights context and fusionId, calls an internal LLM service, and returns dynamic audience recommendations to partners and internal teams.",
      "Deployed a Prometheus-based observability layer across VAS, taxonomy, ScyllaDB, and VIG pipelines covering latency, SLA breaches, and data anomalies; migrated alert routing from PagerDuty to Slack and built AI-driven KPI trend anomaly detection.",
      "Contributed to an Agentic Monitoring tool — a configuration-driven AI agent that reasons over end-to-end production system state, auto-generates contextual alerts, and surfaces debugging guidance, reducing manual investigation overhead.",
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

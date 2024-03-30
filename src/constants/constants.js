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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
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
    title: "Software Engineer II",
    company_name: "Tiket",
    icon: tiket,
    iconBg: "#383E56",
    date: "May 2022 - Present",
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
    date: "Sep 2020 - May 2022",
    points: [
      "Developed health insurance APIs, streamlining the process of purchasing health insurance policies which resulted in 30% increase in company Gross Business Value (GBV) and a 9% boost in profits.",
      "Solutioned and implemented an automation framework, enhancing the efficiency of end-to-end product testing procedures.By automating repetitive tasks, this innovation led to a 10 % reduction in labor costs while ensuring quality.",
      "Successfully integrated BrowserStack with the existing JavaScript framework, introducing virtual device capabilities that eliminated the need for physical devices which resulted in a 4% decrease in company expenses, while maintaining optimal testing conditions for enhanced product quality."
    ],
  }
]

export { services, technologies, experiences }

import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tolulope Makinde",
  initials: "BJ",
  location: "Nigeria",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Software developer with hands-on experience in building scalable applications.",
  summary:
    "I’m a performance-driven software engineer with hands-on experience in building client-facing web and mobile applications.",
  avatarUrl:
    "https://media.licdn.com/dms/image/D4E03AQGmiFcJ8A0g_A/profile-displayphoto-shrink_800_800/0/1686814194941?e=1710979200&v=beta&t=YJ8vNbJ0jwmADIjX4v8Gm_TkKzm0hDkGJg2a1CoExKs",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "makinde1034@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Makinde1034",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tolulope-makinde-20a886108/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/Bryan_blac",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Federal University Of Technology, Akure",
      degree: "Bachelor Of Engineering",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "Inverse",
      link: "https://inverse.wtf",
      badges: ["Remote"],
      title: "Frontend Engineer",
      logo: ParabolLogo,
      start: "2022",
      end: "Present",
      description:
        "Inverse allows creators to easily launch digital collectibles, Implement components from design with attention to details, migrate component from client to server to improve load time. Technologies: Nextjs, React Native,TypeScript, GraphQL, Zustand, Design systems (shadecn/ui)",
    },
    {
      company: "Abacus",
      link: "https://trustabacus.app",
      badges: ["Remote"],
      title: "Frontend Engineer",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        "Design and develop user interface and resuable components, maintained and contributed to high quality React Native & Nextjs projects, implement & maintain features on the abacus app implemented performance improvement technics like code splitting and dynamic imports to improve app performance Technologies: React Native, Next, TypeScript, GraphQL, RTK-Query, Redux, Site Observability(sentry), Design systems",
    },
    {
      company: "Dotcircle Labs",
      link: "https://dotcirclelabs.com",
      badges: ["Remote"],
      title: "Lead Frontend Engineer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description:
        "API and smart contract integration,  Led the front-end team to build a deflationary, fully decentralized ownership yield farm/lending protocol where participants earn as an owner of the network. (animalfarm.app), worked on porche vehicle dealer as a service application. Technologies: Reactjs, Vuejs, TypeScript, Tailwind css, Porsche Design System",
    },
    {
      company: "Sterling Bank (Gomoney)",
      link: "https://gomoney.global/home/",
      badges: ["Remote"],
      title: "Frontend Engineer",
      logo: JojoMobileLogo,
      start: "2021",
      end: "2021",
      description:
        "Produce responsive cross-browser, and accessible web components from designs, Identified and implemented better user interactions across the product, Provided mentoring and guidance to colleagues.",
    },
    {
      company: "Pacavel",
      link: "https://www.pacavel.com",
      badges: [],
      title: "Software developer",
      logo: NSNLogo,
      start: "2019",
      end: "2021",
      description: "Developed Pacavel landing page and blogging platform, Optimized website to improve SEO ranking on search engines, built reusable Reactjs components to improve development time.",
    },
  ],
  skills: [
    "JavaScript","Golang",
    "TypeScript",
    "React/Next.js",
    "React native",
    "Vue.js",
    
    "GraphQL",
  ],
  projects: [
    {
      title: "Abacus",
      techStack: [
        "React native",
        "TypeScript",
        "Next.js",
        "RTK-query",
        "GraphQL",
        
      ],
      description: "Abacus helps users better track, spend & manage money by unifying all thier accounts in a single app.",
      logo: ConsultlyLogo,
      link: {
        label: "trustabacus.app",
        href: "https://trustabacus.com/",
      },
    },
    {
      title: "Inverse",
      techStack: ["TypeScript", "Next.js", "web3","Zustand","Redux", "Apollo GraphQL"],
      description:
        "Inverse is the easiest way to launch digital collectibles.",
      logo: MonitoLogo,
      link: {
        label: "inverse",
        href: "https://inverse.wtf/",
      },
    },
   
    {
      title: "Animal farm",
      techStack: ["Nextjs", "Ethersjs","scss", "smart contracts"],
      description:
        "Decentralized yield aggregating platform.",
      logo: AmbitLogo,
      link:{
        label : "Animal farm",
        href:"https://animalfarm.app/"
      }
    },
    {
      title: "Surecheck",
      techStack: ["Golang", "Vuejs"],
      description:
        "Surecheck helps verify if emails exist using thier domain.",
      logo: BimLogo,
      link:{
        label : "Surecheck.netlify.app",
        href:"https://surecheck.netlify.app/"
      }
    },
    {
      title: "Diyo",
      techStack: ["Reactjs","Typescript","Stripe.js"],
      description:
        "Diyo helps launch impactful outdoor billboard campaigns anywhere in the world in less than 60 seconds",
      logo: CDGOLogo,
      link:{
        label : "diyo.ca",
        href:"https://diyo.ca/"
      }
    },
    
  ],
} as const;

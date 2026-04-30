import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/3d_portfolio/assets/projects-screenshots";


const ProjectsLinks = ({ live }: { live: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "sara-3d-surprise",
    category: "Interactive 3D Experience",
    title: "Sara — Ultimate 3D Surprise",
    src: "/3d_portfolio/assets/projects-screenshots/sara-3d/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.gsap,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    live: "https://naughty-tomato-tunbrtdbp5.edgeone.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Interactive 3D Particle Animation Engine
          </TypographyP>
          <TypographyP className="font-mono ">
            Developed a high-performance web application using HTML5 Canvas and Vanilla JavaScript. 
            Implemented complex mathematical algorithms — trigonometry and bezier curves — to build a 
            dynamic particle system that seamlessly morphs into 3D shapes and text. Features include 
            real-time mouse interaction, particle physics, and responsive design.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Particle Physics Engine</TypographyH3>
          <p className="font-mono mb-2">
            Engineered a custom particle system with thousands of independently animated particles 
            that respond to mouse proximity, creating immersive visual effects. Each particle is 
            governed by physics-based motion equations for natural, fluid behavior.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/sara-3d/landing.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">3D Shape Morphing</TypographyH3>
          <p className="font-mono mb-2">
            Implemented mathematical transformations using trigonometric functions and bezier curves 
            to morph particle clouds into recognizable 3D shapes and text in real-time, creating a 
            stunning visual storytelling experience.
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Real-time mouse interaction with proximity-based particle displacement</li>
            <li>Complex mathematical algorithms for smooth 3D morphing transitions</li>
            <li>Optimized Canvas rendering achieving 60fps on standard hardware</li>
            <li>Responsive design adapting across all screen sizes and devices</li>
            <li>Creative frontend engineering demonstrating strong logic optimization</li>
          </ul>
        </div>
      );
    },
  },

  {
    id: "valentine-interactive",
    category: "Gamified Web Interface",
    title: "Valentine Interactive Experience",
    src: "/3d_portfolio/assets/projects-screenshots/valentine/landing.png",
    screenshots: ["landing.png"],
    live: "https://shaker17s.github.io/Valenteinn/",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content(): React.JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Built a highly engaging, responsive frontend interface featuring advanced DOM manipulation 
            and custom event handling. Engineered a proximity-based &quot;runaway&quot; button logic utilizing 
            coordinate geometry to calculate mouse distance in real-time.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <p className="font-mono mb-2 mt-4">
            A visually captivating gamified web experience that combines Glassmorphism UI design 
            with creative JavaScript engineering — demonstrating the ability to translate complex 
            mathematical logic into delightful user interactions.
          </p>
          <SlideShow images={[`${BASE_PATH}/valentine/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Glassmorphism UI</TypographyH3>
          <p className="font-mono mb-2">
            Integrated Glassmorphism UI patterns with frosted-glass card effects, smooth CSS keyframe 
            animations, and a custom Canvas-based confetti engine to deliver a seamless, premium 
            user experience.
          </p>
          <TypographyH3 className="my-4 mt-8">Interactive Button Logic</TypographyH3>
          <p className="font-mono mb-2">
            Engineered a proximity-based &quot;runaway&quot; button that uses real-time coordinate geometry 
            calculations to evade mouse cursor, creating an engaging and humorous user experience 
            that showcases advanced DOM manipulation skills.
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Advanced DOM manipulation and custom event handling system</li>
            <li>Proximity-based coordinate geometry for real-time mouse distance calculation</li>
            <li>Custom Canvas-based confetti particle engine</li>
            <li>CSS keyframe animations with smooth easing functions</li>
            <li>Fully responsive design with mobile-first approach</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "digital-bookstore",
    category: "E-Commerce Platform",
    title: "Digital Bookstore Platform",
    src: "/3d_portfolio/assets/projects-screenshots/bookstore/landing.png",
    screenshots: ["landing.png"],
    live: "https://snai.pythonanywhere.com/category/",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Architected a full-featured e-commerce system for 500+ book titles with inventory management, 
            order processing, and an admin control panel. Built with Django and PostgreSQL for 
            a production-grade backend with secure data handling.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <p className="font-mono mb-2 mt-8">
            A comprehensive digital bookstore with category-based navigation, advanced search functionality, 
            and a polished Arabic-first UI that demonstrates full-stack development capabilities.
          </p>
          <SlideShow images={[`${BASE_PATH}/bookstore/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Full-Text Search Engine</TypographyH3>
          <p className="font-mono mb-2">
            Built dynamic full-text search indexed across title, author, and genre — returning results 
            in under 100ms across the full catalog. Optimized database queries for lightning-fast 
            response times even under heavy load.
          </p>
          <TypographyH3 className="my-4 mt-8">Payment Integration</TypographyH3>
          <p className="font-mono mb-2">
            Integrated a secure payment gateway enabling end-to-end checkout flow. Reduced cart 
            abandonment friction with an optimized 3-step UX that guides users smoothly from 
            browsing to purchase confirmation.
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Django backend with PostgreSQL — sub-200ms query response times</li>
            <li>Full-text search indexed across title, author, and genre fields</li>
            <li>Category-based filtering with dynamic sidebar navigation</li>
            <li>Secure payment gateway with 3-step optimized checkout flow</li>
            <li>Admin control panel for inventory management and order processing</li>
            <li>98% mobile compatibility across tested devices with responsive design</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;

export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  date?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio website built with Astro and Tailwind CSS, featuring responsive design and smooth animations.",
    image: "/images/6835450453418620230.jpg",
    tags: ["Astro", "Tailwind CSS", "Web Development", "Portfolio"],
    link: "/projects/project-1",
    date: "2024-08-31"
  },
  {
    title: "Example Project",
    description: "A full-stack web application built with React and Node.js, featuring real-time data synchronization and responsive design.",
    image: "/images/6835450453418620230.jpg",
    tags: [],
    link: "/projects/project-2",
    date: ""
  },
  {
    title: "Example Project",
    description: "Cross-platform mobile application for fitness tracking and workout planning, built with React Native and Firebase.",
    image: "/images/6835450453418620230.jpg",
    tags: [],
    link: "/projects/project-3",
    date: ""
  }
];

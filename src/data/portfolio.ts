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
    title: "SCC NRA Tradeshow Application",
    description: "Custom application built with TypeScript, Tailwind CSS, and React. This application was built for the SCC NRA Tradeshow to allow attendees to easily view the booth layout and feature details.",
    image: "/images/structuralconcepts.com_nra_.png",
    tags: ["TypeScript", "Tailwind CSS", "React"],
    project: "/projects/sccnra",
    link: "https://structuralconcepts.com/nra/",
    date: "2025-06-10"
  },
  {
    title: "MI Creative Potential",
    description: "Lead Developer; custom Craft CMS website built with Tailwind CSS, jQuery, and PHP (Twig). Custom configuration of CKEditor, custom tools and fields with NEOS, custom templates, custom fields.",
    image: "/images/micreativepotential.org_.png",
    tags: ["Craft CMS", "Tailwind CSS", "CustomDevelopment"],
    link: "https://micreativepotential.org",
    project: "/projects/micreativepotential",
    date: "2025-03-05"
  },
  {
    title: "mPowerLights",
    description: "Lead Developer; custom WordPress injection to existing child theme. Updating branding, adding new pages, implementing new tools and features as requested. Consolidation of user dashboard and backend functionality.",
    image: "/images/mpowerlights.com_.png",
    tags: ["WordPress", "Tailwind CSS", "Custom Development"],
    project: "/projects/mpowerlights",
    link: "https://mpowerlights.com",
    date: "2024-05-11"
  },
  {
    title: "Packaging Compliance Labs",
    description: "Lead Developer; custom WordPress website built with Tailwind CSS, jQuery, and PHP. This project called for custom calculator implementation, gated content for lead generation, and more.",
    image: "/images/pkgcompliance.com_.png",
    tags: ["WordPress", "Tailwind CSS", "Custom Development"],
    link: "https://pkgcompliance.com",
    project: "/projects/pkgcompliance",
    date: "2024-08-01"
  },
  {
    title: "MI Performance Assessment Cadre",
    description: "Lead Developer; Custom Craft CMS website built with Tailwind CSS, jQuery, and PHP(Twig). This project called for a custom assessment tools catalog featuring an interactive filter system.",
    image: "/images/mipac.net_.png",
    tags: ["Craft CMS", "Tailwind CSS", "Custom Development"],
    link: "https://mipac.net",
    project: "/projects/mipac",
    date: "2025-08-27"
  }
];

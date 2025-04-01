import {
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiRuby,
    SiRubyonrails,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "RD Station Marketing",
        description:
            "Largest Marketing Platform in LATAM with over 60.000 active users.",
        technologies: [SiJavascript, SiReact, SiRuby, SiRubyonrails],
        techNames: ["JavaScript", "React", "Ruby", "Ruby on Rails"],
        techLinks: ["https://www.javascript.com/", "https://reactjs.org/", "https://www.ruby-lang.org/en/", "https://rubyonrails.org/"],
        github: "https://github.com/ResultadosDigitais",
        demo: "https://www.rdstation.com/produtos/marketing/",
        image: "/projects/rdmarketing.png",
        available: true,
    },
    {
        id: 1,
        name: "Tangram Design System",
        description:
            "Open source Design System with over 64 components",
        technologies: [SiJavascript, SiReact, SiCss3, SiHtml5],
        techNames: ["JavaScript", "React", "CSS3", "HTML5"],
        techLinks: ["https://www.javascript.com/", "https://reactjs.org/", "https://www.w3schools.com/css/css_website_layout.asp", "https://www.w3schools.com/html/default.asp"],
        github: "https://github.com/ResultadosDigitais/tangram/",
        demo: "https://tangram.rdstation.com.br/",
        image: "/projects/tangram.png",
        available: true,
    },
    {
        id: 2,
        name: "RD Station Conversas",
        description:
            "Single platform to manage conversations in WhatsApp, Instagram DM, Messenger, Email and chat-bots",
        technologies: [SiJavascript, SiReact, SiCss3, SiHtml5],
        techNames: ["JavaScript", "React", "CSS3", "HTML5"],
        techLinks: ["https://www.javascript.com/", "https://reactjs.org/", "https://www.w3schools.com/css/css_website_layout.asp", "https://www.w3schools.com/html/default.asp"],
        github: "https://github.com/orgs/ResultadosDigitais/",
        demo: "https://www.rdstation.com/produtos/conversas/",
        image: "/projects/rdconversas.png",
        available: true,
    },
    {
        id: 3,
        name: "Website Talita Faraco Cantelli",
        description:
            "With LCP of 0.70s, a fast and responsive website to psychologist Talita F Cantelli",
        technologies: [SiTypescript, SiNextdotjs, SiReact, SiTailwindcss],
        techNames: ["TypeScript", "Next", "React", "Tailwind"],
        techLinks: ["https://www.typescriptlang.org/", "https://nextjs.org/", "https://reactjs.org", "https://tailwindcss.com/"],
        github: "https://github.com/sahdibernardi/talita-faraco-psicologa/",
        demo: "https://www.psitalitafc.com.br/",
        image: "/projects/talita.png",
        available: true,
    },
    {
        id: 4,
        name: "Truther",
        description:
            "Crypto App integrated to brazil's banking systems that allows to transform PIX into USDT and Bitcoin",
        technologies: [SiTypescript, SiReact, SiNodedotjs],
        techNames: ["Typescript", "React", "Node"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nodejs.org/"],
        github: "",
        demo: "https://truther.to/",
        image: "/projects/truther.png",
        available: true,
    },
    {
        id: 5,
        name: "BCX Corretora",
        description:
            "Crypto exchange banking system directed to long-term investments and trade",
        technologies: [SiTypescript, SiReact, SiNodedotjs, SiNestjs],
        techNames: ["Typescript", "React", "Node", "Nest"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nodejs.org/", "https://nestjs.com/"],
        github: "",
        demo: "https://www.bcxcorretora.com.br/",
        image: "/projects/bcx.png",
        available: true,
    },
    {
        id: 6,
        name: "Nectus",
        description:
            "Mental health App and NGO. Focused on integral heathcare of workers",
        technologies: [SiJavascript, SiReact, SiCss3, SiHtml5],
        techNames: ["JavaScript", "React", "CSS3", "HTML5"],
        techLinks: ["https://www.javascript.com/", "https://reactjs.org/", "https://www.w3schools.com/css/css_website_layout.asp", "https://www.w3schools.com/html/default.asp"],
        github: "https://github.com/sahdibernardi/nectus",
        demo: "https://nectus-app.vercel.app/",
        image: "/projects/nectus.png",
        available: true,
    },
    {
        id: 7,
        name: "DoDoor",
        description:
            "Rental App to rent comercial spaces by hour",
        technologies: [SiTypescript, SiReact, SiNodedotjs, SiNestjs],
        techNames: ["Typescript", "React", "Node", "Nest"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nodejs.org/", "https://nestjs.com/"],
        github: "https://github.com/sahdibernardi/dodoor-backend",
        demo: "https://dodoor.com.br/",
        image: "/projects/dodoor.png",
        available: true,
    },
];

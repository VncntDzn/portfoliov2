import WeCare from "../images/wecare.png";
import HMI from "../images/hmi.png";
const projects = [
    {
        id: "wecare-v1-2021",
        path: "https://wecare-vncntdzn.vercel.app/",
        isFeatured: true,
        title: "WeCare",
        image: WeCare,
        demo: "wecare.webm",
        description:
            "WeCare is an online health consultation platform that aims to provide \
            an easy access for the member and the doctor of an HMO without interaction physically. \
            WeCare was built during the pandemic to prevent the exposure of each members to Covid-19.",
        details: [
            {
                task: "To create a website that can help medical health workers and patients to have a medical virtual consultation.",
                solution:
                    "Design and develop an online health web based app that offer convenience and promote safety amid the pandemic.",
                tech_stack: [
                    "NextJS",
                    "Typescript",
                    "Firebase",
                    "Material UI",
                    "GetStream",
                ],
            },
        ],
    },

    {
        id: "hmi-v1-2020",
        path: "https://www.hmi.com.ph/",
        isFeatured: true,
        title: "Health Maintenance Inc.",
        image: HMI,
        demo: "hmi.webm",
        description:
            "HMI website is the new and modern website of Health Maintenance Inc. \
            An interactive website that can be used to search, clinics, hospitals, doctors and even specialization of doctors accredited by HMI. ",
        details: [
            {
                task: "To create an interactive website where members can browse accredited clinics, hospitals and doctors.",
                solution:
                    "Design and develop a full stack website that can be use by members to browse their accredited HMO partners and get up to date announcements.",
                tech_stack: [
                    "Vue",
                    "Javascript",
                    "Vuetify",
                    "ExpressJS",
                    "MySQL",
                ],
            },
        ],
    },
    /*
      {
        id: "portfolio-v2-2022",
        isFeatured: true,
        title: "Portfolio",
        image: Portfolio,
        demo: "portfoliov2.webm",
        description: "",
        details: [
            {
                task: "To create a portfolio showing my featured projects.",
                solution:
                    "Design and develop a static website that showcases my featured projects and skills",
                tech_stack: [
                    "NextJS",
                    "Typescript",
                    "Framer Motion",
                    "Material UI",
                    "Docker",
                ],
            },
        ],
    },
    {
        id: "creativ-v1-2022",
        isFeatured: false,
        title: "CreatiV",
        image: Creativ,
        demo: "creativ.webm",
        description: "",
        details: [
                {
                    task: "To create a portfolio showing my featured projects.",
                solution:
                    "Design and develop a static website that showcases my featured projects and skills",
                tech_stack: [
                    "NextJS",
                    "Typescript",
                    "Framer Motion",
                    "Material UI",
                    "Docker",
                ],
            },
        ],
    }, */
];
export default projects;

import { StaticImageData } from "next/image";

export interface DetailType {
    task: string;
    solution: string;
    tech_stack: string[];
}

export interface ProjectType {
    id: string;
    title: string;
    image: StaticImageData;
    demo: string;
    description: string;
    details: DetailType[];
}

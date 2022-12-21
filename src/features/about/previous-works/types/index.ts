export interface TaskTypes {
    projectType: string;
    role: string;
    responsibilities: string[];
    tech_stack: string[];
}

export interface ListOfWorksType {
    title: string;
    workDate: string;
    workType: string;
    position: string;
    companyLogo: string;
    description: string;
    tasks: TaskTypes[];
}

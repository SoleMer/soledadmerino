import { PostSection } from "./post-section";

export interface Post {
    id: number;
    title: string;
    resume: string;
    pdf: string;
    url: string;
    sections: PostSection[];
}
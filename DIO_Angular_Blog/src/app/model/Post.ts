import { Tag } from "./Tag";

export interface Post {
    id: number;
    img: string;
    postDate: string;
    title: string;
    headline: string;
    tags: Tag[];
    text: string;
}
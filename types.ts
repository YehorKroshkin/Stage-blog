type Category = "Code" | "Problem Solution" | "Teambuilding" | "Lesson" | "Fail";

export interface Post{
    id: number;
    photo?: string,
    name: string,
    category: Category,
    date: Date,
    text?: string


}
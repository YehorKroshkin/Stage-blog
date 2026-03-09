type Category = "Code" | "Problem Solution" | "Event" | "Lesson" | "Fail" | "Teambuilding";

export interface Post{
    id: number;
    photo?: string,
    name: string,
    category: Category,
    date: Date,
    text?: string


}
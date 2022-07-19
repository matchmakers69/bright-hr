export type CustomFile = {
    id?: string,
    type: "doc" | "pdf" | "csv" | "mov",         
    name: string,
    added: string,
}

export type Folder = {
    id?: string;
    type: "folder",     
    name: string,
    files: Documents,
    added: string,
}

export type SortType = "size" | "name" | "date";
export type Documents = (Folder | CustomFile)[]



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
    files: CustomFile[],
    added: string,
}

export type Documents = (Folder | CustomFile)[]



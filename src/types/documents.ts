export type File = {
    id?: string,
    type: "doc" | "pdf" | "csv" | "mov",         
    name: string,
    added: string,
}

export type Folder = {
    id?: string;
    type: "folder",     
    name: string,
    files: File[],
    added: string,
}



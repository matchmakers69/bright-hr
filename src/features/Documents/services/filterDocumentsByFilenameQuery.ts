import { File, Folder } from "types/documents"

export const filterByFilenameQuery = (documents: (Folder | File)[], searchQuery: string) => {
    const filteredDocuments: (Folder | File)[] = []

    if(!!searchQuery) {
        documents.forEach((document) => {
            if(document.type === "folder") {
                const filteredChildDocuments = document.files.filter((file) => file.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()));
                filteredDocuments.push(...filteredChildDocuments)
            }
            if(document.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())) {
                filteredDocuments.push(document)
               }
        });
        return filteredDocuments
    }
}
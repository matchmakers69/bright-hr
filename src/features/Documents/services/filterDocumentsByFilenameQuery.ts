export type CustomFile = {
  id?: string;
  type: "doc" | "pdf" | "csv" | "mov";
  name: string;
  added: string;
};

export type Folder = {
  id?: string;
  type: "folder";
  name: string;
  files: CustomFile[];
  added: string;
};


// export const filterByFilenameQuery = (documents: (Folder | CustomFile)[], searchQuery: string) => {
//     const filteredDocuments: (Folder | CustomFile)[] = []

//     if(!!searchQuery) {
//         documents.forEach((document) => {
//             if(document.type === "folder") {
//                 const filteredChildDocuments = document.files.filter((file) => file.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()));
//                 filteredDocuments.push(...filteredChildDocuments)
//             }
//             if(document.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())) {
//                 filteredDocuments.push(document)
//                }
//         });
//         return filteredDocuments
//     }
// }


export const filterByFilenameQuery = (
  documents: (Folder | CustomFile)[],
  searchQuery: string
): (Folder | CustomFile)[] => {
    if(!searchQuery) return []
  return documents.reduce<(Folder | CustomFile)[]>((acc, curr) => {
    const isFileFound = curr.name.toLowerCase().includes(searchQuery.toLowerCase());
    const files = 'files' in curr ? filterByFilenameQuery(curr.files, searchQuery) : [];

    if(isFileFound) {
        return [...acc, ...files, curr] // current is an element was found
    }
     return [...acc, ...files];
    // return [...acc, curr]; // classic sample of map - will return same documents array
  }, []);
}





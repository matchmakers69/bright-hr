  // const sortedDataByDate = documentsToSort?.sort((a, b) => {
    //     if(a.type === "folder" || b.type === "folder") return -1
    //     return new Date(b.added).getTime() - new Date(a.added).getTime()
    // });

import { Documents } from "types/documents";
import { SortType } from "../DocumentsList";

export const sortDocuments = (documents: Documents, sortType: SortType, asc: boolean): Documents => {
  if(sortType === "name") {
    const sorted = [...documents].sort((a, b) => a.name.localeCompare(b.name));
    const s = asc ? sorted : sorted.reverse();


    return s.map((item) => {
      return item.type === "folder" && item.files ? {...item, files: sortDocuments(item.files, "name", asc)} : item 
    })
  }

  if(sortType === "size") {
    const sorted = [...documents].sort((a, b) => {
      if(a.type === "folder" && b.type === "folder") {
        return a.files.length - b.files.length
      }
      return 0
    });
    
    return asc ? sorted : sorted.reverse()
  }

  if(sortType === "date") {
    const sorted = [...documents].sort((a, b) => {
      return new Date(a.added).getTime() - new Date(b.added).getTime()
    });
    
    return asc ? sorted : sorted.reverse()
  }

  return documents
}


// export const sortDocuments = <T = Documents>(documents: Documents, sortType: SortType, asc: boolean): T => {
//   if(sortType === "name") {
//     const sorted = [...documents].sort((a, b) => a.name.localeCompare(b.name));
//     const s = asc ? sorted : sorted.reverse();


//     return s.map((item) => {
//       return item.type === "folder" && item.files ? {...item, files: sortDocuments<CustomFile[]>(item.files, "name", asc)} : item 
//     })
//   }

//   if(sortType === "size") {
//     const sorted = [...documents].sort((a, b) => {
//       if(a.type === "folder" && b.type === "folder") {
//         return a.files.length - b.files.length
//       }
//       return 0
//     });
    
//     return asc ? sorted : sorted.reverse()
//   }

//   if(sortType === "date") {
//     const sorted = [...documents].sort((a, b) => {
//       return new Date(a.added).getTime() - new Date(b.added).getTime()
//     });
    
//     return asc ? sorted : sorted.reverse()
//   }

//   return documents
// }

// // ...responsiveFontSize({ xs: 19, sm: 19, md: 19, lg: 21, xl: 24 }),

    // export const sortDocuments = (documents: Documents, sortType: SortType, asc: boolean): Documents => {
    //     if(sortType === "name") {
    //       const sorted = [...documents].sort((a, b) => a.name.localeCompare(b.name));
          
    //       return asc ? sorted : sorted.reverse()
    //     }

    //     if(sortType === "size") {
    //       const sorted = [...documents].sort((a, b) => {
    //         if(a.type === "folder" && b.type === "folder") {
    //           return a.files.length - b.files.length
    //         }
    //         return 0
    //       });
          
    //       return asc ? sorted : sorted.reverse()
    //     }

    //     if(sortType === "date") {
    //       const sorted = [...documents].sort((a, b) => {
    //         return new Date(a.added).getTime() - new Date(b.added).getTime()
    //       });
          
    //       return asc ? sorted : sorted.reverse()
    //     }

    //     return documents
    // }
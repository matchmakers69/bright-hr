import documents from "json/documents.json"
import { CustomFile, Folder } from "types/documents"

export const fetchFakeDocuments = (): Promise<(Folder | CustomFile)[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(documents as (Folder | CustomFile)[])
        },500)
    })
}
import documents from "json/documents.json"
import { File, Folder } from "types/documents"

export const fetchFakeDocuments = (): Promise<(Folder | File)[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(documents as (Folder | File)[])
        },500)
    })
}
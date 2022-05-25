

import InputFilter from "components/ui/InputFilter"
import { ChangeEvent, useState } from "react"
import { File, Folder } from "types/documents"
import SingleFile from "../SingleFile"
import Folders from "../Folders"
import { filterByFilenameQuery } from "../services/filterDocumentsByFilenameQuery"

type DocumentsListProps = {
    documents: (Folder | File)[]
}

const DocumentsList = ({ documents }: DocumentsListProps) => {
    const[searchValue, setSearchValue] = useState("");
    const filteredDocs = filterByFilenameQuery(documents, searchValue);
    const documentsToSort = filteredDocs?.length ? filteredDocs : documents;

    const sortedDataByDate = documentsToSort?.sort((a, b) => {
        if(a.type === "folder" || b.type === "folder") return -1
        return new Date(a.added).getTime() - new Date(b.added).getTime()
    });

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.target.value)
    }

const defaultDocuments = !sortedDataByDate?.length ? documents : sortedDataByDate;

  return (
    <>
        <InputFilter onFilterChange={handleFilterChange} initialTerm={searchValue} placeholder="Serch filename eg Expenses" />
            {defaultDocuments.map((doc) => {
                if(doc.type !== "folder") {
                    return(
                        <div key={doc.added}>
                            <SingleFile doc={doc} />
                        </div>
                    )
                }
                return <Folders key={doc.id} files={doc.files} name={doc.name} />
        })}
    </>
  )
}

export default DocumentsList
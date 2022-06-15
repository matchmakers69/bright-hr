

import InputFilter from "components/ui/InputFilter"
import { ChangeEvent, useState } from "react"
import { CustomFile, Folder } from "types/documents"
import SingleFile from "../SingleFile"
import Folders from "../Folders"
import { filterByFilenameQuery } from "../services/filterDocumentsByFilenameQuery"
import { sortDocuments } from "../services/service"

type DocumentsListProps = {
    documents: (Folder | CustomFile)[]
}

export type SortType = "name" | "size" | "date"

const DocumentsList = ({ documents }: DocumentsListProps) => {
    const[searchValue, setSearchValue] = useState("");
    const[sortValue, setSortValue] = useState<SortType>("name");
    const[isAsc, setIsAsc] = useState(true);
    const filteredDocumentsByName = filterByFilenameQuery(documents, searchValue);
    
    const sortedDocuments = sortDocuments(filteredDocumentsByName, sortValue, isAsc)

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.target.value)
    }

    const isSortType = (value: string): value is SortType => ["name", "size", "date"].includes(value);
    const toggleSortAsc = () => {
        setIsAsc(!isAsc);
    }

    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        if (isSortType(e.target.value)) {
            setSortValue(e.target.value)
        }
    }


  return (
    <>
    <select onChange={handleSortChange}>
        <option value="name">Sort by name</option>
        <option value="size">Sort by size</option>
        <option value="date">Sort by date</option>
    </select>
    <button onClick={toggleSortAsc} type="button">Toggle ASC</button>
        <InputFilter onFilterChange={handleFilterChange} initialTerm={searchValue} placeholder="Serch filename eg Expenses" />
            {sortedDocuments.map((doc) => {
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

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { fetchFakeDocuments } from "services/api/fetchDocuments";
import { File, Folder } from "types/documents";
import DocumentsList from "./DocumentsList";

const Documents = () => {
  const[loading, setLoading] = useState(true)
  const[documents, setDocuments] = useState<(Folder | File)[] | null>(null);
  

  useEffect(() => {
    const fetchDocumentsFromFakeApi = async() => {
      const response = await fetchFakeDocuments();
      setDocuments(response as (Folder | File)[]);
      setLoading(false)
    }
    fetchDocumentsFromFakeApi()
  },[]);

 if(loading) return <div>Data is loading...</div>
 const documentsWithUniqueId = documents && documents.map((res) => {
  return {
    ...res,
    id: uuidv4(),
  }
});
  return (
    <div>
        {documentsWithUniqueId && (
          <DocumentsList documents={documentsWithUniqueId} />
        )}
    </div>
  )
}

export default Documents
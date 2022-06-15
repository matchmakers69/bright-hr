import documents  from "json/documents.json"
import { Documents } from "types/documents";
import { filterByFilenameQuery } from "../filterDocumentsByFilenameQuery";

it("filters by given query", async () => {

    const inputDocumemts = documents as Documents;
    const searchQuery = "Welcome";

    const outputDocuments = [
        {type: 'mov', name: 'Welcome to the company!', added: '2015-04-24'}
    ];

    const filteredArray = filterByFilenameQuery(inputDocumemts, searchQuery);
    expect(filteredArray).toEqual(outputDocuments)
});
 
  

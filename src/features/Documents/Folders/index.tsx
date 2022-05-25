import DocumentExtIcon from "components/ui/DocumentExtIcon"
import FolderButton from "components/ui/FolderButton"
import { useState } from "react"
import * as S from "./Folders.styled";
import { File } from "types/documents"
import { IconsMapper } from "../services/iconsMapper"
import SingleFile from "../SingleFile"

type FoldersProp = {
    files: File[] | undefined
    name: string;
}

const Folders = ({ files, name }: FoldersProp) => {
    const[isFolderOpened, setIsFolderOpened] = useState(false);
    const icon = IconsMapper["folder"]

    const toggleOpenCloseFolder = () => {
        setIsFolderOpened(!isFolderOpened);
    }
  return (
    <S.FolderWrapper>
      <S.FolderButtonWrapper>
        <FolderButton type="button" onClick={toggleOpenCloseFolder}>
          <DocumentExtIcon icon={icon} />
        </FolderButton>
        <S.FolderButtonText>{name}</S.FolderButtonText>
      </S.FolderButtonWrapper>
          {isFolderOpened && (
                <S.FilesListWrapper>
                {files?.map((file) => {
                        return(
                          <SingleFile key={file.added} doc={file} />
                        )
                    })}
                </S.FilesListWrapper>
            )}
    </S.FolderWrapper>
  )
}

export default Folders
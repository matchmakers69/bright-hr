import { File } from "types/documents";
import DocumentExtIcon from "components/ui/DocumentExtIcon";
import * as S from "./SingleFile.styled";
import { IconsMapper } from "../services/iconsMapper";

type SingleFileProps ={ 
  doc: File;
}

const SingleFile = ({doc}: SingleFileProps) => {
  const icon = IconsMapper[doc?.type]
  return (
      <S.FileWrapperItem>
            <DocumentExtIcon icon={icon} />
            <S.FileDetailsWrapper>
              <S.TextDetails>{doc.name}</S.TextDetails>
              <S.TextDetails>{doc.added}</S.TextDetails>
            </S.FileDetailsWrapper>
        </S.FileWrapperItem>
  )
}

export default SingleFile
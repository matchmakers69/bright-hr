import * as S from "./DocumentExtIcon.styled";

type DocumentExtIconProps = {
    icon: JSX.Element | string
}

const DocumentExtIcon = ({icon}: DocumentExtIconProps) => {
  return (
    <S.IconWrapper>{icon}</S.IconWrapper>
  )
}

export default DocumentExtIcon
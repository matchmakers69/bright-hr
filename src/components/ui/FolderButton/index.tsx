
import * as S from "./FolderButton.styled";

type ButtonType = "button" | "submit" | "reset";

type FolderButtonProps = {
    onClick: () => void,
    type: ButtonType,
    children: React.ReactNode
}
const FolderButton = ({ onClick, type, children }: FolderButtonProps) => {
  return (
    <S.FolderButton type={type} onClick={onClick}>
        {children}
    </S.FolderButton>
  )
}

export default FolderButton
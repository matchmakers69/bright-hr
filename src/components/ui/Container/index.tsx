
import * as S from "./Container.styled";

type ContainerProps = {
  hasPadding?: boolean;
  children: React.ReactNode
};

export type StyledProps = Pick<ContainerProps, "hasPadding">;

const Container = ({ children }: ContainerProps) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
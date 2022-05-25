import { ChangeEvent } from "react";
import * as S from "./InputFilter.styled";

type InputFilterProps = {
    initialTerm: string;
    onFilterChange: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
}

const InputFilter = ({initialTerm, onFilterChange, placeholder}: InputFilterProps) => {
  
  return (
    <S.InputWrapper>
        <S.Input placeholder={placeholder} type="text" value={initialTerm} onChange={onFilterChange} />
    </S.InputWrapper>
  )
}

export default InputFilter
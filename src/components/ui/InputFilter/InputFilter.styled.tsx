import styled from "styled-components";

export const InputWrapper = styled.div`
    max-width: 300px;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.white};
    border: 1px solid ${({ theme: { colors } }) => colors.grey};
    height: 40px;
    padding: 8px;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    color: ${({ theme: { colors } }) => colors.grey};
`;



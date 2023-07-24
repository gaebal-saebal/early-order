import styled from 'styled-components';

// 기본적인 input요소 속성을 상속받고, isClicked 속성 추가
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isClicked: boolean;
}

const SearchStyle = styled.input<InputProps>`
  width: 335px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme, isClicked }) =>
    isClicked ? theme.colors.WHITE : theme.colors.GRAY_F3};
`;

export default SearchStyle;

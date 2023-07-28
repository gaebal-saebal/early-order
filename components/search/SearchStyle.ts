import styled from 'styled-components';

// 기본적인 input요소 속성을 상속받고, isClicked 속성 추가
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isClicked: boolean;
}

const SearchStyle = styled.input`
  flex: 1;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: transparent;
`;

const InputContainer = styled.div<InputProps>`
  display: flex;
  align-items: center;
  position: relative;
  width: ${(props: InputProps) => (props.isClicked ? '294px' : '335px')};
  transition: 0.5s;
  height: 22px;
  border-radius: 10px;
  padding: 9px 16px;
  justify-content: space-between;
  background-color: ${({ theme, isClicked }) =>
    isClicked ? theme.colors.WHITE : theme.colors.GRAY_F3};
  border: 1px solid ${({ theme }) => theme.colors.BLACK_00};
`;

const DeleteButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
`;

export { SearchStyle, InputContainer, DeleteButton };

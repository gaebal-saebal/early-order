import { ButtonProps } from '@/types/interface';
import { ButtonContainer } from './ButtonStyle';

const Button = ({
  children,
  width,
  radius, // themes.borderRadius.(small,medium,large)
  bgcolor,
  color,
  onClick,
}: {
  children: React.ReactNode;
  width: ButtonProps['width'];
  radius?: ButtonProps['radius'];
  bgcolor?: ButtonProps['bgcolor'];
  color?: ButtonProps['color'];
  icon?: ButtonProps['icons'];
  onClick?: ButtonProps['onClick'];
}) => {
  return (
    <ButtonContainer
      width={width}
      radius={radius}
      bgcolor={bgcolor}
      onClick={onClick}
      color={color}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;

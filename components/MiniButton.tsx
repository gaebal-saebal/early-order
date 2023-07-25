import { ButtonProps } from '@/types/interface';
import { MiniBtnContainer } from './MiniButtonStyle';

export const MiniButton = ({
  children,
  width,
  fontSize,
  icons,
  color,
  onClick,
}: {
  children: React.ReactNode;
  width?: ButtonProps['width'];
  fontSize?: ButtonProps['fontSize'];
  icons?: ButtonProps['icons'];
  color?: ButtonProps['color'];
  onClick?: ButtonProps['onClick'];
}) => {
  return (
    <MiniBtnContainer
      fontSize={fontSize}
      icons={icons}
      onClick={onClick}
      width={width}
      color={color}
    >
      {children}
    </MiniBtnContainer>
  );
};

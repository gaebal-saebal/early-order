import { ButtonProps } from "@/types/interface";

export const MiniButton = ({
  children,
  radius,
  fontSize,
  icon,
  onClick,
}: {
  children: React.ReactNode;
  radius: ButtonProps;
  fontSize: ButtonProps;
  icon?: ButtonProps;
  onClick?: ButtonProps["onClick"];
}) => {
  return (
    <MiniButton
      radius={radius}
      fontSize={fontSize}
      icon={icon}
      onClick={onClick}
    >
      {children}
    </MiniButton>
  );
};

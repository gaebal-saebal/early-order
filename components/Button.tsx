import { ButtonProps } from "@/types/interface";
import { ButtonContainer } from "./ButtonStyle";

const Button = ({
  children,
  width,
  radius, // themes.borderRadius.(small,medium,large)
  bgColor,
  onClick,
}: {
  children: React.ReactNode;
  // width: number;
  // radius?:string;
  // bgColor?:string;
  width: ButtonProps["width"];
  radius?: ButtonProps["radius"];
  bgColor?: ButtonProps["bgColor"];
  icon?: ButtonProps["icons"];
  onClick: ButtonProps["onClick"];
}) => {
  // const { width } = props;
  return (
    <ButtonContainer
      width={width}
      radius={radius}
      bgColor={bgColor}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};

Button.deafultProps = {
  width: 42,
  radius: "50",
  bgColor: "black",
};

export default Button;

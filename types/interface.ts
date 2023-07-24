export interface ButtonProps {
  icons?: boolean;
  width?: number;
  radius?: string;
  bgColor?: string;
  color?: string;
  edit?: boolean;
  fontSize?: number;
  onClick?: (name: string) => void;
}
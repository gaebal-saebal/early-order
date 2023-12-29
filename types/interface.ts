export interface ButtonProps {
  icons?: boolean;
  width?: number;
  radius?: string;
  bgcolor?: string;
  color?: string;
  edit?: boolean;
  fontSize?: number;
  onClick?: (name?: any) => void;
}

export interface ShopListInfoTypes {
  name?: string;
  imgURL: string;
  address?: string;
  dayOff?: string;
  closeAt?: string;
  openAt?: string;
  _id?: any;
}

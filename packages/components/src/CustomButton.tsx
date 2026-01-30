import type { FC } from 'react';
import { Button, ButtonProps } from 'antd';

export interface CustomButtonProps extends ButtonProps {
  label: string;
}

export const CustomButton: FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <Button {...props}>
      {label}
    </Button>
  );
};

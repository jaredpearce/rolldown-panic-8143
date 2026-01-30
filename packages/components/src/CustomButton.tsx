import React from 'react';
import { Button, ButtonProps } from 'antd';

export interface CustomButtonProps extends ButtonProps {
  label: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <Button {...props}>
      {label}
    </Button>
  );
};

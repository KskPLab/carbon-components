// src/components/Button.tsx
import React, { ReactNode } from "react";
import { Button as AntdButton, Flex } from "antd";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type: "primary" | "default" | "dashed" | "text" | "link";
  size?: "small" | "middle" | "large";
};

const Button: React.FC<ButtonProps> = ({ label, onClick, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AntdButton onClick={onClick} {...props}>
        {label}
      </AntdButton>
    </div>
  );
};

export default Button;

import React from 'react';

type ButtonProps = {
    label: string;
    onClick?: () => void;
    type: "primary" | "default" | "dashed" | "text" | "link";
    size?: "small" | "middle" | "large";
};
declare const Button: React.FC<ButtonProps>;

interface CardProps {
    title: string;
    content: string;
    footer?: React.ReactNode;
}
declare const Card: React.FC<CardProps>;

export { Button, Card };

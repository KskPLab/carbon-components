import React from "react";

interface CardProps {
  title: string;
  content: string;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, footer }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "16px",
          width: "300px",
        }}
      >
        <h2 style={{ margin: "0 0 16px 0" }}>{title}</h2>
        <p style={{ margin: "0 0 16px 0" }}>{content}</p>
        {footer && <div style={{ marginTop: "16px" }}>{footer}</div>}
      </div>
    </>
  );
};

export default Card;

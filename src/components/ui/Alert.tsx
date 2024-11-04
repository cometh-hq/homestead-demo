import React from "react";

interface AlertProps {
  title: string;
  children: React.ReactNode;
}

export function Alert({ title, children }: AlertProps) {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <h4>{title}</h4>
      <p
        style={{
          width: "100%",
          overflow: "auto",
        }}
      >
        {children}
      </p>
    </div>
  );
}

interface CardProps {
  title: string;
  description: string;
  button: React.ReactNode;
  children: React.ReactNode;
}

export function Card({ title, description, button, children }: CardProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid #ccc",
        padding: "0px 20px",
        borderRadius: 14,
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 30,
        }}
      >
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {button}
      </div>
      {children}
    </div>
  );
}

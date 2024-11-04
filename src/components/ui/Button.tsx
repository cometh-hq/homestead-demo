interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        borderRadius: 10,
        border: "none",
        color: "white",
        cursor: "pointer",
        fontSize: 16,
        backgroundColor: "#0070f3",
      }}
    >
      {children}
    </button>
  );
}

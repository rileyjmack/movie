import React from "react";

interface PlayAgainButtonProps {
  onClick: () => void; // Callback function to handle the click event
  label?: string; // Optional label for the button, default is "Play Again"
}

const PlayAgainButton: React.FC<PlayAgainButtonProps> = ({
  onClick,
  label = "Play Again",
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#4CAF50",
        color: "white",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
    >
      {label}
    </button>
  );
};

export default PlayAgainButton;

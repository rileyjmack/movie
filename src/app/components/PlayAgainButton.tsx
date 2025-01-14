import React from "react";

interface PlayAgainButtonProps {
  size: number;
  onClick: () => void; // Callback function to handle the click event
  label?: string; // Optional label for the button, default is "Play Again"
}

const PlayAgainButton: React.FC<PlayAgainButtonProps> = ({
  size,
  onClick,
  label = "Play Again",
}) => {
  return (
    <button
      className={size == 1 ? "button" : "button2"}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1E44E5")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1E88E5")}
    >
      {label}
    </button>
  );
};

export default PlayAgainButton;

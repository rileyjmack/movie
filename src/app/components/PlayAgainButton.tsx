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
      className="button"
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1E44E5")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1E88E5")}
    >
      {label}
    </button>
  );
};

export default PlayAgainButton;

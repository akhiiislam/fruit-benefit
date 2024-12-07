import React, { useState } from "react";

interface StarRatingProps {
  initialRating: number;
  onChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (newRating: number) => {
    setRating(newRating);
    onChange(newRating);
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleClick(star)}
          className={`text-xl ${
            star <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default StarRating;

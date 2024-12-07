import React, { useState } from "react";
import { SocialShareButtons } from "./SocialShareButtons";
import StarRating from "./StarRating";

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface Fruit {
  id: string;
  name: string;
  benefits: Benefit[];
  images: string[];
  rating: number;
}

interface FruitContentProps {
  fruit: Fruit;
  fontSize: number;
}

export const FruitContent: React.FC<FruitContentProps> = ({
  fruit,
  fontSize,
}) => {
  const [thankYouMessage, setThankYouMessage] = useState("");

  const handleSubmitReview = () => {
    setThankYouMessage("Thank you for your review!");
    setTimeout(() => setThankYouMessage(""), 3000);
  };

  return (
    <div className="flex flex-1 space-x-2 rounded-lg bg-white">
      <div className="mt-10 p-2">
        <SocialShareButtons />
      </div>
      <div className="p-3 space-y-2 ">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Health Benefits Of An {fruit.name}
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {fruit.benefits.map((benefit, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {benefit.title}
              </h2>
              <p
                style={{ fontSize: `${fontSize}px` }}
                className="text-gray-600 dark:text-gray-400"
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {fruit.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${fruit.name} image ${index + 1}`}
              className="rounded-lg w-full h-auto"
            />
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 dark:text-gray-200">
            Was This Helpful?
          </h3>
          <StarRating rating={fruit.rating} />
          <div className="mt-4">
            <button
              onClick={handleSubmitReview}
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Submit Review
            </button>
          </div>

          {thankYouMessage && (
            <div className="mt-4 text-green-600 font-bold">
              {thankYouMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

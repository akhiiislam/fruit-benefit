import { useState } from "react";
import { SocialShareButtons } from "./SocialShareButtons";
import StarRating from "./StarRating";
import { Card, CardContent } from "./ui/card";

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

export default function FruitContent({ fruit, fontSize }: FruitContentProps) {
  const [thankYouMessage, setThankYouMessage] = useState("");

  const handleSubmitReview = () => {
    setThankYouMessage("Thank you for your review!");
    setTimeout(() => setThankYouMessage(""), 3000);
  };

  return (
    <Card className="max-w-4xl mx-auto bg-white dark:bg-gray-800">
      <CardContent className="flex flex-1 space-x-2 p-0">
        <div className="mt-10 p-2">
          <SocialShareButtons />
        </div>
        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Health Benefits Of {fruit.name}
          </h1>

          <div className="space-y-6">
            {fruit.benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-6 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 space-y-4">
                  <section>
                    <h2
                      className="font-semibold text-gray-900 flex items-center gap-2 dark:text-white"
                      style={{ fontSize: `${fontSize + 2}px` }}
                    >
                      {benefit.title}
                    </h2>
                    <p
                      className="text-sm text-gray-600 dark:text-gray-300"
                      style={{ fontSize: `${fontSize}px` }}
                    >
                      {benefit.description}
                    </p>
                  </section>
                </div>

                {index < fruit.images.length && (
                  <div className="flex-1">
                    <div className="relative w-full aspect-[4/3]">
                      <img
                        src={fruit.images[index]}
                        alt={`${fruit.name} benefit illustration`}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {fruit.benefits.length > fruit.images.length && (
              <div className="mt-6 space-y-4">
                {fruit.benefits
                  .slice(fruit.images.length)
                  .map((benefit, index) => (
                    <section key={index + fruit.images.length}>
                      <h2
                        className="font-semibold text-gray-900 flex items-center gap-2"
                        style={{ fontSize: `${fontSize + 2}px` }}
                      >
                        {benefit.title}
                      </h2>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontSize: `${fontSize}px` }}
                      >
                        {benefit.description}
                      </p>
                    </section>
                  ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">
              Was This Helpful?
            </h3>
            <StarRating initialRating={fruit.rating} />
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
      </CardContent>
    </Card>
  );
}

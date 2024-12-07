import { product } from "../types/types";

export const products: product[] = [
  {
    id: "avocado",
    name: "Avocado",
    type: "fruit",
    icon: "/placeholder.svg?height=40&width=40",
    vitamins: ["B6", "C", "E"],
    benefits: [
      {
        title: "Supports eye health",
        description:
          "Avocados contain lutein and zeaxanthin, which are important for eye health.",
        icon: "Eye",
      },
      {
        title: "Supports heart health",
        description:
          "Avocados are rich in monounsaturated fats, which can help reduce bad cholesterol levels.",
        icon: "Heart",
      },
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    rating: 4,
  },
  {
    id: "apple",
    name: "Apple",
    type: "fruit",
    icon: "/placeholder.svg?height=40&width=40",
    vitamins: ["A", "C"],
    benefits: [
      {
        title: "Supports digestive health",
        description:
          "Apples are rich in fiber which aids digestion and promotes gut health.",
        icon: "Apple",
      },
    ],
    images: ["/placeholder.svg?height=400&width=600"],
    rating: 5,
  },
  {
    id: "carrot",
    name: "Carrot",
    type: "vegetable",
    icon: "/placeholder.svg?height=40&width=40",
    vitamins: ["A", "K1"],
    benefits: [
      {
        title: "Improves eye health",
        description:
          "Carrots are rich in beta-carotene, which is converted into vitamin A in the body.",
        icon: "Eye",
      },
    ],
    images: ["/placeholder.svg?height=400&width=600"],
    rating: 4,
  },
  {
    id: "broccoli",
    name: "Broccoli",
    type: "vegetable",
    icon: "/placeholder.svg?height=40&width=40",
    vitamins: ["C", "K"],
    benefits: [
      {
        title: "Supports bone health",
        description:
          "Broccoli is rich in vitamin K and calcium, which are important for bone health.",
        icon: "Bone",
      },
    ],
    images: ["/placeholder.svg?height=400&width=600"],
    rating: 5,
  },
];

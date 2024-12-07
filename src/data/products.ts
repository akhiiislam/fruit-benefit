import { product } from "../types/types";

export const products: product[] = [
  {
    id: "avocado",
    name: "Avocado",
    type: "fruit",
    icon: "https://img.freepik.com/premium-vector/avocado-icon-cute-image-isolated-avocado-vector-illustration_118339-5269.jpg",
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
    icon: "data:image/png;base64,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",
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
    icon: "https://img.freepik.com/premium-vector/carrot-fruit-icon-vector-illustrations-carrot-fruit-icon-creative-kids_741639-44.jpg",
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
    icon: "https://cdn-icons-png.flaticon.com/512/2909/2909779.png",
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

import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  activeTab: "fruit" | "vegetable";
}

export function SearchInput({ value, onChange, activeTab }: SearchInputProps) {
  const placeholderText =
    activeTab === "fruit" ? "Search by Fruit Name" : "Search by Vegetable Name";

  return (
    <div className="relative">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholderText}
        className="pl-9 h-10 bg-gray-50 border-none"
      />
      <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}

import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by Fruits Name"
        className="pl-9 h-10 bg-gray-50 border-none"
      />
      <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}

"use client";

import { Tabs, TabsList, TabsTrigger } from "./ui/tab";

interface FruitTabsProps {
  activeTab: "fruit" | "vegetable"; // Match product's type
  onTabChange: (tab: "fruit" | "vegetable") => void;
}

export function FruitTabs({ activeTab, onTabChange }: FruitTabsProps) {
  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => onTabChange(value as "fruit" | "vegetable")}
      className="w-full"
    >
      <TabsList className="w-full h-12 bg-white border-b rounded-lg">
        <TabsTrigger
          value="fruit"
          className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:text-orange-500 font-medium"
        >
          Fruits
        </TabsTrigger>
        <TabsTrigger
          value="vegetable"
          className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:text-orange-500 font-medium"
        >
          Vegetables
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

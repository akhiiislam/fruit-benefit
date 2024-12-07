"use client";

import { Tabs, TabsList, TabsTrigger } from "./ui/tab";

export function FruitTabs() {
  return (
    <Tabs defaultValue="fruits" className="w-full">
      <TabsList className="w-full h-12 bg-white border-b rounded-none">
        <TabsTrigger
          value="fruits"
          className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:text-orange-500 font-medium"
        >
          Fruits
        </TabsTrigger>
        <TabsTrigger
          value="vegetables"
          className="flex-1 h-full rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:text-orange-500 font-medium"
        >
          Vegetables
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

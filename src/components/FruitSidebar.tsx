"use client";

import { useState } from "react";
import { Fruit, Vegetable } from "../types/types";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scrollArea";
// import { Input } from '@/components/ui/input'
// import { ScrollArea } from '@/components/ui/scroll-area'
// import { produce } from '@/data/produce'
// import { Search } from 'lucide-react'
// import Image from 'next/image'
// import { Fruit, Vegetable } from '@/types'
// import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface FruitSidebarProps {
  onSelectProduce: (item: Fruit | Vegetable) => void;
}

export function FruitSidebar({ onSelectProduce }: FruitSidebarProps) {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("fruit");

  const filteredProduce = produce.filter(
    (item: { name: string; type: string }) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedTab === "all" || item.type === selectedTab)
  );

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-4 space-y-4">
        <Tabs
          defaultValue="fruit"
          onValueChange={(value) => setSelectedTab(value)}
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fruit">Fruits</TabsTrigger>
            <TabsTrigger value="vegetable">Vegetables</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={`Search ${
              selectedTab === "all" ? "produce" : selectedTab
            }`}
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-2 p-4">
          {filteredProduce.map((item: Fruit | Vegetable) => (
            <button
              key={item.id}
              onClick={() => onSelectProduce(item)}
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent transition-colors w-full text-left"
            >
              <img
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>{item.name}</span>
              <div className="ml-auto flex gap-1">
                {item.vitamins.map((vitamin) => (
                  <span
                    key={vitamin}
                    className="text-xs bg-primary/10 text-primary px-1.5 rounded-full"
                  >
                    {vitamin}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import type { product } from "../types/types";
import { FruitTabs } from "./Tab";
import { SearchInput } from "./searchInput";
import { ProductList } from "./productList";

interface SidebarProps {
  products: product[];
  selectedProduct: product;
  onSelectProduct: (product: product) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Sidebar({
  products,
  selectedProduct,
  onSelectProduct,
  searchQuery,
  setSearchQuery,
}: SidebarProps) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeTab, setActiveTab] = useState<"fruit" | "vegetable">("fruit");

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        product.type === activeTab
    );
    setFilteredProducts(filtered);
  }, [products, searchQuery, activeTab]);

  return (
    <div className="w-80 h-3/4 border-r bg-white rounded-xl flex flex-col ml-3">
      <FruitTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="p-4">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
      </div>
      <ProductList
        products={filteredProducts}
        selectedProduct={selectedProduct}
        onSelect={onSelectProduct}
      />
    </div>
  );
}

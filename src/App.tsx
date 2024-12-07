import { useMemo, useState } from "react";
import { SettingsPanel } from "./components/SettingsPanel";
import { NavBar } from "./components/Navbar";
import { products } from "./data/products";
import { Sidebar } from "./components/Sidebar";
import VerticalNav from "./components/VerticalNav";
import FruitContent from "./components/FruitContent";
import { FruitDropdown } from "./components/FruitDropdown";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [vitaminType, setVitaminType] = useState("All");
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSettings, setShowSettings] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const availableVitamins = useMemo(() => {
    const allVitamins = products.flatMap((product) => product.vitamins);
    return [...new Set(allVitamins), "All"];
  }, []);

  const filteredProducts = useMemo(() => {
    if (!vitaminType) return products;
    if (vitaminType === "All") return products;
    return products.filter((product) => product.vitamins.includes(vitaminType));
  }, [vitaminType]);

  return (
    <div
      className={`h-screen bg-gray-300 flex flex-col ${darkMode ? "dark" : ""}`}
    >
      <header className="bg-white p-1 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          setSearchQuery={setSearchQuery}
        />
      </header>

      <div className="flex flex-1 lg:flex-row">
        <div className="hidden lg:block">
          <VerticalNav />
        </div>
        <div className="flex flex-col lg:flex-row flex-1 round-lg mt-3 overflow-hidden bg-gray-300">
          <div className="lg:hidden p-2">
            <FruitDropdown
              products={filteredProducts}
              selectedProduct={selectedProduct}
              onSelectProduct={setSelectedProduct}
            />
          </div>
          <div className="hidden lg:block">
            <Sidebar
              products={filteredProducts}
              selectedProduct={selectedProduct}
              onSelectProduct={setSelectedProduct}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="flex flex-col ml-2 lg:flex-row flex-1">
            {showSettings && (
              <div className="lg:hidden">
                <SettingsPanel
                  fontSize={fontSize}
                  setFontSize={setFontSize}
                  vitaminType={vitaminType}
                  setVitaminType={setVitaminType}
                  availableVitamins={availableVitamins}
                />
              </div>
            )}
            <FruitContent fruit={selectedProduct} fontSize={fontSize} />
            <div className="ml-2">
              {showSettings && (
                <div className="hidden lg:block">
                  <SettingsPanel
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                    vitaminType={vitaminType}
                    setVitaminType={setVitaminType}
                    availableVitamins={availableVitamins}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="lg:hidden">
            <VerticalNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

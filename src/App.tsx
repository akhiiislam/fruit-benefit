import { useState } from "react";
import { SettingsPanel } from "./components/SettingsPanel";
import { NavBar } from "./components/nav-bar";
import { products } from "./data/products";
import { Sidebar } from "./components/Sidebar";
import VerticalNav from "./components/VerticalNav";
import FruitContent from "./components/FruitContent";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [vitaminType, setVitaminType] = useState("letter");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

      <div className="flex flex-1">
        <VerticalNav />
        <div className="flex flex-1 round-lg gap-x-2 mt-3 overflow-hidden bg-gray-300">
          <Sidebar
            products={products}
            selectedProduct={selectedProduct}
            onSelectProduct={setSelectedProduct}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <FruitContent fruit={selectedProduct} fontSize={fontSize} />
          <SettingsPanel
            fontSize={fontSize}
            setFontSize={setFontSize}
            vitaminType={vitaminType}
            setVitaminType={setVitaminType}
            showSettings={showSettings}
            setShowSettings={setShowSettings}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

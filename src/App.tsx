import { useState } from "react";
import { FruitContent } from "./components/FruitContent";
import { SettingsPanel } from "./components/SettingsPanel";
import { NavBar } from "./components/nav-bar";
import { products } from "./data/products";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [vitaminType, setVitaminType] = useState("letter");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={`h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
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

      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          products={products}
          selectedProduct={selectedProduct}
          onSelectProduct={setSelectedProduct}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
          <FruitContent fruit={selectedProduct} fontSize={fontSize} />
        </main>
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
  );
}

export default App;

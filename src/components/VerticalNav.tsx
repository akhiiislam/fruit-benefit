import { Home, Grid, Heart, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";

export default function VerticalNav() {
  return (
    <nav className="w-full h-12 flex sm:flex-col items-center bg-white border-r sm:w-12 sm:h-full">
      <div className="flex sm:flex-col sm:gap-4 w-full justify-around">
        <Link
          to="/"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Home"
        >
          <Home className="w-4 h-4 text-gray-600 dark:text-white" />
        </Link>
        <Link
          to="/browse"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Browse"
        >
          <Grid className="w-4 h-4 text-gray-600 dark:text-white" />
        </Link>
        <Link
          to="/favorites"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Favorites"
        >
          <Heart className="w-4 h-4 text-gray-600 dark:text-white" />
        </Link>
        <Link
          to="/apps"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Apps"
        >
          <LayoutGrid className="w-4 h-4 text-gray-600 dark:text-white" />
        </Link>
      </div>
    </nav>
  );
}

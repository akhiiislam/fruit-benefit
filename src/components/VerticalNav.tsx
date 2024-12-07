import { Home, Grid, Heart, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";

export default function VerticalNav() {
  return (
    <nav className="w-12 flex flex-col items-center bg-white border-r">
      <div className="flex flex-col items-center gap-4">
        <Link
          to="/"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Home"
        >
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Link
          to="/browse"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Browse"
        >
          <Grid className="w-4 h-4 text-gray-600" />
        </Link>
        <Link
          to="/favorites"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Favorites"
        >
          <Heart className="w-4 h-4 text-gray-600" />
        </Link>
        <Link
          to="/apps"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Apps"
        >
          <LayoutGrid className="w-4 h-4 text-gray-600" />
        </Link>
      </div>
    </nav>
  );
}

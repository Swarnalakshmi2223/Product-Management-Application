import { NavLink } from "react-router-dom";
import {
  FaGem,
  FaHome,
  FaPlusCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 pt-3">

      <nav
        className="
          w-full
          h-20
          px-6 sm:px-10 lg:px-16
          flex
          items-center
          justify-between
          bg-black
          border border-white/10
          shadow-[0_10px_40px_rgba(0,0,0,0.5)]
        "
      >

        {/* LOGO */}
        <NavLink
          to="/"
          className="flex items-center gap-4"
        >

          <div
            className="
              w-12 h-12
              rounded-full
              bg-white
              text-black
              flex
              items-center
              justify-center
              shadow-[0_0_25px_rgba(255,255,255,0.15)]
            "
          >
            <FaGem className="text-xl" />
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              EliteStore
            </h1>

            <p className="text-xs text-gray-400">
              Premium Collection
            </p>
          </div>

        </NavLink>


        {/* NAVIGATION */}
        <div className="flex items-center gap-3">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `
              flex items-center gap-3
              px-6 py-3
              rounded-full
              border
              transition-all duration-300
              font-semibold
              ${
                isActive
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                  : "text-white border-white/20 hover:border-white hover:bg-white/10"
              }
              `
            }
          >
            <FaHome />
            <span>Home</span>
          </NavLink>


          <NavLink
            to="/add-product"
            className={({ isActive }) =>
              `
              flex items-center gap-3
              px-6 py-3
              rounded-full
              border
              transition-all duration-300
              font-semibold
              ${
                isActive
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                  : "text-white border-white/20 hover:border-white hover:bg-white/10"
              }
              `
            }
          >
            <FaPlusCircle />
            <span>Add Product</span>
          </NavLink>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;
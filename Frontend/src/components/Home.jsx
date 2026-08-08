import axios from "axios";
import { useEffect, useState } from "react";

import {
  FaSearch,
  FaFilter,
  FaDatabase,
  FaGlobe,
} from "react-icons/fa";

import ProductCard from "../components/ProductCard";

function Home() {

  const [products, setProducts] = useState([]);

  const [source, setSource] = useState("mongodb");

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);


  /* ================================
     FETCH PRODUCTS
  ================================= */

  useEffect(() => {

    setLoading(true);

    if (source === "mongodb") {

      axios
        .get("http://localhost:3000/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log("MongoDB Error:", error);
          setProducts([]);
        })
        .finally(() => {
          setLoading(false);
        });

    } else {

      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log("FakeStore Error:", error);
          setProducts([]);
        })
        .finally(() => {
          setLoading(false);
        });

    }

  }, [source]);


  /* ================================
     SEARCH
  ================================= */

  const filteredProducts = products.filter((product) =>
    product.title
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );


  return (

    <div className="w-full">

      {/* =================================
          HERO SECTION
      ================================= */}

      <section className="px-5 sm:px-8 lg:px-12 pt-12">

        <div
          className="
            relative
            w-full
            min-h-[100px]
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            bg-gradient-to-br
            from-[#18191b]
            via-[#111214]
            to-[#080909]
            px-8
            sm:px-12
            lg:px-16
            py-12
            flex
            items-center
          "
        >

          {/* Background Glow */}

          <div
            className="
              absolute
              -right-32
              -top-40
              w-[550px]
              h-[300px]
              rounded-full
              bg-white/[0.04]
              blur-2xl
            "
          />


          <div className="relative z-10 max-w-1xl">

            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-gray-500
                mb-4
              "
            >
              EliteStore Collection
            </p>


            <h1
              className="
                text-4xl
                sm:text-1xl
                lg:text-5xl
                font-bold
                tracking-tight
                text-white
              "
            >
              Premium Products
            </h1>


            <p
              className="
                mt-5
                text-gray-400
                text-base
                sm:text-lg
                max-w-1xl
                leading-8
              "
            >
              Explore premium products from MongoDB and
              FakeStore with a modern shopping experience.
            </p>

          </div>

        </div>

      </section>


      {/* =================================
          CONTROLS
      ================================= */}

      <section className="px-5 sm:px-8 lg:px-12 mt-10">

        <div className="w-full">

          {/* SOURCE BUTTONS */}

          <div className="flex flex-wrap items-center gap-3">

            <button
              onClick={() => setSource("mongodb")}
              className={`
                flex
                items-center
                gap-3
                px-6
                py-3
                rounded-full
                font-semibold
                border
                transition-all
                duration-300
                ${
                  source === "mongodb"
                    ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                    : "bg-[#1a1b1d] text-gray-300 border-white/10 hover:border-white/30"
                }
              `}
            >
              <FaDatabase />

              MongoDB Products

            </button>


            <button
              onClick={() => setSource("fakestore")}
              className={`
                flex
                items-center
                gap-3
                px-6
                py-3
                rounded-full
                font-semibold
                border
                transition-all
                duration-300
                ${
                  source === "fakestore"
                    ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                    : "bg-[#1a1b1d] text-gray-300 border-white/10 hover:border-white/30"
                }
              `}
            >
              <FaGlobe />

              FakeStore Products

            </button>

          </div>


          {/* SEARCH + FILTER */}

          <div className="flex gap-4 mt-6">

            <div
              className="
                flex
                items-center
                flex-1
                bg-[#151617]
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                focus-within:border-white/30
                transition
              "
            >

              <FaSearch className="text-gray-500 mr-4" />

              <input
                type="text"
                placeholder="Search Products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-white
                  placeholder-gray-500
                "
              />

            </div>


            <button
              className="
                hidden
                sm:flex
                items-center
                gap-3
                px-7
                rounded-2xl
                border
                border-white/10
                bg-[#151617]
                text-gray-300
                hover:bg-white
                hover:text-black
                transition
              "
            >
              <FaFilter />

              Filter

            </button>

          </div>

        </div>

      </section>


      {/* =================================
          PRODUCTS HEADER
      ================================= */}

      <section className="px-5 sm:px-8 lg:px-12 mt-12">

        <div className="flex items-end justify-between">

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-gray-600
                mb-2
              "
            >
              Collection
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold">
              {source === "mongodb"
                ? "MongoDB Products"
                : "FakeStore Products"}
            </h2>

          </div>


          <p className="text-sm text-gray-500">
            {filteredProducts.length} Products
          </p>

        </div>

      </section>


      {/* =================================
          PRODUCTS
      ================================= */}

      <section className="px-5 sm:px-8 lg:px-12 py-8">

        {loading ? (

          <div className="min-h-[300px] flex items-center justify-center">

            <div className="text-center">

              <div
                className="
                  w-12
                  h-12
                  border-4
                  border-white/10
                  border-t-white
                  rounded-full
                  animate-spin
                  mx-auto
                "
              />

              <p className="mt-5 text-gray-500">
                Loading products...
              </p>

            </div>

          </div>

        ) : filteredProducts.length === 0 ? (

          <div
            className="
              min-h-[300px]
              flex
              items-center
              justify-center
              border
              border-white/10
              rounded-3xl
              bg-[#111213]
            "
          >

            <div className="text-center">

              <h3 className="text-xl font-semibold">
                No Products Found
              </h3>

              <p className="text-gray-500 mt-2">
                Try another search or add a product.
              </p>

            </div>

          </div>

        ) : (

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-6
            "
          >

            {filteredProducts.map((product) => (

              <ProductCard
                key={product._id || product.id}
                product={product}
              />

            ))}

          </div>

        )}

      </section>

    </div>
  );
}

export default Home;
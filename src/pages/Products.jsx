import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [inStock, setInStock] = useState(false);
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [debouncedMinPrice, setDebouncedMinPrice] = useState(minPrice);
  const [debouncedMaxPrice, setDebouncedMaxPrice] = useState(maxPrice);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setDebouncedMinPrice(minPrice);
      setDebouncedMaxPrice(maxPrice);
    }, 1000); // 600ms smooth feel

    return () => clearTimeout(timer);
  }, [search, minPrice, maxPrice]);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await getProducts({
          category: category !== "all" ? category : undefined,
          keyword: debouncedSearch || undefined,
          minPrice: debouncedMinPrice || undefined,
          maxPrice: debouncedMaxPrice || undefined,
          inStock: inStock ? true : undefined,
          page,
          limit,
        });

        setProducts(response.data);
        setTotalPages(response.totalPages);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [
    category,
    debouncedSearch,
    debouncedMinPrice,
    debouncedMaxPrice,
    inStock,
    page,
    limit,
  ]);


  if (loading)
    return <div className="text-center mt-40 text-lg">Loading...</div>;

  return (
    <Reveal>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold text-center mb-8 mt-6">
          Our Products
        </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">

          <div className="grid md:grid-cols-4 gap-4 mb-6 mt-4">

            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded-lg border dark:bg-gray-900"
            />

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border dark:bg-gray-900"
            >
              <option value="all">All Categories</option>
              <option value="sweater">Sweaters</option>
              <option value="decoration">Decoration</option>
              <option value="fashion">Fashion</option>
            </select>

            {/* Price Range */}
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-1/2 px-3 py-2 rounded-lg border dark:bg-gray-900"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-1/2 px-3 py-2 rounded-lg border dark:bg-gray-900"
              />
            </div>

            {/* In Stock */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={inStock}
                onChange={() => setInStock(!inStock)}
              />
              In Stock Only
            </label>

          </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mb-16">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>

      </div>
    </Reveal>
  );
};

export default Products;

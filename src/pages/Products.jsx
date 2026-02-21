import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("all");
const [page, setPage] = useState(1);

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getProducts({
        category: category !== "all" ? category : undefined,
        keyword: search || undefined,
        page,
      });

      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [category, search, page]);


  if (loading)
    return <div className="text-center mt-40 text-lg">Loading...</div>;

  return (
    <Reveal>
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold text-center mb-12">
        Our Products
      </h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">

  {/* Category Dropdown */}
  <div className="flex items-center gap-3">

  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
    Select Category:
  </label>

  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
  >
    <option value="all">All</option>
    <option value="sweater">Sweaters</option>
    <option value="decoration">Decoration</option>
    <option value="fashion">Fashion</option>
  </select>

</div>

</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    </Reveal>
  );
};

export default Products;

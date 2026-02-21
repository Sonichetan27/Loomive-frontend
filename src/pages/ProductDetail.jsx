import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductBySlug, getAllProducts } from "../services/productService";
import { motion } from "framer-motion";
import ProductSkeleton from "../components/ProductSkeleton";
const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductBySlug(slug);
        setProduct(data);

        const allProducts = await getAllProducts();

        const filtered = allProducts.filter(
          (p) =>
            p.category === data.category &&
            p._id !== data._id
        );

        setRelated(filtered.slice(0, 3));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };


    fetchProduct();
  }, [slug]);

  // WhatsApp handler
  const handleWhatsApp = () => {
    const phoneNumber = "918770932665"; // apna number
    const message = `Hi Loomiva,
  I am interested in customizing the product: ${product.name}.
  Please guide me further.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (loading)
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
        <ProductSkeleton />
      </div>
    );


  if (!product)
    return <div className="text-center mt-20">Product not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-16"
    >

      {/* 🔹 Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-black transition">Home</Link>
        {" / "}
        <Link to="/products" className="hover:text-black transition">Products</Link>
        {" / "}
        <span className="text-gray-800 font-medium">
          {product.name}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl"
        >

          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={product.image?.url || product.image}
            alt={product.name}
            className="w-full shadow-lg object-cover cursor-pointer"
          />
        </motion.div>


        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="text-2xl font-semibold text-pink-600 mb-6">
            ₹{product.price}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition w-full md:w-auto"
          >
            Customize on WhatsApp
          </motion.button>
        </motion.div>

      </div>

      {/* 🔥 Related Products */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {related.map((item) => (
              <Link key={item._id} to={`/products/${item.slug}`}>
                <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
                  <img
                    src={item.image?.url || item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="mt-3 font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-pink-600 font-medium">
                    ₹{item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </motion.div>
  );
};

export default ProductDetail;

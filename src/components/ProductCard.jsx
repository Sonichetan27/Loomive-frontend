import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      <Link to={`/products/${product.slug}`}>
        <img
          loading="lazy"
          src={product.image?.url || product.image}
          alt={product.name}
          className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
        />
      </Link>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-pink-600 transition">
          {product.name}
        </h2>

        <p className="text-gray-400 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>

        <p className="text-gray-400 text-sm mt-1 line-clamp-2">
          stock: {product.stock}
        </p>

        <p className="text-pink-600 font-bold mt-3">
          ₹{product.price}
        </p>
        
        <Link
          to={`/products/${product.slug}`}
          className="inline-block mt-4 text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

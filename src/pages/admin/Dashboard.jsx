import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productService";
import { getAllCategories } from "../../services/adminService";
import { Package, Layers, TrendingUp, DollarSign } from "lucide-react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    totalStock: 0,
    totalValue: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      console.log("Fetching stats...");
      const [productsRes, categoriesRes] = await Promise.all([
        getAllProducts(),
        getAllCategories(),
      ]);

      console.log("Products response:", productsRes);
      console.log("Categories response:", categoriesRes);

      const products = productsRes.data || [];
      const categories = categoriesRes || []; // Service already returns the array directly

      const totalStock = products.reduce((sum, p) => sum + (p.stock || 0), 0);
      const totalValue = products.reduce((sum, p) => sum + (p.price * (p.stock || 0)), 0);

      setStats({
        totalProducts: products.length,
        totalCategories: categories.length,
        totalStock,
        totalValue,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
      setError(error.message);
      // Set default values on error
      setStats({
        totalProducts: 0,
        totalCategories: 0,
        totalStock: 0,
        totalValue: 0,
      });
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: Package,
      color: "bg-blue-500",
    },
    {
      title: "Total Categories",
      value: stats.totalCategories,
      icon: Layers,
      color: "bg-green-500",
    },
    {
      title: "Total Stock",
      value: stats.totalStock,
      icon: TrendingUp,
      color: "bg-purple-500",
    },
    {
      title: "Total Value",
      value: `₹${stats.totalValue.toLocaleString()}`,
      icon: DollarSign,
      color: "bg-orange-500",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg p-4 mb-6">
          <p className="font-semibold">Error loading dashboard</p>
          <p className="text-sm mt-1">{error}</p>
          <p className="text-xs mt-2">Please check if the backend is running and try again.</p>
        </div>
        <button
          onClick={fetchStats}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {card.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    {card.value}
                  </p>
                </div>
                <div className={`${card.color} p-3 rounded-lg`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Welcome to Loomiva Admin Panel
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Use the sidebar to navigate through different sections. You can manage products,
          categories, and monitor your inventory from here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

const ProductSkeleton = () => {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 w-3/4 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/2 rounded"></div>
      </div>
    );
  };
  
  export default ProductSkeleton;
import API from "./api";

// Get all products with pagination and filters
export const getProducts = async (params = {}) => {
  const res = await API.get("/products", { params });
  return res.data;
};

// Get product by slug
export const getProductBySlug = async (slug) => {
  const res = await API.get(`/products/${slug}`);
  return res.data; // single product
};

// Get all products (alias for getProducts)
export const getAllProducts = async (params = {}) => {
  const res = await API.get("/products", { params });
  return res.data;
};

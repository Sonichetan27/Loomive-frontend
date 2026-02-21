import API from "./api";

// Get all products
export const getProducts = async (params = {}) => {
  const res = await API.get("/products", { params });
  return res.data.data;
};

// Get product by slug
export const getProductBySlug = async (slug) => {
  const res = await API.get(`/products/${slug}`);
  return res.data.data; // single product
};

// Get all products
export const getAllProducts = async () => {
  const res = await API.get("/products");
  return res.data.data;
};

import API from "./api";

// Get all products
export const getProducts = async () => {
  const res = await API.get("/products");
  return res.data.data; // products array
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

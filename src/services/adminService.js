import API from "./api";

// Admin login
export const loginAdmin = async (credentials) => {
  const res = await API.post("/admin/login", credentials);
  return res.data;
};

// Admin register
export const registerAdmin = async (data) => {
  const res = await API.post("/admin/register", data);
  return res.data;
};

// Create product
export const createProduct = async (formData) => {
  const res = await API.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// Update product
export const updateProduct = async (id, formData) => {
  const res = await API.put(`/products/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// Delete product
export const deleteProduct = async (id) => {
  const res = await API.delete(`/products/${id}`);
  return res.data;
};

// Get product by ID
export const getProductById = async (id) => {
  const res = await API.get(`/products/${id}`);
  return res.data;
};

// Create category
export const createCategory = async (data) => {
  const res = await API.post("/categories", data);
  return res.data;
};

// Update category
export const updateCategory = async (id, data) => {
  const res = await API.put(`/categories/${id}`, data);
  return res.data;
};

// Delete category
export const deleteCategory = async (id) => {
  const res = await API.delete(`/categories/${id}`);
  return res.data;
};

// Get all categories
export const getAllCategories = async () => {
  const res = await API.get("/categories");
  console.log("API Response from /categories:", res);
  return res.data.data; // Return the actual categories array
};

// Change admin password
export const changePassword = async (passwordData) => {
  const res = await API.put("/admin/change-password", passwordData);
  return res.data;
};

// Forgot password - reset with email
export const forgotPassword = async (data) => {
  const res = await API.post("/admin/forgot-password", data);
  return res.data;
};

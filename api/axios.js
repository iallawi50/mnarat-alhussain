import axios from "axios";

const api = axios.create({
  baseURL: "https://manarat.svod.app/",
  withCredentials: true,
});
// استدعاء نقطة نهاية CSRF للحصول على الرمز
const getCsrfToken = async () => {
  try {
    const response = await api.get("/sanctum/csrf-cookie");
    const csrfToken = response.data.csrfToken;
    return csrfToken;
  } catch (error) {
    console.error("Failed to fetch CSRF token");
    throw error;
  }
};

// تعيين رمز CSRF في رأس الطلبات
api.interceptors.request.use(async (config) => {
  const csrfToken = await getCsrfToken();
  config.headers["X-CSRF-Token"] = csrfToken;
  return config;
});

export default api;
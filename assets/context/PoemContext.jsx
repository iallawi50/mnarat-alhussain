import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import axios from "../../api/axios";

const PoemContext = createContext({});

export const PoemProvider = ({ children }) => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const [category, setCategory] = useState(0);
  const [categories, setCategories] = useState();
  const [poems, setPoems] = useState();
  const [errors, setErrors] = useState("");
  const [status, setStatus] = useState(null);
  const [poem, setPoem] = useState();

  useEffect(() => {
    getPoemsByCategory(category);
  }, [category]);
  useEffect(() => {
    getCategories();
    // getAllPoems();
    getPoemsByCategory();
  }, []);

  const getCategories = async () => {
    try {
      await csrf();
      const res = await axios.get(`api/category/`);
      setCategories(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getPoemsByCategory = async (id) => {
    try {
      await csrf();
      const res = await axios.get(`api/category/${id}`);
      setPoems(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getPoem = async (slug) => {
    try {
      const response = await axios.get(`/api/poem/${slug}`);
      setPoem(response.data);
      console.log(response.data);
    } catch (error) {}
  };

  const create = async (title, body, type_phase, type_poem, tags) => {
    try {
      await csrf();
      const res = await axios.post("/api/poem", {
        title,
        body,
        type_phase,
        type_poem,
        tags,
      });
      setStatus(201);
      Swal.fire({
        icon: "success",
        title: "تم نشر القصيدة",
        text: "",
        confirmButtonText: "موافق",
        confirmButtonColor: "#315940",
      });
    } catch (e) {
      if (e.response.status == 422) setErrors(e.response.data.errors);
    }
  };

  const values = {
    category,
    setCategory,
    poems,
    // getAllPoems,
    create,
    status,
    errors,
    categories,
    getPoem,
    poem,
  };
  return <PoemContext.Provider value={values}>{children}</PoemContext.Provider>;
};
export default function usePoemContext() {
  return useContext(PoemContext);
}

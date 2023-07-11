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

  const getAllPoems = async () => {
    try {
      const response = await axios.get("/api/poem");
      setPoems(response.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const create = async (title, body, type_phase, type_poem) => {
    try {
      await csrf(); 
      const res = await axios.post("/api/poem", {
        title,
        body,
        type_phase,
        type_poem, 
      });
      setStatus(201)
      Swal.fire({
        icon: "success",
        title: "تم نشر القصيدة",
        text: "",
        confirmButtonText: "موافق",
        confirmButtonColor: "#315940",

      });
    } catch (e) {
      if (e.response.status == 422) setErrors(e.response.data.errors);
      console.log(errors);
    }
  };

  const values = { category, setCategory, poems, getAllPoems, create, status, errors };
  return <PoemContext.Provider value={values}>{children}</PoemContext.Provider>;
};
export default function usePoemContext() {
  return useContext(PoemContext);
}

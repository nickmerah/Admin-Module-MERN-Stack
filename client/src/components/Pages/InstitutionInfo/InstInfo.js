import React, { useState, useEffect } from "react";

import InstForm from "./InstForm";
import { fetchData } from "../../../api";

const School = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData()
      .then((response) => {
        setData(response.records);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return data ? <InstForm loadedinfo={data} /> : <div>Loading....</div>;
};

export default School;

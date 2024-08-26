import { useState, useEffect } from "react";

import axios from "axios";

const useRequest = (url, search) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          params: { q: search },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    if (search.length >= 3 || search.length === 0) {
      fetchData();
    } else {
      setData([]);
    }
  }, [url, search]);

  return { data, error };
};

export default useRequest;
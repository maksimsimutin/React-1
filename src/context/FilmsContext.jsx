import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const FilmsContext = createContext();

const FilmsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      if (!search.trim()) return;
      try {
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };
    if (search.length >= 3) fetchFilms();
  }, [search]);

  return (
    <FilmsContext.Provider value={{ data, search, setSearch, error }}>
      {children}
    </FilmsContext.Provider>
  );
};

export { FilmsContext, FilmsProvider };


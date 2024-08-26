import { useCallback } from "react";

const useFormatDate = () => {
  const formatDate = useCallback((dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options);
  }, []);

  return formatDate;
};

export default useFormatDate;
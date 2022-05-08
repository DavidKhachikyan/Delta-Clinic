import { useCallback, useState } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      headers["Authorization"] = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }
        console.log("resp");
        const response = await fetch(url, { method, body, headers });
        console.log("resp2");

        const data = await response.json();
        console.log("resp3");

        if (!response.ok) {
          throw new Error(data.message || "Ne Tak");
        }

        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};

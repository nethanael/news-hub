import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Source {
    id: string;
    name: string;
    url: string;
}

interface FetchSourcesResponse {
  status: string;
  totalResults: number;
  results: Source[];
}

const useSources = () => {
 const [sources, setSources] = useState<Source[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchSourcesResponse>("/sources", { signal: controller.signal})
      .then((res) => {
        setSources(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

      return () => controller.abort();

  }, []);

return {sources, error, isLoading};
}

export default useSources;
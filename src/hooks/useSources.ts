//import useData from "./useData";
import sources from "../data/NewsSources";

export interface Source {
    id: string;
    name: string;
    url: string;
    icon: string;
}

// const useSources = () => useData<Source>("/sources");
const useSources = () => ({data: sources, isLoading: false, error: null});

export default useSources;
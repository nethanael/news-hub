import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Source {
    id: string;
    name: string;
    url: string;
}

const useSources = () => useData<Source>("/sources");

export default useSources;
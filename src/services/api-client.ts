import axios from "axios";

export default axios.create({
    baseURL: "https://newsdata.io/api/1",
    params: {
        apikey: "pub_73f8b8f47d814d4eb7c100005d8cd3cf",
        country: "cr"
    }
});
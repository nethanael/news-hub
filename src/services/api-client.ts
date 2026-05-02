import axios from "axios";

export default axios.create({
    baseURL: "https://newsdata.io/api/1",
    params: {
        apikey: "pub_944739011c15482ba6f8b0737b7bc04b",
        country: "cr",
        //category: "health,business,technology,entertainment,top",
        language: "es",
    }
});

// News API To Search, Collect
// And Track Worldwide News
// Newsdata.io
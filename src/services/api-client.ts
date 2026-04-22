import axios from "axios";

export default axios.create({
    baseURL: "https://newsdata.io/api/1",
    params: {
        apikey: "pub_54a36066a97742b6a133adbd486163a0",
        country: "cr",
        //category: "health,business,technology,entertainment,top",
        language: "es",
    }
});

// News API To Search, Collect
// And Track Worldwide News
// Newsdata.io
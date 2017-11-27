export default config = {
    environment: "development",
    dev_api_url: "http://192.168.2.12:3000/api",
    prod_api_url: "http://192.168.137.1:3000/api",
    base_url: function(endpoint = "/") {
        return (this.environment == "development") ? (this.dev_api_url + endpoint) : (this.prod_api_url + endpoint);
    },
    hackernews: {
        key: "2adbaa5a1d0f43ac986f4488060d91a6",
        uri: "https://newsapi.org/v2/top-headlines"
    },
    randomapi: {
        ref: "eyc1b5x4",
        uri: "https://randomapi.com/api/",
        user_act: "https://randomuser.me/api/?page=1&results=10&seed=abc",
        key: "R77W-166L-JW2D-0S0P"
    }
}
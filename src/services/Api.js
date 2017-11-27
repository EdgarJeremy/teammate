import config from "../config";

const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
};

export default Api = {
    login: (username,password,success,failed) => {
        let body = {username,password};
        fetch(config.base_url("/login"),{ method: "POST", body: JSON.stringify(body), headers: headers })
        .then((response) => response.json())
        .then(success)
        .catch(failed)
    },

    hacker_news: () => {
        fetch(`${config.hackernews.uri}/?sources=hacker-news&apiKey=${config.hackernews.key}`)
        .then((response) => response.json())
        .then(success)
        .catch(failed);
    },

    random_user: (limit = 10,success,failed) => {
        fetch(`https://randomuser.me/api/?page=1&results=${limit}&seed=abc`)
        .then((response) => response.json())
        .then(success)
        .catch(failed);
    }

}
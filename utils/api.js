import axios from "axios";

const signApi = axios.create({
    baseURL: "https://its-a-sign-app.herokuapp.com/",
});

export const postUser = (name, username, password, email) => {
    return signApi
        .post("/api/users/signup", {
            username: username,
            email: email,
            password: password,
            name: name,
        })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const signIn = (username, password) => {
    console.log("in api call");
    return signApi
        .post(`/api/sign_in`, { username, password })
        .then((response) => {
            console.log("non error", response);
            return response.data.successful;
        })
        .catch((err) => {
            console.log("error", err);
        });
};

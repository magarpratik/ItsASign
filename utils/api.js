import axios from "axios";

const signApi = axios.create({
    baseURL: "https://its-a-sign-app.herokuapp.com/",
});

export const postUser = (name, username, password, email) => {
    console.log("here");
    return signApi
        .post("/api/users/signup", {
            username: username,
            email: email,
            password: password,
            confirmPassword: password,
        })
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

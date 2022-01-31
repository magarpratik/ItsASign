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

export const getUser = (username) => {
  return signApi
    .get(`/api/users/${username}`)
    .then((response) => {
      return response.data.user;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getLessons = (course_topic) => {
  return signApi
    .get("/api/courses/alpha")
    .then((response) => {
      return response.data.courses;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getLessonsCompleted = (username) => {
  return signApi.get(`api/users/${username}/progress`).then((response) => {
    return response.data.progress;
  });
};

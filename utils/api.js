import axios from "axios";

const signApi = axios.create({
  baseURL: "https://its-a-sign-app.herokuapp.com/",
});

export const postUser = (name, username, password, email) => {
  return signApi
    .post("api/users/signup", {
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
    .get(`api/users/${username}`)
    .then((response) => {
      return response.data.user;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const patchUserDetails = (
  username,
  email,
  password,
  progress,
  picture
) => {
  return signApi
    .patch(`api/users/${username}`, { email, password, progress, picture })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const getLessons = (course_topic) => {
  return signApi
    .get("api/courses/The alphabet")
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

export const signIn = (username, password) => {
  return signApi
    .get(`api/sign_in/?username=${username}&password=${password}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {

      return { status: err.response.status };
    })
};
     
      
export const getLessonAnswers = (lesson_number, index) => {
  return signApi
    .get(`api/courses/The%20alphabet/${lesson_number}/${index}/answers`)
    .then((response) => {
      return response.data.answers
    }).catch((err) => {
      console.log(err)

    });
};

export const getLessonQuestions = (lesson_number, index) => {
  return signApi
    .get(`api/courses/The%20alphabet/${lesson_number}/${index}/question`)
    .then((response) => {
      return response.data.question;
    })
    .catch((err) => {
      console.log(err);
    });
  
  
};
export const allUsers = () => {
  return signApi.get(`api/ranked_users`).then((response) => {
    return response.data;
  });
};

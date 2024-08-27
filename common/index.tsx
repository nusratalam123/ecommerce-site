const backendDomain = "localhost:7000/api/v1";

const summaryAPI = {
  signUP: {
    url: `${backendDomain}/auth/signup`,
    method: "POST",
  },
  signIn: {
    url: `${backendDomain}/auth/login`,
    method: "POST",
  },
  currentUser: {
    url: `${backendDomain}/auth/current-user`,
    method: "GET",
  },
};

export default summaryAPI
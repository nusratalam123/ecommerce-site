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
};

export default summaryAPI
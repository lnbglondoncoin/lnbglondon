import axios from "axios";

const createBackendServer = (baseURL) => {
  const api = axios.create({
    baseURL: `${baseURL}/api/`,
    withCredentials: true,
    headers: {
      Accept: "application/json",
    },
    timeout: 60 * 1000,
  });

  //Interceptor
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const message = error?.response?.data?.message;
      error.message = message ?? error.message;
      if (error?.response?.data?.errors)
        error.errors = error?.response?.data?.errors;
      return Promise.reject(error);
    },
  );

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  const connectedUser = async (params) => await api.post(`connectedUser/${params}`);

  const referringto = async (body) => await api.post("referringto", body);

  const getOneUser = async (params) => await api.get(`getUserData/${params}`);

  return {
    connectedUser,
    referringto,
    getOneUser
  };
};

// const apis = createBackendServer("http://localhost:5000");
const apis = createBackendServer("https://lnbglondonllc.com");

export default apis;

import axios from "axios"; 



const privateInstance = axios.create({
  //baseURL : 'http://127.0.0.1:8081/',
  baseURL : 'https://gpt1.silkinv.com/',
  headers: {
    'Content-Type': 'application/json',
  }, 
});

const getAuth = () => localStorage.getItem("access_token");

privateInstance.interceptors.request.use(
  (config) => {
    const accessToken  = getAuth();

    if (config.headers) {
      config.headers.Authorization = 'Bearer ' + accessToken;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default privateInstance;
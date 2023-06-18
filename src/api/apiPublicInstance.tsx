import axios from "axios"; 

const publicInstance = axios.create({
  //baseURL : 'http://127.0.0.1:8081/',
  baseURL : 'https://gpt1.silkinv.com/',
  headers: {
    
  }, 
});

export default publicInstance;
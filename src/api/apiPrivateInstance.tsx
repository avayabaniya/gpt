import axios from "axios"; 

const privateInstance = axios.create({
  baseURL : 'http://127.0.0.1:8081/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + 'get tokem from local storage' //get tokem from local storage
  }, 
});

export default privateInstance;
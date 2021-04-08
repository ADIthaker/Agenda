import axios from 'axios';

const Req = axios.create({
    baseURL: "https://secret-earth-78161.herokuapp.com",
  });
  
export default Req;
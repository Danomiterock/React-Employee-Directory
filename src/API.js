import axios from "axios";
const api = {  getUsers: function() {
  return axios.get("https://randomuser.me/api/?results=200&nat=us");
}
}

export default api;
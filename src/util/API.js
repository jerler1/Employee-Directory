import axios from "axios";

// Exporting methods to use for accessing Random People.

export default {
  populatePeople: function () {
    return axios.get("https://randomuser.me/api/?inc=name,email,dob,picture,phone", { params: {
        format:JSON,
        results:10
    }});
  },
};

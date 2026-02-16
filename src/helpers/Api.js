import Axios from "axios";

class Api {
  // Axios instance will be created in the constructor
  constructor() {
    this.http = Axios.create({
      baseURL: process.env.REACT_APP_API_URL || "https://8qndxtc5-5000.asse.devtunnels.ms/api/v1",
      timeout: 45000,
    });
  }

  get(endpoint, query = {}) {
    this.setAuthToken();
    return this.http.get(endpoint, {
      params: query,
    });
  }
  post(endpoint, data) {
    // Set the authentication token
    this.setAuthToken();

    // Send the POST request
    return this.http.post(endpoint, data);
  }
  put(endpoint, data) {
    // Set the authentication token
    this.setAuthToken();

    // Send the PUT request
    return this.http.put(endpoint, data);
  }
  delete(endpoint, data) {
    // Set the authentication token
    this.setAuthToken();

    // Send the DELETE request
    return this.http.delete(endpoint, data);
  }
  setAuthToken() {
    this.http.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
}

export default new Api();

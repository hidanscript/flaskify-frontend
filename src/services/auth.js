import Axios from 'axios';
import { SERVER_URL } from '../lib/endpoints';

class Auth {
  constructor() {
    this.authenticated = false;
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  async isAuthenticated() {
    await Axios.get(SERVER_URL + '/user')
      .then(response => {
        this.authenticated = true;
      })
      .catch(err => console.log(err, err));
  };
}

export default new Auth();
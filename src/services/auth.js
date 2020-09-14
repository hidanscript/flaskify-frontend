import Axios from 'axios';
import { SERVER_URL } from '../lib/endpoints';
import { toast } from 'react-toastify';

const isAuthenticated = () => {
  Axios.get(SERVER_URL + '/user')
    .then((response) => {
      console.log(response);
      return true;
    })
    .catch((err) => {
      console.error('err', err);
      toast.error('An error has ocurred, please try again later', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      console.log('should render toast');
      return false;
    });
}

export { isAuthenticated };

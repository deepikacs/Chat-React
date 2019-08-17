import axios from 'axios';
import { API_BASE_URL, HEADERS_DEFAULT, HEADERS_WITH_AUTH } from '../apiHandlers/apiConfig';

const HttpWrapper = (method, url,withHeaders, data,) => axios({
  method,
  url: `${API_BASE_URL}${url}`,
  headers: withHeaders ? HEADERS_WITH_AUTH() : HEADERS_DEFAULT,
  data,
  });

  export default HttpWrapper;
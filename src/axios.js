import axois from 'axios'
import {baseUrl} from './Constants/constants'
const instance = axois.create({
    baseURL:baseUrl,
});

export default instance
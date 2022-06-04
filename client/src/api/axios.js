// import { create } from '@mui/material/styles/createTransitions';
import axios from 'axios';
export default axios.create({
    baseURL: '/api'
    // baseURL: `${process.env.REACT_APP_SERVER_URL}/api`
});
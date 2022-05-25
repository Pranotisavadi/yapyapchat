import { create } from '@mui/material/styles/createTransitions';
import axios from 'axios';
export default axios.create({
    baseURL: 'http://localhost:8000/api'
});
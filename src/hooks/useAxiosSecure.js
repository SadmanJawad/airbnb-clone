import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)
    useEffect(() => {
        //1. intercept request (client -----> server)
        axiosSecure.interceptors.request.use(config => {
            const token = `Bearer ${localStorage.getItem('access-token')}`
            if (token) {
                config.headers.Authorization = token;
            }
            return config;
        })
        //2.  intercept response ( client <----- server)
        axiosSecure.interceptors.response.use(
            response => response,
            async error => {
                if (
                    error.response &&
                    error.response.status === 401 ||
                    error.response.status === 403) {
                    await logOut();
                    navigate('/login')
                }
                return Promise.reject(error)
            })
    }, [logOut, navigate, axiosSecure])

    return [axiosSecure];
}

// age ebhabe lekha lagto but
// axios.get('fullurl/path');
// axios.post('fullurl/path', data);
// axios.put('fullurl/path', data);

// upore axios secure korar por ebhabe likha jabe
// axiosSecure.get(/path);

export default useAxiosSecure;
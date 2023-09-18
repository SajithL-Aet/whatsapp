import axios from "axios";

const networkClient = (headers) => {

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    });

    axiosInstance.interceptors.request.use(
        config => {
            if (headers) {
                if (headers.token) {
                    //
                }
            }

            return config;
        }, error => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        response => {
            return response;
        }, error => {
            const icError = {
                statusCode: error.response.status,
                errorMessage: "",
                externalErrorMessage: ""
            };
            return Promise.reject(icError);
        }
    );

    return axiosInstance;

};

export default networkClient;

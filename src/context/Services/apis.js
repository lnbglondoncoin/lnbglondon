import axios from "axios";

const createBackendServer = (baseURL) => {
    const api = axios.create({
        baseURL: `${baseURL}/`,
        withCredentials: false,
        headers: {
            Accept: "application/json",
        },
        timeout: 60 * 1000,
    });

    //Interceptor
    api.interceptors.response.use(
        (response) => response,
        (error) => {
            const message = error?.response?.data?.message;
            error.message = message ?? error.message;
            if (error?.response?.data?.errors)
                error.errors = error?.response?.data?.errors;
            return Promise.reject(error);
        }
    );

    const swapTokenForTronBridge = async (body) => await api.post(`lockForTron`,body);
    const lockForTronUpdate = async (body) => await api.post(`lockForTronUpdate`,body);



    const viewAllTransactions = async () => await api.get(`transactions`);
    const viewPendingTransactions = async () => await api.get(`transactions/pending`);
    const viewCompleteTransactions = async () => await api.get(`transactions/complete`);
    const viewTransactionsByLastTime = async (type, filter) => await api.get(`transactions/sortBy`, {
        params: { type, filter }
    });
    // const forgotPassword = async (body) => await api.post(`forgot-password`, body);

    //Returning all the API
    return {
        viewAllTransactions,
        viewPendingTransactions,
        viewCompleteTransactions,
        viewTransactionsByLastTime,
        swapTokenForTronBridge,
        lockForTronUpdate
        
        // forgotPassword

    };
};

const apis = createBackendServer("");
//local
//"http://127.0.0.1:5000"
//Server
//http://ec2-44-223-19-48.compute-1.amazonaws.com:5000/
export default apis;

// TS

// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// export const API_URL = "http://localhost:3001"


// export const doApiGet = async (_url: string) => {
//   try {
//     let resp = await axios.get(_url)
//     return resp.data;
//   }
//   catch (err) {
//     throw err;
//   }
// }

// // For Post,delete, put, patch
// interface DoApiMethodProps {
//   url: string;
//   method: string;
//   body?: any;
// }

// export const doApiMethod = async ({
//   url,
//   method,
//   body = {},
// }: DoApiMethodProps): Promise<AxiosResponse> => {
//   try {
//     console.log(body);
//     const config: AxiosRequestConfig = {
//       url,
//       method,
//       data: body,
//     };
//     const resp = await axios(config);
//     return resp;
//   } catch (err) {
//     throw err;
//   }
// };
import axios from "axios";

const API_URL = "http://localhost:3001";

const doApiGet = async (_url) => {
    try {
        let resp = await axios.get(_url);
        return resp.data;
    } catch (err) {
        throw err;
    }
};

// For Post, delete, put, patch
const doApiMethod = async ({ url, method, body = {} }) => {
    try {
        console.log(body);
        const config = {
            url,
            method,
            data: body,
        };
        const resp = await axios(config);
        return resp;
    } catch (err) {
        throw err;
    }
};

export {
    API_URL,
    doApiGet,
    doApiMethod,
};


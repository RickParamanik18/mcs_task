import axios from "axios";

export const signin = async (data) => {
    try {
        const result = await axios({
            url: `${import.meta.env.VITE_APP_SERVER_API}user/signin`,
            method: "post",
            headers: data,
            withCredentials: true,
        });
        return result.data;
    } catch (err) {
        return null;
    }
};

export const login = async (data) => {
    try {
        const result = await axios({
            url: `${import.meta.env.VITE_APP_SERVER_API}user/login`,
            method: "get",
            headers: data,
            withCredentials: true,
        });
        return result.data;
    } catch (err) {
        return null;
    }
};

export const logout = async (authorization) => {
    try {
        const result = await axios({
            url: `${import.meta.env.VITE_APP_SERVER_API}user/logout`,
            method: "get",
            headers: { authorization },
            withCredentials: true,
        });
        return result.data;
    } catch (err) {
        return null;
    }
};

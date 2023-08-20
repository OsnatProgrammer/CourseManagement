import React, { createContext, useEffect, useState } from "react";
import { API_URL, doApiGet } from "../../services/apiService";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        getCurrentUser();
    }, []);

    const getCurrentUser = async () => {
        try {
            const url = API_URL + `/user/details/123456789`;
            const response = await doApiGet(url);
            console.log("response", response);
            const currentUser = response;
            console.log(currentUser);
            setCurrentUser(currentUser);
            return currentUser;
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch CurrentUser");
        }
    };


    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>

    );
};

export { UserContext, UserProvider };





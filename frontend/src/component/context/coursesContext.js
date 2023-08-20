import React, { createContext, useEffect, useState } from "react";
import { API_URL, doApiGet } from "../../services/apiService";

const CoursesContext = createContext();

const CoursesProvider = ({ children }) => {

    const [courselist, setcourselist] = useState(null);

    useEffect(() => {
        getcourselist();
    }, []);

    const getcourselist = async () => {
        try {
            const url = API_URL + `/course/getAllCourses`;
            const response = await doApiGet(url);
            console.log("response", response);
            const courselist = response;
            console.log(courselist);
            setcourselist(courselist);
            return courselist;
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch courselist");
        }
    };
    return (
        <CoursesContext.Provider value={{ courselist }}>
            {children}
        </CoursesContext.Provider>
    );
};

export { CoursesContext, CoursesProvider };

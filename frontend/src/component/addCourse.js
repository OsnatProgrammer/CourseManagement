import React, { useState , useContext} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { Add } from '@mui/icons-material';
import CoursesContext from './context/coursesContext';
import UserContext from './context/userContext';
import { doApiMethod } from '../../services/apiService';


export default function AddCourse() {

    const courContext = useContext(CoursesContext)
    const userContext = useContext(UserContext)

    const [courseDate, setCourseDate] = useState('');
    const [courseName, setCourseName] = useState('');
    const [courseDateError, setCourseDateError] = useState(false);
    const [courseNameError, setCourseNameError] = useState(false);
    const [courseExists, setCourseExists] = useState(false);

//   const addCourse = async (bodyData) => {
//     let url = API_URL + "/user/addCourse"
//     try {
//       let response  = await doApiMethod(url, "POST", bodyData);
//       let data = response.data;

//       console.log(data);
//     }
//     catch (err) {
//       console.log(err.response);
//       alert("There is problem");

//     }
//   }


  const handleAddCourse = () => {
    if (!courseDateError && !courseNameError
        && courseDate !== '' && courseName !== ''
    ) {
        setCourseDate('');
        setCourseName('');

        dispatch(addCourse({
            courseName: courseName,
            courseDate: courseDate,
        }))
    }
    setCourseDateError(courseDate === '');
    setCourseNameError(courseName === '');
}
    



    const searchCourse = (event) => {
        const value = event.target.value;
        setCourseName(value);

        if (value.trim() === '') {
            setCourseNameError(true);
            setCourseExists(false);
        } else {
            setCourseNameError(false);
            const exists = courselist.some((course) => course.courseName === value);
            setCourseExists(exists);
        }
    };

    const handleCourseDateChange = (event) => {
        const value = event.target.value;
        setCourseDate(value);

        if (value.trim() === '') {
            setCourseDateError(true);
        } else {
            setCourseDateError(false);
        }
    };

    const handleCourseNameChange = (event) => {
        const value = event.target.value;
        setCourseName(value);

        if (value.trim() === '') {
            setCourseNameError(true);
        } else {
            setCourseNameError(false);
        }
    };

    return (
        <Grid container spacing={3} justifyContent="center" alignItems="center" >
            <Grid item>
                <IconButton color="primary" aria-label="add to list" onClick={handleAddCourse}
                    disabled={!courseName || courseExists}
                >
                    <Add />
                </IconButton>
            </Grid>

            <Grid item>
                <TextField
                    sx={{ textAlign: 'right' }}
                    className="center"
                    id="courseDate"
                    label="...תאריך"
                    variant="standard"
                    value={courseDate}
                    onChange={handleCourseDateChange}
                    error={courseDateError}
                    helperText={courseDateError ? 'שדה חובה' : ''}
                />
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker/>
                </LocalizationProvider> */}
            </Grid>
            <Grid item >


                <TextField
                    sx={{ textAlign: 'right' }}
                    className="center"
                    id="courseName"
                    label="...שם הקורס"
                    variant="standard"
                    value={courseName}
                    onChange={handleCourseNameChange}
                    onInput={searchCourse}
                    error={courseNameError}
                    helperText={courseNameError ? 'שדה חובה' : ''}
                />
            </Grid>
        </Grid>
    );
};

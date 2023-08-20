import React from 'react';
// import AddCourse from './addCourse';
import ItemList from './itemList';
import { Grid } from '@mui/material';
import Cat from './cat';


export default function HomePage() {

    return (
        <>
            <h1 align='center'>רישום לקורסים</h1>
            <Grid container rowSpacing={1} columnSpacing={10} margin={8}>
                <Grid item xs={6}>
                    {/* <AddCourse/> */}
                    <ItemList />
                </Grid>
                <Grid item xs={6}>
                    <Cat />
                </Grid>
            </Grid>
        </>
    )
}

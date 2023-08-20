import React, { useContext } from 'react';
import { Checkbox, Divider, Grid, IconButton, List, ListItem, ListItemText } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import { CoursesProvider } from './context/coursesContext';



export default function ItemList() {

    const { courselist } = useContext(CoursesProvider);

    return (
            <Grid item>

                <List
                    sx={{
                        m: 4,
                        width: '100%',
                        maxWidth: 600,
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 350,
                        border:'1px solid gray',
                        '& ul': { padding: 0 },
                    }}
                >
                    {courselist.map((item) => {
                        return (
                            <div key={item.ID}>

                                <ListItem>

                                <Checkbox color="primary" />
                                    <Grid container justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                            <ListItemText
                                                primary={item.courseName}
                                                secondary={item.courseDate}
                                                sx={{textAlign: 'right'}}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Tooltip title={item.courseDescription} placement="left">
                                                <IconButton
                                                    color="primary"
                                                    aria-label="description"
                                                >
                                                    <InfoIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </div>
                        );
                    })}
                </List>
            </Grid>
    )
}



import { Divider, Grid, IconButton, List, ListItem, ListItemText, Tooltip } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';


export default function Cat() {

    const courselist = useSelector((state) => state.courseSlice.data)

  return (
    <Grid item>

    <List
        sx={{
            m: 4,
            width: '100%',
            maxWidth: 300,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 400,
            border:'3px solid gray',
            '& ul': { padding: 0 },
        }}
    >
        {courselist.map((item) => {
            return (
                <div key={item.ID}>

                    <ListItem>

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

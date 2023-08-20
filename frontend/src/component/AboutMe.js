import React, { useContext, useEffect } from "react";
import UserContext from "./UserContext";
import { doApiGet } from "./services/apiService"


export default function AboutMy() {

    const { currentUser } = useContext(UserContext);


    return (
        <div>
            <Avatar {...stringAvatar(currentUser.firstName + currentUser.lastName)} />
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {currentUser.firstName} {currentUser.lastName}
                    </Typography>
                    <Typography variant="h5" component="div">
                        hhhh
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

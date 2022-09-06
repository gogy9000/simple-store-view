import React, {useMemo} from 'react';
import {Grid, Paper} from "@mui/material";
import {ContentCard} from "./ContentCard";

export const ContentContainer = () => {
    const mappedContentCards=useMemo(()=>
         [1,2,3,4,5,6].map((item,index)=>
             <Grid item xs={2} sm={4} md={4} key={index}>
                 <ContentCard/>
             </Grid>

        )
    ,[])

    return (
        <Paper variant={"elevation"} elevation={12} >
            <Grid container padding={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {mappedContentCards}
            </Grid>
        </Paper>
    );
};



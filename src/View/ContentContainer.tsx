import React, {useEffect, useMemo} from 'react';
import {Grid, Paper} from "@mui/material";
import {ContentCard} from "./ContentCard";
import {useAppDispatch, useAppSelector} from "../Common/CustomHooks/CustomHooks";
import {thunks} from "../BLL/Content/ContentSlice";

export const ContentContainer = () => {
    const content = useAppSelector(state => state.contentState.loadedContent)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (Object.keys(content).length===0){
            dispatch(thunks.getContent())
        }
    }, [dispatch,content])

    const mappedContentCards = useMemo(() =>
            content.map((item, index) =>
                <Grid item xs={2} sm={4} md={4} key={item.id}>
                    <ContentCard contentItem={item}/>
                </Grid>
            )
        , [content])

    return (
        <Paper variant={"elevation"} elevation={12}>
            <Grid container padding={1} spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {mappedContentCards}
            </Grid>
        </Paper>
    );
};



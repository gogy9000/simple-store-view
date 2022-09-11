import React, {useEffect, useMemo} from 'react';
import {Grid} from "@mui/material";
import {ContentCard} from "./ContentCard";
import {useAppDispatch, useAppSelector} from "../Common/CustomHooks/CustomHooks";
import {thunks} from "../BLL/Content/ContentSlice";
import {ContainerView} from "./ContainerView";

export const ContentContainer = () => {
    const content = useAppSelector(state => state.contentState.loadedContent)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (Object.keys(content).length === 0) {
            dispatch(thunks.getContent())
        }
    }, [dispatch, content])

    const mappedContentCards = useMemo(() =>
            content.map((item) =>
                <Grid item xs={2} sm={4} md={4} key={item.id}>
                    <ContentCard contentItem={item}/>
                </Grid>
            )
        , [content])

    return (
        <ContainerView>
            <>{mappedContentCards}</>
        </ContainerView>
    );
};



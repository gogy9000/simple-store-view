import React, {useMemo} from 'react';
import {Grid} from "@mui/material";
import {useAppSelector} from "../Common/CustomHooks/CustomHooks";
import {ContentCard} from "./ContentCard";
import {ContainerView} from "./ContainerView";
import {Path} from "../App";
import {EmptyContent} from "./EmptyContent";
import {ShoppingCartTabBar} from "./ShoppingCartTabBar";

export const ShoppingCart = () => {
    const shoppingCartContent = useAppSelector(state => state.contentState.shoppingCart)

    const mappedContentCards = useMemo(() =>
            shoppingCartContent.map((item) =>
                <Grid item xs={2} sm={4} md={4} key={item.id}>
                    <ContentCard contentItem={item}/>
                </Grid>
            )
        , [shoppingCartContent])

    return (
        <ContainerView
            emptyComponent={<EmptyContent navigatePath={Path.home}/>}
            tabBar={<ShoppingCartTabBar/>}
        >
            {mappedContentCards}
        </ContainerView>
    );
};


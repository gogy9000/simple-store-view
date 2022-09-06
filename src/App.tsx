import React from 'react';
import './App.css';
import {Container} from "@mui/material";
import {AppBarPrimary} from "./View/AppBarPrimary";
import {ContentContainer} from "./View/ContentContainer";
import Box from "@mui/material/Box";

export const App = () => {
    return (
        <Box>
            <AppBarPrimary/>
            <Container fixed style={{marginTop: 25}}>
                <ContentContainer/>
            </Container>
        </Box>
    );
}



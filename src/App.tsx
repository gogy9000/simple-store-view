import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import {AppBarPrimary} from "./View/AppBarPrimary";
import {ContentContainer} from "./View/ContentContainer";
import Box from "@mui/material/Box";
import {ShoppingCart} from "./View/ShoppingCart";

export enum Path {
    home="/",
    shoppingCart="/shoppingCart"
}


export const App = () => {
    return (
        <Box>
            <AppBarPrimary/>
            <Routes>
                <Route path={Path.home} element={<ContentContainer/>}/>
                <Route path={Path.shoppingCart} element={<ShoppingCart/>}/>
            </Routes>
        </Box>
    );
}



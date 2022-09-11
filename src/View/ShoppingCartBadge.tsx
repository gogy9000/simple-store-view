import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import * as React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useAppSelector} from "../Common/CustomHooks/CustomHooks";

export const ShoppingCartBadge = () => {
    const overPrice=useAppSelector(state =>
        state.contentState.shoppingCart
            .reduce((ac,item)=>
                ac+item.price*item.numberOfProductUnits,0)
    )

    return (
        <IconButton size="large"  color="inherit">
            <Badge
                badgeContent={overPrice&&overPrice+"$"}

                color="error">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
    )
}
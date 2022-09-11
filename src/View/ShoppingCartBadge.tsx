import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import * as React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useAppSelector} from "../Common/CustomHooks/CustomHooks";
import {useNavigate} from "react-router-dom";
import {Path} from "../App";
import {useCallback} from "react";

export const ShoppingCartBadge = () => {
    const overPrice = useAppSelector(state =>
        state.contentState.shoppingCart
            .reduce((ac, item) =>
                ac + item.price * item.numberOfProductUnits, 0)
    )

    const navigate = useNavigate()

    const onNavigateToShoppingCart = useCallback( () => {
        navigate(Path.shoppingCart)
    },[navigate])

    return (
        <IconButton onClick={onNavigateToShoppingCart} size="large" color="inherit">
            <Badge
                badgeContent={overPrice && overPrice + "$"}
                color="error">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
    )
}
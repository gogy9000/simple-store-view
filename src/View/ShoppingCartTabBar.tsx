import {styled} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useAppSelector} from "../Common/CustomHooks/CustomHooks";

export const ShoppingCartTabBar = () => {
    const overPrice = useAppSelector(state =>
        state.contentState.shoppingCart
            .reduce((ac, item) =>
                ac + item.price * item.numberOfProductUnits, 0)
    )

    return (

            <StyledCard  m={1} p={1}>
                <Button>Place an order</Button>
                <Typography color={"#1976d2"} variant={"h6"}>Total: {overPrice} $</Typography>
            </StyledCard>

    )
}
const StyledCard=styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-width: 2px;
  border-top-style: solid;
  border-top-color: #9aa1a1;
  
`
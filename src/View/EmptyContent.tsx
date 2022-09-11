import React, {FC, memo, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material";

type EmptyContentProps = {
    navigatePath?: string
}
export const EmptyContent: FC<EmptyContentProps> = memo(({navigatePath}) => {
    const navigate = useNavigate()

    const onNavigate = useCallback(() => {
        navigatePath && navigate(navigatePath)
    }, [navigatePath,navigate])

    return (
        <BoxStyled onClick={onNavigate} display={"flex"} justifyContent={"center"} p={3} alignItems={"center"}>
            <ArrowBackIcon/>
            <Typography variant={"h5"}>O curva, it's Empty!?</Typography>
        </BoxStyled>
    )
})

const BoxStyled=styled(Box)`
  color: #1976d2;
  :hover{
    text-decoration-line: underline;
    cursor: pointer;
  }
`

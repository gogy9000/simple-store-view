import {Stack, styled} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import * as React from "react";
import {FC, memo} from "react";

export  type UnitToggleProps = {
    value: string | number
    forwardCallback: () => void
    backCallback: () => void
}
export const UnitToggle: FC<UnitToggleProps> = memo(({value, forwardCallback, backCallback}) => {

    return (
        <Stack direction={"row"} alignItems={"center"}>
            <IconButton color={"primary"} onClick={backCallback} size={"small"}><ArrowBackIosNewIcon/></IconButton>
            <StyledTypography variant={"body2"}>{value}</StyledTypography>
            <IconButton color={"primary"} onClick={forwardCallback} size={"small"}><ArrowForwardIosIcon/></IconButton>

        </Stack>
    )
})

const StyledTypography = styled(Typography)`
  border-style: solid;
  border-width: 2px;
  border-radius: 3px;
  border-color: rgba(173,175,175,0.93);
  padding: 0 4% 0 4%;
  font-weight: bold;
  color: rgba(173,175,175,1);
  cursor: default;
`
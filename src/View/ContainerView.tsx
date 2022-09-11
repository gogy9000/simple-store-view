import React, {FC, ReactElement} from "react";
import {Container, Grid, Paper} from "@mui/material";

type ContainerViewProps = {
    stackBar?: ReactElement
    children: ReactElement[] | ReactElement
    tabBar?: ReactElement
    emptyComponent?: ReactElement
}
export const ContainerView: FC<ContainerViewProps> = ({children, emptyComponent, stackBar, tabBar}) => {

    return (
        <>
            {
                Object.keys(children).length !== 0
                    ?
                    <Container fixed style={{marginTop: 25}}>
                        {stackBar && stackBar}
                        <Paper variant={"elevation"} sx={{justifyContent: "center"}} elevation={12}>
                            <Grid container padding={1} spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                                {children}
                            </Grid>
                            {tabBar && tabBar}
                        </Paper>
                    </Container>

                    :
                    emptyComponent
            }

        </>
    );
}
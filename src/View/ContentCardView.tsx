import {ContentItemType} from "../FireBase/FireBase";
import * as React from "react";
import {FC, memo, useCallback} from "react";
import {Paper} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {UnitToggle} from "./UnitToggle";

import {SelectedProductType} from "../BLL/Content/types";

type ContentCardViewProps = {
    contentItem: ContentItemType
    addProductHandler: (id: string) => void
    selectedProduct?:SelectedProductType
    removeUnitOfProductHandler:(id:string)=>void
    addUnitOfProductHandler:(id:string)=>void
}
export const ContentCardView: FC<ContentCardViewProps> = memo((props) => {
    const {contentItem, addProductHandler,selectedProduct,addUnitOfProductHandler,removeUnitOfProductHandler}=props
    const {title, id, image, price} = contentItem

    const onAddProductToCart = useCallback(() => {
        addProductHandler(id)
    }, [id, addProductHandler])

    const onBackCallback = useCallback( () => {
        removeUnitOfProductHandler(id)
    },[id,removeUnitOfProductHandler])

    const onForwardCallback = useCallback( () => {
        addUnitOfProductHandler(id)
    },[id,addUnitOfProductHandler])


    return (
        <Paper elevation={5}>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    src={image}
                    alt="realism"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button onClick={onAddProductToCart} size="large">Price {price} $</Button>
                    {
                        selectedProduct &&
                        <UnitToggle
                            value={selectedProduct.numberOfProductUnits}
                            backCallback={onBackCallback} forwardCallback={onForwardCallback}
                        />
                    }
                </CardActions>
            </Card>
        </Paper>
    )
})


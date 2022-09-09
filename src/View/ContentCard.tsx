import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import realism from '../Assets/realizm.jpg'
import {Paper} from "@mui/material";
import {FC, memo} from "react";
import {ContentItemType} from "../FireBase/FireBase";

type ContentCardType={
   contentItem:ContentItemType
}

export  const ContentCard:FC<ContentCardType>= memo(({contentItem}) =>{
    const {title,id,image,price}=contentItem

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
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </Paper>
    );
})
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Foodcard(data) {

    console.log("card data : ", data);
    data = data.data;

    return (
        <Card sx={{ maxWidth: 400,  }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image= {data.image}
                    alt="green iguana"
                    sx={{ padding: "1em 0em 0 1em", objectFit: "contain" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.details}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Order - {data.price} Rs/Plate
                </Button>
            </CardActions>
        </Card>
    );
}

export default Foodcard;

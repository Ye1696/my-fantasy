import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import newsPhoto from "../../../assets/kimmich.jpg"

export function GoodPlayer() {

  return (
    <Card sx={{ maxWidth: 400, position:"sticky", top:"75px"}}>
      <CardMedia
        component="img"
        height="500"
        image={newsPhoto}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}

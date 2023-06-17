import React from "react";
import { useParams } from "react-router-dom";
import db from "../../db.json";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProductDetails: React.FC = () => {
  const [itemDetails, setItemDetails] = React.useState<any>(null);
  const { category, id } = useParams();
  React.useEffect(() => {
    for (let key in db) {
      if (key === category) {
        const items = (db as any)[key];
        const item = items.find((item: any) => item.id === Number(id));
        setItemDetails(item);
      }
    }
  }, [id, category]);

  console.log(itemDetails);

  return (
    <div>
      {itemDetails ? (
        <Card sx={{ maxWidth: 345, margin: "auto" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="500"
              image={itemDetails.image_url}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {itemDetails.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {itemDetails.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                MRP: {itemDetails.mrp}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {itemDetails.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          {/*<CardActions>*/}
          {/*  <IconButton>*/}
          {/*    <BsHeartFill />*/}
          {/*  </IconButton>*/}
          {/*</CardActions>*/}
        </Card>
      ) : (
        <div>
          <Typography gutterBottom variant="h5" component="div">
            The item you are looking for is not available
          </Typography>
          <Link to="/">
            <Button variant="contained">Go Back</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

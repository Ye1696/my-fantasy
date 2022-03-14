import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { ExpandMore, Favorite, MoreVert, Share } from "@material-ui/icons";
import { useContentful } from "../../../client";
import { Box } from "@mui/material";
import { MultipleMedia } from "./MultipleMedia";

const ExpandMoreAction = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function News() {
  const { getNews } = useContentful();
  const [news, setNews] = useState([]);
  const [showDescription, setShowDescription] = useState(null);

  const handleExpandClick = (id) => {
    if (id === showDescription) {
      setShowDescription(null);
    } else {
      setShowDescription(id);
    }
  };
  useEffect(() => {
    getNews().then((res) => setNews(res));
  }, []);
  return (
    <Box sx={{ overflow: "hidden" }}>
      {news.map((item, index) => {
        const show = showDescription === index;
        return (
          <Card sx={{ maxWidth: 865, marginBottom: "10px" }}>
            <CardHeader
              title={item.shotDescription}
              subheader="September 14, 2016"
            />
            <CardMedia
              height="100%"
              sx={{
                "&.MuiCardMedia-imgobjectFit": {
                  objectFit: "cover",
                  width: "80%",
                },
              }}
              children={<MultipleMedia medias={item.newsMedia}/>}
            />
            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
              <ExpandMoreAction
                expand={show}
                onClick={() => handleExpandClick(index)}
                aria-expanded={show}
                aria-label="show more"
              >
                <ExpandMore />
              </ExpandMoreAction>
            </CardActions>
            <Collapse in={show} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{item.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        );
      })}
    </Box>
  );
}

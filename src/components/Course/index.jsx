import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  withStyles,
} from "@material-ui/core";
import styles from "./style";

class Course extends Component {
  render() {
    const { tenKhoaHoc, moTa, hinhAnh } = this.props.item;
    const {img,title} = this.props.classes;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
          className={img}
            image={hinhAnh}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={title} gutterBottom variant="h5" component="h2">
              {tenKhoaHoc}
            </Typography>
            <Typography className={title} variant="body2" color="textSecondary" component="p">
              {moTa.substr(0,100)+'...'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Chi Tiết
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Course);

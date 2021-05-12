import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles( (theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing( 1 ),
    paddingBottom: theme.spacing( 1 )
  },
  playIcon: {
    height: 38,
    width: 38
  }
}) );

export default function ProjectCard({ imgSrc }) {
  const classes = useStyles();

  return (
    <Card className={ classes.root }>
      <div className={ classes.details }>
        <CardContent className={ classes.content }>

          <Typography style={{ fontWeight: 'bolder'}} noWrap={true} >
            Live From Space
          </Typography>

          <Typography variant="subtitle2" color="textSecondary">
            #agency
          </Typography>

        </CardContent>
      </div>

      <CardMedia
        className={ classes.cover }
        image={ imgSrc }
        title="Live from space album cover"
      />
    </Card>
  );
}
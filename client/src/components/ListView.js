import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { getDate } from "../utils/dateSupportFuncs";

export default function ListView({ threads }) {
  return (
    <Grid container sx={{ margin: "auto" }}>
      <List sx={{ width: "100%" }}>
        {threads?.map(({ posts }) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            key={posts[0]?.tim}
            sx={{ margin: "auto" }}
          >
            <ListItem
              key={posts[0]?.num}
              sx={{
                height: "120px",
                width: "100%",
                border: "1px solid grey",
                textOverflow: "ellipsis",
                background: "white",
                "&:hover": {
                  "& .postCount": {
                    display: "inline-block",
                  },
                },
              }}
            >
              <ListItemText sx={{ width: "95%" }}>
                <Typography
                  variant="h5"
                  noWrap
                  sx={{ textTransform: "capitalize" }}
                >
                  {posts[0]?.semantic_url}
                </Typography>
                <Typography
                  paragraph
                  noWrap
                  sx={{ textTransform: "capitalize" }}
                >
                  {posts[0]?.com}
                </Typography>

                <cite
                  style={{ position: "absolute", bottom: "2px", left: "15px" }}
                >
                  {getDate(posts[0]?.now)}
                </cite>
              </ListItemText>
              <ListItemText sx={{ width: "5%" }}>
                <Box
                  component="span"
                  className="postCount"
                  sx={{
                    display: "none",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#1976D2",
                    textAlign: "center",
                    verticalAlign: "middle",
                    color: "white",
                    fontSize: "16px",
                    lineHeight: "25px",
                  }}
                >
                  {posts.length}
                </Box>
              </ListItemText>
            </ListItem>
          </Grid>
        ))}
      </List>
    </Grid>
  );
}

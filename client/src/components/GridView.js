import React from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { getDate } from "../utils/dateSupportFuncs";

const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.primary,
  width: "100%",
}));

export default function GridView({ threads }) {
  return (
    <Box sx={{ flexGrow: 1, margin: "40px" }}>
      <Grid container spacing={6}>
        {threads?.map(({ posts }) => (
          <Grid item xs={12} sm={6} md={4} key={posts[0]?.tim}>
            <Card
              sx={{
                position: "relative",
                height: "200px",
                "&:hover": {
                  "& .postCount": {
                    display: "inline-block",
                  },
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{ textTransform: "capitalize", paddingTop: "10px" }}
              >
                {posts[0]?.semantic_url}
              </Typography>
              <Typography
                paragraph
                // noWrap
                sx={{
                  height: "50px",
                  overflow: "hidden",
                  margin: "10px",
                  textTransform: "capitalize",
                }}
              >
                {posts[0]?.com}
              </Typography>
              <cite
                style={{ position: "absolute", bottom: "10px", left: "10px" }}
              >
                {getDate(posts[0]?.now)}
              </cite>
              <Box
                component="span"
                className="postCount"
                sx={{
                  display: "none",
                  position: "absolute",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: "#1976D2",
                  textAlign: "center",
                  verticalAlign: "middle",
                  color: "white",
                  fontSize: "16px",
                  lineHeight: "24px",
                  top: "-10px",
                  right: "-7px",
                }}
              >
                {posts.length}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

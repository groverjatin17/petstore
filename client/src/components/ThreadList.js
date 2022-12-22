import React from "react";
import ListView from "./ListView";
import GridView from "./GridView";

const ThreadList = ({ threads, mode }) =>
  mode === "grid" ? (
    <GridView threads={threads} />
  ) : (
    <ListView threads={threads} />
  );

export default ThreadList;

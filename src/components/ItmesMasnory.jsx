import React from "react";
import { Masonry } from "@mui/lab";
import TaskBox from "./TaskBox";
import ListBox from "./ListBox";

function ItmesMasnory() {
  return (
    <div>
      <Masonry
        columns={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
        }}
        spacing={2}
      >
        <TaskBox />
        <TaskBox />
        <ListBox />
        <TaskBox />
        <TaskBox />
        <TaskBox />
        <TaskBox />
        <TaskBox />
        <TaskBox />
        <TaskBox />
      </Masonry>
    </div>
  );
}

export default ItmesMasnory;

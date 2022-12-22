import * as React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function VerticalToggleButtons({ view, setView }) {
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      sx={{ background: "white" }}
      orientation="horizontal"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="grid" aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

import React, { useState } from "react";
import { Grid, Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TodoForm from "./TodoForm";
import ListForm from "./ListForm";
function InputTabs() {
  const [tab, setTab] = useState("2");
  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <Box
            sx={{
              margin: "auto",
              border: 1,
              borderRadius: 2,
              borderColor: "#eeee",
              padding: 1,
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <TabContext value={tab}>
              <Box borderBottom={1} border={"#eeee"}>
                <TabList onChange={(e, val) => setTab(val)}>
                  <Tab label="Take a D0" value={"1"} />
                  <Tab label="Take a List" value={"2"} />
                </TabList>
              </Box>
              <TabPanel value={"1"}>
                <TodoForm />
              </TabPanel>
              <TabPanel value={"2"}>
                <ListForm />
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default InputTabs;
